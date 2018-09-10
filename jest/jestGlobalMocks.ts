const mock = () => {
  Object.defineProperty(window, 'getComputedStyle', {
    value: () => ['-webkit-appearance'],
  });

  /** Required for Angular material **/
  Object.defineProperty(window, 'CSS', {
    value: mock(),
  });
  Object.defineProperty(document.body.style, 'transform', {
    value: () => ({
      enumerable: true,
      configurable: true,
    }),
  });
};
