// Base class, for general usage
class Plugin {
    constructor(name) {
        this.name = name;
    }
    
    init() {
        console.log(`${this.name} initialized`);
    }
}

// Extension using prototype
const loggerMixin = {
    log(message) {
        console.log(`[${this.name}] ${message}`);
    },
    
    error(message) {
        console.error(`[${this.name}] ERROR: ${message}`);
    }
};

// Apply mixin to prototype
Object.assign(Plugin.prototype, loggerMixin);

// Usage
const myPlugin = new Plugin('MyPlugin');
myPlugin.init();    // MyPlugin initialized
myPlugin.log('Working!'); // [MyPlugin] Working!