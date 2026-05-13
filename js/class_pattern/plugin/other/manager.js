class Manager {
  constructor() {
    this.plugins = new Map();
    this.hooks = {};
  }

  register(plugin) {
    if (this.plugins.has(plugin.name)) {
      throw new Error(`Plugin ${plugin.name} already registered`);
    }

    plugin.manager = this;
    plugin.enabled = true;

    this.plugins.set(plugin.name, plugin);

    if (plugin.onRegister) {
      plugin.onRegister(this);
    }

    return plugin;
  }

  addHook(hookName, pluginName, callback) {
    if (!this.hooks[hookName]) {
      this.hooks[hookName] = [];
    }
    this.hooks[hookName].push({ pluginName, callback });
  }

  async runHook(hookName, ...args) {
    const hooks = this.hooks[hookName] || [];
    const results = [];

    for (const hook of hooks) {
      const plugin = this.plugins.get(hook.pluginName);
      if (plugin && plugin.enabled) {
        results.push(await hook.callback(...args));
      }
    }

    return results;
  }
}

class Base {
  constructor(name, version) {
    this.name = name;
    this.version = version;
  }

  // Interface
  onRegister(manager) {
    console.log(`${this.name} v${this.version} registered`);
  }
}

// Plugin
class Logger extends Base {
  constructor() {
    super('Logger', '1.0.0');
  }

  onRegister(manager) {

    manager.addHook('beforeSave', this.name, (data) => {
      console.log('Logging before save:', data);
      return data;
    });

    manager.addHook('afterSave', this.name, (result) => {
      console.log('Logging after save:', result);
      return result;
    });
  }
}

// Usage
const manager = new Manager();
const logger = new Logger();
manager.register(logger);

await manager.runHook('beforeSave', { id: 1, name: 'test' });