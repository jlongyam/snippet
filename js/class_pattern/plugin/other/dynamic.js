class Core {
    constructor(data) {
        this.data = data;
        this.extensions = new Set();
    }
    
    use(extension) {
        // Extend prototype with extension methods
        const methods = Object.getOwnPropertyNames(extension.prototype)
            .filter(name => name !== 'constructor');
        
        methods.forEach(method => {
            if (!this.constructor.prototype[method]) {
                this.constructor.prototype[method] = extension.prototype[method];
            }
        });
        
        this.extensions.add(extension.name);
        return this;
    }
}

// Extension definition
class DataExtension {
    getFormatted() {
        return JSON.stringify(this.data, null, 2);
    }
    
    validate() {
        return this.data !== null && this.data !== undefined;
    }
}

class MathExtension {
    sum() {
        if (Array.isArray(this.data)) {
            return this.data.reduce((a, b) => a + b, 0);
        }
        return this.data;
    }
    
    multiply(factor) {
        if (typeof this.data === 'number') {
            return this.data * factor;
        }
        return null;
    }
}

// Usage
const core = new Core([1, 2, 3, 4, 5]);
core.use(DataExtension);
core.use(MathExtension);

console.log(core.getFormatted()); // Formatted array
console.log(core.sum());          // 15
console.log(core.validate());     // true
