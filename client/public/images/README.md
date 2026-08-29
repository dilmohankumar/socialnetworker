Drop real image assets here, matching the paths already referenced in
`src/data/mockData.js` / `server/src/data/seedData.js`:

  images/services/mobile-apps.jpg
  images/services/cloud-web.jpg
  images/services/design-ui-ux.jpg
  images/services/ai-ml-bi.jpg
  images/services/quality-engineering.jpg
  images/services/sap-testing.jpg
  images/services/bps.jpg
  images/about/team.jpg

Until then, ServiceCard/AboutSection hide the <img> gracefully on load error
(no broken-image icons) so the layout still looks intentional.
