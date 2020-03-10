const _ = {
  delay(ms = 1000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },

  isUndefined(element) {
    return typeof element === "undefined";
  },

  isNull(data) {
    return data === null;
  },

  isString(data) {
    return typeof data === "string";
  },

  isEmpty(data) {
    return data.length && data.length === 0;
  }
};

export { _ };
