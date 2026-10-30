import mongoose from 'mongoose';

function httpError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

/**
 * Builds list / get / create / update / remove handlers for a model.
 *
 * options:
 *  - sort:          default sort for list
 *  - publicFilter:  always-applied filter for public reads (e.g. { isPublished: true })
 *  - filters:       { queryParam: 'field' } — equality filters allowed from the query string
 *  - listSelect:    mongoose select string for list responses (keeps list payloads small)
 *  - bySlug:        whether GET /:key resolves a slug (otherwise only _id)
 */
export function makeCrud(Model, { sort = { order: 1, createdAt: -1 }, publicFilter = {}, filters = {}, listSelect = '', bySlug = false } = {}) {
  const toBool = (v) => v === 'true' || v === '1';

  return {
    async list(req, res, next) {
      try {
        const query = { ...publicFilter };
        for (const [param, field] of Object.entries(filters)) {
          const value = req.query[param];
          if (value === undefined || value === '') continue;
          const schemaType = Model.schema.path(field)?.instance;
          if (schemaType === 'Boolean') query[field] = toBool(value);
          else if (schemaType === 'Array') query[field] = String(value);
          else query[field] = String(value);
        }
        const limit = Math.min(parseInt(req.query.limit, 10) || 0, 100);
        let q = Model.find(query).sort(sort);
        if (listSelect) q = q.select(listSelect);
        if (limit) q = q.limit(limit);
        res.json(await q.lean());
      } catch (err) {
        next(err);
      }
    },

    async get(req, res, next) {
      try {
        const { key } = req.params;
        const or = [];
        if (bySlug) or.push({ slug: key });
        if (mongoose.isValidObjectId(key)) or.push({ _id: key });
        if (!or.length) throw httpError(404, 'Not found');
        const doc = await Model.findOne({ $or: or, ...publicFilter }).lean();
        if (!doc) throw httpError(404, 'Not found');
        res.json(doc);
      } catch (err) {
        next(err);
      }
    },

    async create(req, res, next) {
      try {
        res.status(201).json(await Model.create(req.body));
      } catch (err) {
        if (err.name === 'ValidationError') err.status = 400;
        if (err.code === 11000) err.status = 409;
        next(err);
      }
    },

    async update(req, res, next) {
      try {
        if (!mongoose.isValidObjectId(req.params.key)) throw httpError(400, 'Invalid id');
        const doc = await Model.findByIdAndUpdate(req.params.key, req.body, { new: true, runValidators: true });
        if (!doc) throw httpError(404, 'Not found');
        res.json(doc);
      } catch (err) {
        if (err.name === 'ValidationError') err.status = 400;
        next(err);
      }
    },

    async remove(req, res, next) {
      try {
        if (!mongoose.isValidObjectId(req.params.key)) throw httpError(400, 'Invalid id');
        const doc = await Model.findByIdAndDelete(req.params.key);
        if (!doc) throw httpError(404, 'Not found');
        res.json({ message: 'Deleted' });
      } catch (err) {
        next(err);
      }
    },
  };
}
