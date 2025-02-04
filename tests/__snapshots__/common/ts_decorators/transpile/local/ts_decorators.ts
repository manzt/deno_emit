function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
import { B } from "./subdir/more_decorators.ts";
function Decorator() {
    return function(target, propertyKey, descriptor) {
        const originalFn = descriptor.value;
        descriptor.value = async function(...args) {
            return await originalFn.apply(this, args);
        };
        return descriptor;
    };
}
class SomeClass {
    async test() {}
}
_ts_decorate([
    Decorator()
], SomeClass.prototype, "test", null);
new SomeClass().test();
new B().method();
