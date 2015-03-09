module.exports = function(app) {
  app.models().forEach(function(model) {
    model.beforeRemote(
      'create',
      function(ctx, modelInstance, next) {
        delete ctx.args.data.id;
        next();
      }
    );
  });
};
