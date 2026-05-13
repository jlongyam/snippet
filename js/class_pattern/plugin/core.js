class Core {
  constructor() {
    Core.plugins.forEach(plugin => {
      plugin(this);
    });
  }
  static plugins = [];
  static plugin(fn) {
    Core.plugins.push(fn);
    return Core;
  }
  baseMethod() {
    console.log('[Base]: base method');
    return this;
  }
}

export default Core;