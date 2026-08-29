function Container({ children, className = '' }) {
  return <div className={`container mx-auto px-5 md:px-8 ${className}`}>{children}</div>;
}

export default Container;
