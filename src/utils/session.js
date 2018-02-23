exports.SessionStorage = (() => {

  return {
    'set': (key, value) => {
      sessionStorage.setItem(key, value);
    },

    'get': (key) => {
      return sessionStorage.getItem(key);
    },

    'clear': () => {
      sessionStorage.clear();
    }
  }
})();