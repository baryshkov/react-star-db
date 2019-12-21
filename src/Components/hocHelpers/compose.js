const compose = (...funcs) => component => {
  return funcs.reduceRight((accum, fn) => fn(accum), component);
};

export default compose;
