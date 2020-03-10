export const router = {
  getUrl() {
    return window.location.hash.slice(1);
  },

  navigate(hash) {
    return (window.location.hash = hash);
  }
};
