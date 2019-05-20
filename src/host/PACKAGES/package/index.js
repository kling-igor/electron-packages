const PackageView = require("./component").PackageView;

module.exports = {
  disposables: null,

  activate: ctx => {
    // тут подписки
    console.log(ctx);
    ctx.registerPackage(PackageView);
  },

  deactivate: ctx => {}
};
