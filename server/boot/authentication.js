module.exports = function enableAuthentication(server) {
  if (process.env.NODE_ENV === 'production') {
    server.enableAuth();
  }
};
