// GOod for UI
class PluginDecorator {
    constructor(target) {
        this.target = target;
        this.plugins = new Map();
    }
    
    addPlugin(name, plugin) {
        if (typeof plugin === 'function') {
            // Wrap existing method
            const original = this.target[name];
            if (original) {
                this.target[name] = (...args) => {
                    const result = original.apply(this.target, args);
                    return plugin(result, ...args);
                };
            } else {
                this.target[name] = plugin.bind(this.target);
            }
        } else {
            // Add properties/methods from plugin object
            Object.assign(this.target, plugin);
        }
        
        this.plugins.set(name, plugin);
        return this;
    }
    
    removePlugin(name) {
        // Implementation to revert changes
        this.plugins.delete(name);
    }
}

// Usage
class Calculator {
    add(a, b) {
        return a + b;
    }
    
    multiply(a, b) {
        return a * b;
    }
}

const calc = new Calculator();
const decorated = new PluginDecorator(calc);

// Add logging plugin
decorated.addPlugin('add', (result, a, b) => {
    console.log(`Adding ${a} + ${b} = ${result}`);
    return result;
});

// Add caching plugin
decorated.addPlugin('caching', {
    cache: new Map(),
    getCached(key) {
        return this.cache.get(key);
    },
    setCached(key, value) {
        this.cache.set(key, value);
    }
});

console.log(calc.add(5, 3));     // Logs: Adding 5 + 3 = 8, returns 8
calc.setCached('lastResult', 8);  // Caching method available