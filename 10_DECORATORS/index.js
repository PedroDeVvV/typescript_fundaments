//decorator
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log("Target: ", target);
        console.log("propertKey: ", propertKey);
        console.log("Descriptor: ", descriptor);
    };
}
var myClass = /** @class */ (function () {
    function myClass() {
    }
    //   @myDecorator()
    myClass.prototype.testing = function () {
        console.log("Terminando execu\u00E7\u00E3o do m\u00E9todo");
    };
    return myClass;
}());
var myObj = new myClass();
myObj.testing();
//múltiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("executando a.");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("executando b.");
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        console.log("executando c.");
    };
}
console.log("-------------------------------------------------------");
var MultipleDecorators = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _testing_decorators;
    return _a = /** @class */ (function () {
            function MultipleDecorators() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            MultipleDecorators.prototype.testing = function () {
                console.log("Terminando a execução");
            };
            return MultipleDecorators;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _testing_decorators = [a(), b(), c()];
            __esDecorate(_a, null, _testing_decorators, { kind: "method", name: "testing", static: false, private: false, access: { has: function (obj) { return "testing" in obj; }, get: function (obj) { return obj.testing; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var n1 = new MultipleDecorators();
n1.testing();
//class decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando usuário");
    }
}
var User = function () {
    var _classDecorators = [classDec];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User = _classThis = /** @class */ (function () {
        function User_1(name) {
            this.name = name;
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
var p1 = new User("Pedro");
console.log(p1);
//decorator de método
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        // descriptor.enumerable = value
    };
}
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    //   @enumerable(false)
    Machine.prototype.showName = function () {
        return "O nome da m\u00E1quina \u00E9: ".concat(this.name);
    };
    return Machine;
}());
var m1 = new Machine("Trator");
console.log(m1);
