import {
  require_browser_ponyfill,
  require_events
} from "./chunk-7TZ33SFM.js";
import {
  $,
  $t,
  At,
  B,
  Bt,
  Dn,
  Dt,
  Fn,
  Ft,
  Gt,
  H,
  Ht,
  Jn,
  Kn,
  Kt,
  Ln,
  Lt,
  Mn,
  Mt,
  N,
  Nt,
  Qt,
  Re,
  Rn,
  S,
  U,
  Vn,
  Vt,
  Wt,
  Xe,
  Xt,
  Zt,
  _,
  an,
  at,
  bt,
  cn,
  concat,
  ct,
  dt,
  ee,
  er,
  et,
  fromString,
  ft,
  h,
  it,
  j,
  jn,
  jt,
  kn,
  kt,
  lt,
  mt,
  nt,
  oe,
  p,
  pt,
  q,
  qt,
  require_binary,
  require_cjs,
  require_random,
  require_wipe,
  st,
  te,
  toString,
  un,
  ut,
  ve,
  w,
  xn,
  xt,
  yt,
  zn,
  zt
} from "./chunk-EEVG2WDH.js";
import {
  __commonJS,
  __esm,
  __export,
  __reExport,
  __toCommonJS,
  __toESM
} from "./chunk-W7S2ME4R.js";

// node_modules/@walletconnect/keyvaluestorage/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d2, b4) {
  extendStatics(d2, b4);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p4 in s)
    if (Object.prototype.hasOwnProperty.call(s, p4) && e.indexOf(p4) < 0)
      t[p4] = s[p4];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p4 = Object.getOwnPropertySymbols(s); i2 < p4.length; i2++) {
      if (e.indexOf(p4[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p4[i2]))
        t[p4[i2]] = s[p4[i2]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i2 = decorators.length - 1; i2 >= 0; i2--)
      if (d2 = decorators[i2])
        r = (c2 < 3 ? d2(r) : c2 > 3 ? d2(target, key, r) : d2(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f3, y4, t, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (_3)
      try {
        if (f3 = 1, y4 && (t = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t = y4["return"]) && t.call(y4), 0) : y4.next) && !(t = t.call(y4, op[1])).done)
          return t;
        if (y4 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y4 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [6, e];
        y4 = 0;
      } finally {
        f3 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o, m2, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m2[k];
}
function __exportStar(m2, exports) {
  for (var p4 in m2)
    if (p4 !== "default" && !exports.hasOwnProperty(p4))
      exports[p4] = m2[p4];
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i2 = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i2 >= o.length)
          o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i2 = m2.call(o), r, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i2.next()).done)
      ar2.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread() {
  for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
    ar2 = ar2.concat(__read(arguments[i2]));
  return ar2;
}
function __spreadArrays() {
  for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s += arguments[i2].length;
  for (var r = Array(s), k = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j4 = 0, jl = a2.length; j4 < jl; j4++, k++)
      r[k] = a2[j4];
  return r;
}
function __await(v2) {
  return this instanceof __await ? (this.v = v2, this) : new __await(v2);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i2, q3 = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n2) {
    if (g5[n2])
      i2[n2] = function(v2) {
        return new Promise(function(a2, b4) {
          q3.push([n2, v2, a2, b4]) > 1 || resume(n2, v2);
        });
      };
  }
  function resume(n2, v2) {
    try {
      step(g5[n2](v2));
    } catch (e) {
      settle(q3[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q3[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f3, v2) {
    if (f3(v2), q3.shift(), q3.length)
      resume(q3[0][0], q3[0][1]);
  }
}
function __asyncDelegator(o) {
  var i2, p4;
  return i2 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f3) {
    i2[n2] = o[n2] ? function(v2) {
      return (p4 = !p4) ? { value: __await(o[n2](v2)), done: n2 === "return" } : f3 ? f3(v2) : v2;
    } : f3;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i2;
  return m2 ? m2.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o[n2] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n2](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (Object.hasOwnProperty.call(mod, k))
        result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "node_modules/@walletconnect/keyvaluestorage/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d2, b4) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b5) {
        d3.__proto__ = b5;
      } || function(d3, b5) {
        for (var p4 in b5)
          if (b5.hasOwnProperty(p4))
            d3[p4] = b5[p4];
      };
      return extendStatics(d2, b4);
    };
    __assign = function() {
      __assign = Object.assign || function __assign5(t) {
        for (var s, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s = arguments[i2];
          for (var p4 in s)
            if (Object.prototype.hasOwnProperty.call(s, p4))
              t[p4] = s[p4];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// node_modules/safe-json-utils/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/safe-json-utils/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function safeJsonParse2(value) {
      if (typeof value !== "string") {
        throw new Error(`Cannot safe json parse value of type ${typeof value}`);
      }
      try {
        return JSON.parse(value);
      } catch (_a) {
        return value;
      }
    }
    exports.safeJsonParse = safeJsonParse2;
    function safeJsonStringify2(value) {
      return typeof value === "string" ? value : JSON.stringify(value, (key, value2) => typeof value2 === "undefined" ? null : value2);
    }
    exports.safeJsonStringify = safeJsonStringify2;
  }
});

// node_modules/@walletconnect/keyvaluestorage/dist/cjs/browser/lib/localStorage.js
var require_localStorage = __commonJS({
  "node_modules/@walletconnect/keyvaluestorage/dist/cjs/browser/lib/localStorage.js"(exports, module) {
    "use strict";
    (function() {
      "use strict";
      let db;
      function LocalStorage() {
      }
      db = LocalStorage;
      db.prototype.getItem = function(key) {
        if (this.hasOwnProperty(key)) {
          return String(this[key]);
        }
        return null;
      };
      db.prototype.setItem = function(key, val) {
        this[key] = String(val);
      };
      db.prototype.removeItem = function(key) {
        delete this[key];
      };
      db.prototype.clear = function() {
        const self2 = this;
        Object.keys(self2).forEach(function(key) {
          self2[key] = void 0;
          delete self2[key];
        });
      };
      db.prototype.key = function(i2) {
        i2 = i2 || 0;
        return Object.keys(this)[i2];
      };
      db.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length;
      });
      if (typeof global !== "undefined" && global.localStorage) {
        module.exports = global.localStorage;
      } else if (typeof window !== "undefined" && window.localStorage) {
        module.exports = window.localStorage;
      } else {
        module.exports = new LocalStorage();
      }
    })();
  }
});

// node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/types.js
var require_types = __commonJS({
  "node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IKeyValueStorage = void 0;
    var IKeyValueStorage = class {
    };
    exports.IKeyValueStorage = IKeyValueStorage;
  }
});

// node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/utils.js
var require_utils = __commonJS({
  "node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseEntry = void 0;
    var safe_json_utils_1 = require_cjs2();
    function parseEntry(entry) {
      var _a;
      return [entry[0], safe_json_utils_1.safeJsonParse((_a = entry[1]) !== null && _a !== void 0 ? _a : "")];
    }
    exports.parseEntry = parseEntry;
  }
});

// node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/index.js
var require_shared = __commonJS({
  "node_modules/@walletconnect/keyvaluestorage/dist/cjs/shared/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_utils(), exports);
  }
});

// node_modules/@walletconnect/keyvaluestorage/dist/cjs/browser/index.js
var require_browser = __commonJS({
  "node_modules/@walletconnect/keyvaluestorage/dist/cjs/browser/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyValueStorage = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var safe_json_utils_1 = require_cjs2();
    var localStorage_1 = tslib_1.__importDefault(require_localStorage());
    var shared_1 = require_shared();
    var KeyValueStorage = class {
      constructor() {
        this.localStorage = localStorage_1.default;
      }
      getKeys() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          return Object.keys(this.localStorage);
        });
      }
      getEntries() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          return Object.entries(this.localStorage).map(shared_1.parseEntry);
        });
      }
      getItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const item = this.localStorage.getItem(key);
          if (item === null) {
            return void 0;
          }
          return safe_json_utils_1.safeJsonParse(item);
        });
      }
      setItem(key, value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this.localStorage.setItem(key, safe_json_utils_1.safeJsonStringify(value));
        });
      }
      removeItem(key) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this.localStorage.removeItem(key);
        });
      }
    };
    exports.KeyValueStorage = KeyValueStorage;
    exports.default = KeyValueStorage;
  }
});

// node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values2
});
function __extends2(d2, b4) {
  extendStatics2(d2, b4);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
}
function __rest2(s, e) {
  var t = {};
  for (var p4 in s)
    if (Object.prototype.hasOwnProperty.call(s, p4) && e.indexOf(p4) < 0)
      t[p4] = s[p4];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p4 = Object.getOwnPropertySymbols(s); i2 < p4.length; i2++) {
      if (e.indexOf(p4[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p4[i2]))
        t[p4[i2]] = s[p4[i2]];
    }
  return t;
}
function __decorate2(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i2 = decorators.length - 1; i2 >= 0; i2--)
      if (d2 = decorators[i2])
        r = (c2 < 3 ? d2(r) : c2 > 3 ? d2(target, key, r) : d2(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f3, y4, t, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (_3)
      try {
        if (f3 = 1, y4 && (t = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t = y4["return"]) && t.call(y4), 0) : y4.next) && !(t = t.call(y4, op[1])).done)
          return t;
        if (y4 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y4 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [6, e];
        y4 = 0;
      } finally {
        f3 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o, m2, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m2[k];
}
function __exportStar2(m2, exports) {
  for (var p4 in m2)
    if (p4 !== "default" && !exports.hasOwnProperty(p4))
      exports[p4] = m2[p4];
}
function __values2(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i2 = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i2 >= o.length)
          o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i2 = m2.call(o), r, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i2.next()).done)
      ar2.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread2() {
  for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
    ar2 = ar2.concat(__read2(arguments[i2]));
  return ar2;
}
function __spreadArrays2() {
  for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s += arguments[i2].length;
  for (var r = Array(s), k = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j4 = 0, jl = a2.length; j4 < jl; j4++, k++)
      r[k] = a2[j4];
  return r;
}
function __await2(v2) {
  return this instanceof __await2 ? (this.v = v2, this) : new __await2(v2);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i2, q3 = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n2) {
    if (g5[n2])
      i2[n2] = function(v2) {
        return new Promise(function(a2, b4) {
          q3.push([n2, v2, a2, b4]) > 1 || resume(n2, v2);
        });
      };
  }
  function resume(n2, v2) {
    try {
      step(g5[n2](v2));
    } catch (e) {
      settle(q3[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q3[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f3, v2) {
    if (f3(v2), q3.shift(), q3.length)
      resume(q3[0][0], q3[0][1]);
  }
}
function __asyncDelegator2(o) {
  var i2, p4;
  return i2 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f3) {
    i2[n2] = o[n2] ? function(v2) {
      return (p4 = !p4) ? { value: __await2(o[n2](v2)), done: n2 === "return" } : f3 ? f3(v2) : v2;
    } : f3;
  }
}
function __asyncValues2(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i2;
  return m2 ? m2.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o[n2] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n2](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (Object.hasOwnProperty.call(mod, k))
        result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault2(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "node_modules/@walletconnect/heartbeat/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d2, b4) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b5) {
        d3.__proto__ = b5;
      } || function(d3, b5) {
        for (var p4 in b5)
          if (b5.hasOwnProperty(p4))
            d3[p4] = b5[p4];
      };
      return extendStatics2(d2, b4);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign5(t) {
        for (var s, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s = arguments[i2];
          for (var p4 in s)
            if (Object.prototype.hasOwnProperty.call(s, p4))
              t[p4] = s[p4];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/events/dist/esm/events.js
var IEvents;
var init_events = __esm({
  "node_modules/@walletconnect/events/dist/esm/events.js"() {
    IEvents = class {
    };
  }
});

// node_modules/@walletconnect/events/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  IEvents: () => IEvents
});
var init_esm = __esm({
  "node_modules/@walletconnect/events/dist/esm/index.js"() {
    init_events();
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/types/heartbeat.js
var require_heartbeat = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/types/heartbeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IHeartBeat = void 0;
    var events_1 = (init_esm(), __toCommonJS(esm_exports));
    var IHeartBeat = class extends events_1.IEvents {
      constructor(opts) {
        super();
      }
    };
    exports.IHeartBeat = IHeartBeat;
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/types/index.js
var require_types2 = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_heartbeat(), exports);
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/constants/heartbeat.js
var require_heartbeat2 = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/constants/heartbeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HEARTBEAT_EVENTS = exports.HEARTBEAT_INTERVAL = void 0;
    var time_1 = require_cjs();
    exports.HEARTBEAT_INTERVAL = time_1.FIVE_SECONDS;
    exports.HEARTBEAT_EVENTS = {
      pulse: "heartbeat_pulse"
    };
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/constants/index.js
var require_constants = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_heartbeat2(), exports);
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/heartbeat.js
var require_heartbeat3 = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/heartbeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeartBeat = void 0;
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    var events_1 = require_events();
    var time_1 = require_cjs();
    var types_1 = require_types2();
    var constants_1 = require_constants();
    var HeartBeat = class _HeartBeat extends types_1.IHeartBeat {
      constructor(opts) {
        super(opts);
        this.events = new events_1.EventEmitter();
        this.interval = constants_1.HEARTBEAT_INTERVAL;
        this.interval = (opts === null || opts === void 0 ? void 0 : opts.interval) || constants_1.HEARTBEAT_INTERVAL;
      }
      static init(opts) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const heartbeat = new _HeartBeat(opts);
          yield heartbeat.init();
          return heartbeat;
        });
      }
      init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          yield this.initialize();
        });
      }
      stop() {
        clearInterval(this.intervalRef);
      }
      on(event, listener) {
        this.events.on(event, listener);
      }
      once(event, listener) {
        this.events.once(event, listener);
      }
      off(event, listener) {
        this.events.off(event, listener);
      }
      removeListener(event, listener) {
        this.events.removeListener(event, listener);
      }
      initialize() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          this.intervalRef = setInterval(() => this.pulse(), time_1.toMiliseconds(this.interval));
        });
      }
      pulse() {
        this.events.emit(constants_1.HEARTBEAT_EVENTS.pulse);
      }
    };
    exports.HeartBeat = HeartBeat;
  }
});

// node_modules/@walletconnect/heartbeat/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@walletconnect/heartbeat/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_heartbeat3(), exports);
    tslib_1.__exportStar(require_types2(), exports);
    tslib_1.__exportStar(require_constants(), exports);
  }
});

// node_modules/@walletconnect/logger/node_modules/tslib/tslib.es6.js
var tslib_es6_exports3 = {};
__export(tslib_es6_exports3, {
  __assign: () => __assign3,
  __asyncDelegator: () => __asyncDelegator3,
  __asyncGenerator: () => __asyncGenerator3,
  __asyncValues: () => __asyncValues3,
  __await: () => __await3,
  __awaiter: () => __awaiter3,
  __classPrivateFieldGet: () => __classPrivateFieldGet3,
  __classPrivateFieldSet: () => __classPrivateFieldSet3,
  __createBinding: () => __createBinding3,
  __decorate: () => __decorate3,
  __exportStar: () => __exportStar3,
  __extends: () => __extends3,
  __generator: () => __generator3,
  __importDefault: () => __importDefault3,
  __importStar: () => __importStar3,
  __makeTemplateObject: () => __makeTemplateObject3,
  __metadata: () => __metadata3,
  __param: () => __param3,
  __read: () => __read3,
  __rest: () => __rest3,
  __spread: () => __spread3,
  __spreadArrays: () => __spreadArrays3,
  __values: () => __values3
});
function __extends3(d2, b4) {
  extendStatics3(d2, b4);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
}
function __rest3(s, e) {
  var t = {};
  for (var p4 in s)
    if (Object.prototype.hasOwnProperty.call(s, p4) && e.indexOf(p4) < 0)
      t[p4] = s[p4];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p4 = Object.getOwnPropertySymbols(s); i2 < p4.length; i2++) {
      if (e.indexOf(p4[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p4[i2]))
        t[p4[i2]] = s[p4[i2]];
    }
  return t;
}
function __decorate3(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i2 = decorators.length - 1; i2 >= 0; i2--)
      if (d2 = decorators[i2])
        r = (c2 < 3 ? d2(r) : c2 > 3 ? d2(target, key, r) : d2(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param3(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata3(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter3(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator3(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f3, y4, t, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (_3)
      try {
        if (f3 = 1, y4 && (t = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t = y4["return"]) && t.call(y4), 0) : y4.next) && !(t = t.call(y4, op[1])).done)
          return t;
        if (y4 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y4 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [6, e];
        y4 = 0;
      } finally {
        f3 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding3(o, m2, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m2[k];
}
function __exportStar3(m2, exports) {
  for (var p4 in m2)
    if (p4 !== "default" && !exports.hasOwnProperty(p4))
      exports[p4] = m2[p4];
}
function __values3(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i2 = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i2 >= o.length)
          o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read3(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i2 = m2.call(o), r, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i2.next()).done)
      ar2.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread3() {
  for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
    ar2 = ar2.concat(__read3(arguments[i2]));
  return ar2;
}
function __spreadArrays3() {
  for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s += arguments[i2].length;
  for (var r = Array(s), k = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j4 = 0, jl = a2.length; j4 < jl; j4++, k++)
      r[k] = a2[j4];
  return r;
}
function __await3(v2) {
  return this instanceof __await3 ? (this.v = v2, this) : new __await3(v2);
}
function __asyncGenerator3(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i2, q3 = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n2) {
    if (g5[n2])
      i2[n2] = function(v2) {
        return new Promise(function(a2, b4) {
          q3.push([n2, v2, a2, b4]) > 1 || resume(n2, v2);
        });
      };
  }
  function resume(n2, v2) {
    try {
      step(g5[n2](v2));
    } catch (e) {
      settle(q3[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q3[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f3, v2) {
    if (f3(v2), q3.shift(), q3.length)
      resume(q3[0][0], q3[0][1]);
  }
}
function __asyncDelegator3(o) {
  var i2, p4;
  return i2 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f3) {
    i2[n2] = o[n2] ? function(v2) {
      return (p4 = !p4) ? { value: __await3(o[n2](v2)), done: n2 === "return" } : f3 ? f3(v2) : v2;
    } : f3;
  }
}
function __asyncValues3(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i2;
  return m2 ? m2.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o[n2] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n2](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject3(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar3(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (Object.hasOwnProperty.call(mod, k))
        result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault3(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet3(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet3(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics3, __assign3;
var init_tslib_es63 = __esm({
  "node_modules/@walletconnect/logger/node_modules/tslib/tslib.es6.js"() {
    extendStatics3 = function(d2, b4) {
      extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b5) {
        d3.__proto__ = b5;
      } || function(d3, b5) {
        for (var p4 in b5)
          if (b5.hasOwnProperty(p4))
            d3[p4] = b5[p4];
      };
      return extendStatics3(d2, b4);
    };
    __assign3 = function() {
      __assign3 = Object.assign || function __assign5(t) {
        for (var s, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s = arguments[i2];
          for (var p4 in s)
            if (Object.prototype.hasOwnProperty.call(s, p4))
              t[p4] = s[p4];
        }
        return t;
      };
      return __assign3.apply(this, arguments);
    };
  }
});

// node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o) {
      try {
        return JSON.stringify(o);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f3, args, opts) {
      var ss2 = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f3 === "object" && f3 !== null) {
        var len = args.length + offset;
        if (len === 1)
          return f3;
        var objects = new Array(len);
        objects[0] = ss2(f3);
        for (var index = 1; index < len; index++) {
          objects[index] = ss2(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f3 !== "string") {
        return f3;
      }
      var argLen = args.length;
      if (argLen === 0)
        return f3;
      var str = "";
      var a2 = 1 - offset;
      var lastPos = -1;
      var flen = f3 && f3.length || 0;
      for (var i2 = 0; i2 < flen; ) {
        if (f3.charCodeAt(i2) === 37 && i2 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f3.charCodeAt(i2 + 1)) {
            case 100:
            case 102:
              if (a2 >= argLen)
                break;
              if (args[a2] == null)
                break;
              if (lastPos < i2)
                str += f3.slice(lastPos, i2);
              str += Number(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 105:
              if (a2 >= argLen)
                break;
              if (args[a2] == null)
                break;
              if (lastPos < i2)
                str += f3.slice(lastPos, i2);
              str += Math.floor(Number(args[a2]));
              lastPos = i2 + 2;
              i2++;
              break;
            case 79:
            case 111:
            case 106:
              if (a2 >= argLen)
                break;
              if (args[a2] === void 0)
                break;
              if (lastPos < i2)
                str += f3.slice(lastPos, i2);
              var type = typeof args[a2];
              if (type === "string") {
                str += "'" + args[a2] + "'";
                lastPos = i2 + 2;
                i2++;
                break;
              }
              if (type === "function") {
                str += args[a2].name || "<anonymous>";
                lastPos = i2 + 2;
                i2++;
                break;
              }
              str += ss2(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 115:
              if (a2 >= argLen)
                break;
              if (lastPos < i2)
                str += f3.slice(lastPos, i2);
              str += String(args[a2]);
              lastPos = i2 + 2;
              i2++;
              break;
            case 37:
              if (lastPos < i2)
                str += f3.slice(lastPos, i2);
              str += "%";
              lastPos = i2 + 2;
              i2++;
              a2--;
              break;
          }
          ++a2;
        }
        ++i2;
      }
      if (lastPos === -1)
        return f3;
      else if (lastPos < flen) {
        str += f3.slice(lastPos);
      }
      return str;
    }
  }
});

// node_modules/pino/browser.js
var require_browser2 = __commonJS({
  "node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
          return k !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write)
        opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1)
        stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false)
        opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log)
        logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2)
        logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set(setOpts, logger, "error", "log");
        set(setOpts, logger, "fatal", "error");
        set(setOpts, logger, "warn", "error");
        set(setOpts, logger, "info", "log");
        set(setOpts, logger, "debug", "log");
        set(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop)
        return;
      logger[level] = function(write) {
        return function LOG() {
          const ts2 = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i2 = 0; i2 < args.length; i2++)
            args[i2] = arguments[i2];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject)
            write.call(proto, asObject(this, level, args, ts2));
          else
            write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue)
              return;
            transmit(this, {
              ts: ts2,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      }(logger[level]);
    }
    function asObject(logger, level, args, ts2) {
      if (logger._serialize)
        applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o = {};
      if (ts2) {
        o.time = ts2;
      }
      o.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1)
        lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string")
        msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0)
        o.msg = msg;
      return o;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i2 in args) {
        if (stdErrSerialize && args[i2] instanceof Error) {
          args[i2] = pino.stdSerializers.err(args[i2]);
        } else if (typeof args[i2] === "object" && !Array.isArray(args[i2])) {
          for (const k in args[i2]) {
            if (serialize && serialize.indexOf(k) > -1 && k in serializers) {
              args[i2][k] = serializers[k](args[i2][k]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i2 = 1; i2 < args.length; i2++) {
          args[i2] = arguments[i2 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts2 = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts2;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a2) {
      return a2;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o) {
        return typeof o !== "undefined" && o;
      }
      try {
        if (typeof globalThis !== "undefined")
          return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// node_modules/@walletconnect/logger/dist/cjs/constants.js
var require_constants2 = __commonJS({
  "node_modules/@walletconnect/logger/dist/cjs/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PINO_CUSTOM_CONTEXT_KEY = exports.PINO_LOGGER_DEFAULTS = void 0;
    exports.PINO_LOGGER_DEFAULTS = {
      level: "info"
    };
    exports.PINO_CUSTOM_CONTEXT_KEY = "custom_context";
  }
});

// node_modules/@walletconnect/logger/dist/cjs/utils.js
var require_utils2 = __commonJS({
  "node_modules/@walletconnect/logger/dist/cjs/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generateChildLogger = exports.formatChildLoggerContext = exports.getLoggerContext = exports.setBrowserLoggerContext = exports.getBrowserLoggerContext = exports.getDefaultLoggerOptions = void 0;
    var constants_1 = require_constants2();
    function getDefaultLoggerOptions(opts) {
      return Object.assign(Object.assign({}, opts), { level: (opts === null || opts === void 0 ? void 0 : opts.level) || constants_1.PINO_LOGGER_DEFAULTS.level });
    }
    exports.getDefaultLoggerOptions = getDefaultLoggerOptions;
    function getBrowserLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      return logger[customContextKey] || "";
    }
    exports.getBrowserLoggerContext = getBrowserLoggerContext;
    function setBrowserLoggerContext(logger, context, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      logger[customContextKey] = context;
      return logger;
    }
    exports.setBrowserLoggerContext = setBrowserLoggerContext;
    function getLoggerContext(logger, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      let context = "";
      if (typeof logger.bindings === "undefined") {
        context = getBrowserLoggerContext(logger, customContextKey);
      } else {
        context = logger.bindings().context || "";
      }
      return context;
    }
    exports.getLoggerContext = getLoggerContext;
    function formatChildLoggerContext(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      const parentContext = getLoggerContext(logger, customContextKey);
      const context = parentContext.trim() ? `${parentContext}/${childContext}` : childContext;
      return context;
    }
    exports.formatChildLoggerContext = formatChildLoggerContext;
    function generateChildLogger(logger, childContext, customContextKey = constants_1.PINO_CUSTOM_CONTEXT_KEY) {
      const context = formatChildLoggerContext(logger, childContext, customContextKey);
      const child = logger.child({ context });
      return setBrowserLoggerContext(child, context, customContextKey);
    }
    exports.generateChildLogger = generateChildLogger;
  }
});

// node_modules/@walletconnect/logger/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@walletconnect/logger/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pino = void 0;
    var tslib_1 = (init_tslib_es63(), __toCommonJS(tslib_es6_exports3));
    var pino_1 = tslib_1.__importDefault(require_browser2());
    Object.defineProperty(exports, "pino", { enumerable: true, get: function() {
      return pino_1.default;
    } });
    tslib_1.__exportStar(require_constants2(), exports);
    tslib_1.__exportStar(require_utils2(), exports);
  }
});

// node_modules/@stablelib/sha512/lib/sha512.js
var require_sha512 = __commonJS({
  "node_modules/@stablelib/sha512/lib/sha512.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var binary_1 = require_binary();
    var wipe_1 = require_wipe();
    exports.DIGEST_LENGTH = 64;
    exports.BLOCK_SIZE = 128;
    var SHA512 = (
      /** @class */
      function() {
        function SHA5122() {
          this.digestLength = exports.DIGEST_LENGTH;
          this.blockSize = exports.BLOCK_SIZE;
          this._stateHi = new Int32Array(8);
          this._stateLo = new Int32Array(8);
          this._tempHi = new Int32Array(16);
          this._tempLo = new Int32Array(16);
          this._buffer = new Uint8Array(256);
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          this.reset();
        }
        SHA5122.prototype._initState = function() {
          this._stateHi[0] = 1779033703;
          this._stateHi[1] = 3144134277;
          this._stateHi[2] = 1013904242;
          this._stateHi[3] = 2773480762;
          this._stateHi[4] = 1359893119;
          this._stateHi[5] = 2600822924;
          this._stateHi[6] = 528734635;
          this._stateHi[7] = 1541459225;
          this._stateLo[0] = 4089235720;
          this._stateLo[1] = 2227873595;
          this._stateLo[2] = 4271175723;
          this._stateLo[3] = 1595750129;
          this._stateLo[4] = 2917565137;
          this._stateLo[5] = 725511199;
          this._stateLo[6] = 4215389547;
          this._stateLo[7] = 327033209;
        };
        SHA5122.prototype.reset = function() {
          this._initState();
          this._bufferLength = 0;
          this._bytesHashed = 0;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.clean = function() {
          wipe_1.wipe(this._buffer);
          wipe_1.wipe(this._tempHi);
          wipe_1.wipe(this._tempLo);
          this.reset();
        };
        SHA5122.prototype.update = function(data, dataLength) {
          if (dataLength === void 0) {
            dataLength = data.length;
          }
          if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
          }
          var dataPos = 0;
          this._bytesHashed += dataLength;
          if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
              this._buffer[this._bufferLength++] = data[dataPos++];
              dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
              hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
              this._bufferLength = 0;
            }
          }
          if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
          }
          while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
          }
          return this;
        };
        SHA5122.prototype.finish = function(out) {
          if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = bytesHashed / 536870912 | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = bytesHashed % 128 < 112 ? 128 : 256;
            this._buffer[left] = 128;
            for (var i2 = left + 1; i2 < padLength - 8; i2++) {
              this._buffer[i2] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
          }
          for (var i2 = 0; i2 < this.digestLength / 8; i2++) {
            binary_1.writeUint32BE(this._stateHi[i2], out, i2 * 8);
            binary_1.writeUint32BE(this._stateLo[i2], out, i2 * 8 + 4);
          }
          return this;
        };
        SHA5122.prototype.digest = function() {
          var out = new Uint8Array(this.digestLength);
          this.finish(out);
          return out;
        };
        SHA5122.prototype.saveState = function() {
          if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
          }
          return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
          };
        };
        SHA5122.prototype.restoreState = function(savedState) {
          this._stateHi.set(savedState.stateHi);
          this._stateLo.set(savedState.stateLo);
          this._bufferLength = savedState.bufferLength;
          if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
          }
          this._bytesHashed = savedState.bytesHashed;
          this._finished = false;
          return this;
        };
        SHA5122.prototype.cleanSavedState = function(savedState) {
          wipe_1.wipe(savedState.stateHi);
          wipe_1.wipe(savedState.stateLo);
          if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
          }
          savedState.bufferLength = 0;
          savedState.bytesHashed = 0;
        };
        return SHA5122;
      }()
    );
    exports.SHA512 = SHA512;
    var K2 = new Int32Array([
      1116352408,
      3609767458,
      1899447441,
      602891725,
      3049323471,
      3964484399,
      3921009573,
      2173295548,
      961987163,
      4081628472,
      1508970993,
      3053834265,
      2453635748,
      2937671579,
      2870763221,
      3664609560,
      3624381080,
      2734883394,
      310598401,
      1164996542,
      607225278,
      1323610764,
      1426881987,
      3590304994,
      1925078388,
      4068182383,
      2162078206,
      991336113,
      2614888103,
      633803317,
      3248222580,
      3479774868,
      3835390401,
      2666613458,
      4022224774,
      944711139,
      264347078,
      2341262773,
      604807628,
      2007800933,
      770255983,
      1495990901,
      1249150122,
      1856431235,
      1555081692,
      3175218132,
      1996064986,
      2198950837,
      2554220882,
      3999719339,
      2821834349,
      766784016,
      2952996808,
      2566594879,
      3210313671,
      3203337956,
      3336571891,
      1034457026,
      3584528711,
      2466948901,
      113926993,
      3758326383,
      338241895,
      168717936,
      666307205,
      1188179964,
      773529912,
      1546045734,
      1294757372,
      1522805485,
      1396182291,
      2643833823,
      1695183700,
      2343527390,
      1986661051,
      1014477480,
      2177026350,
      1206759142,
      2456956037,
      344077627,
      2730485921,
      1290863460,
      2820302411,
      3158454273,
      3259730800,
      3505952657,
      3345764771,
      106217008,
      3516065817,
      3606008344,
      3600352804,
      1432725776,
      4094571909,
      1467031594,
      275423344,
      851169720,
      430227734,
      3100823752,
      506948616,
      1363258195,
      659060556,
      3750685593,
      883997877,
      3785050280,
      958139571,
      3318307427,
      1322822218,
      3812723403,
      1537002063,
      2003034995,
      1747873779,
      3602036899,
      1955562222,
      1575990012,
      2024104815,
      1125592928,
      2227730452,
      2716904306,
      2361852424,
      442776044,
      2428436474,
      593698344,
      2756734187,
      3733110249,
      3204031479,
      2999351573,
      3329325298,
      3815920427,
      3391569614,
      3928383900,
      3515267271,
      566280711,
      3940187606,
      3454069534,
      4118630271,
      4000239992,
      116418474,
      1914138554,
      174292421,
      2731055270,
      289380356,
      3203993006,
      460393269,
      320620315,
      685471733,
      587496836,
      852142971,
      1086792851,
      1017036298,
      365543100,
      1126000580,
      2618297676,
      1288033470,
      3409855158,
      1501505948,
      4234509866,
      1607167915,
      987167468,
      1816402316,
      1246189591
    ]);
    function hashBlocks(wh, wl, hh, hl, m2, pos, len) {
      var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
      var h3, l;
      var th, tl;
      var a2, b4, c2, d2;
      while (len >= 128) {
        for (var i2 = 0; i2 < 16; i2++) {
          var j4 = 8 * i2 + pos;
          wh[i2] = binary_1.readUint32BE(m2, j4);
          wl[i2] = binary_1.readUint32BE(m2, j4 + 4);
        }
        for (var i2 = 0; i2 < 80; i2++) {
          var bh0 = ah0;
          var bh1 = ah1;
          var bh2 = ah2;
          var bh3 = ah3;
          var bh4 = ah4;
          var bh5 = ah5;
          var bh6 = ah6;
          var bh7 = ah7;
          var bl0 = al0;
          var bl1 = al1;
          var bl2 = al2;
          var bl3 = al3;
          var bl4 = al4;
          var bl5 = al5;
          var bl6 = al6;
          var bl7 = al7;
          h3 = ah7;
          l = al7;
          a2 = l & 65535;
          b4 = l >>> 16;
          c2 = h3 & 65535;
          d2 = h3 >>> 16;
          h3 = (ah4 >>> 14 | al4 << 32 - 14) ^ (ah4 >>> 18 | al4 << 32 - 18) ^ (al4 >>> 41 - 32 | ah4 << 32 - (41 - 32));
          l = (al4 >>> 14 | ah4 << 32 - 14) ^ (al4 >>> 18 | ah4 << 32 - 18) ^ (ah4 >>> 41 - 32 | al4 << 32 - (41 - 32));
          a2 += l & 65535;
          b4 += l >>> 16;
          c2 += h3 & 65535;
          d2 += h3 >>> 16;
          h3 = ah4 & ah5 ^ ~ah4 & ah6;
          l = al4 & al5 ^ ~al4 & al6;
          a2 += l & 65535;
          b4 += l >>> 16;
          c2 += h3 & 65535;
          d2 += h3 >>> 16;
          h3 = K2[i2 * 2];
          l = K2[i2 * 2 + 1];
          a2 += l & 65535;
          b4 += l >>> 16;
          c2 += h3 & 65535;
          d2 += h3 >>> 16;
          h3 = wh[i2 % 16];
          l = wl[i2 % 16];
          a2 += l & 65535;
          b4 += l >>> 16;
          c2 += h3 & 65535;
          d2 += h3 >>> 16;
          b4 += a2 >>> 16;
          c2 += b4 >>> 16;
          d2 += c2 >>> 16;
          th = c2 & 65535 | d2 << 16;
          tl = a2 & 65535 | b4 << 16;
          h3 = th;
          l = tl;
          a2 = l & 65535;
          b4 = l >>> 16;
          c2 = h3 & 65535;
          d2 = h3 >>> 16;
          h3 = (ah0 >>> 28 | al0 << 32 - 28) ^ (al0 >>> 34 - 32 | ah0 << 32 - (34 - 32)) ^ (al0 >>> 39 - 32 | ah0 << 32 - (39 - 32));
          l = (al0 >>> 28 | ah0 << 32 - 28) ^ (ah0 >>> 34 - 32 | al0 << 32 - (34 - 32)) ^ (ah0 >>> 39 - 32 | al0 << 32 - (39 - 32));
          a2 += l & 65535;
          b4 += l >>> 16;
          c2 += h3 & 65535;
          d2 += h3 >>> 16;
          h3 = ah0 & ah1 ^ ah0 & ah2 ^ ah1 & ah2;
          l = al0 & al1 ^ al0 & al2 ^ al1 & al2;
          a2 += l & 65535;
          b4 += l >>> 16;
          c2 += h3 & 65535;
          d2 += h3 >>> 16;
          b4 += a2 >>> 16;
          c2 += b4 >>> 16;
          d2 += c2 >>> 16;
          bh7 = c2 & 65535 | d2 << 16;
          bl7 = a2 & 65535 | b4 << 16;
          h3 = bh3;
          l = bl3;
          a2 = l & 65535;
          b4 = l >>> 16;
          c2 = h3 & 65535;
          d2 = h3 >>> 16;
          h3 = th;
          l = tl;
          a2 += l & 65535;
          b4 += l >>> 16;
          c2 += h3 & 65535;
          d2 += h3 >>> 16;
          b4 += a2 >>> 16;
          c2 += b4 >>> 16;
          d2 += c2 >>> 16;
          bh3 = c2 & 65535 | d2 << 16;
          bl3 = a2 & 65535 | b4 << 16;
          ah1 = bh0;
          ah2 = bh1;
          ah3 = bh2;
          ah4 = bh3;
          ah5 = bh4;
          ah6 = bh5;
          ah7 = bh6;
          ah0 = bh7;
          al1 = bl0;
          al2 = bl1;
          al3 = bl2;
          al4 = bl3;
          al5 = bl4;
          al6 = bl5;
          al7 = bl6;
          al0 = bl7;
          if (i2 % 16 === 15) {
            for (var j4 = 0; j4 < 16; j4++) {
              h3 = wh[j4];
              l = wl[j4];
              a2 = l & 65535;
              b4 = l >>> 16;
              c2 = h3 & 65535;
              d2 = h3 >>> 16;
              h3 = wh[(j4 + 9) % 16];
              l = wl[(j4 + 9) % 16];
              a2 += l & 65535;
              b4 += l >>> 16;
              c2 += h3 & 65535;
              d2 += h3 >>> 16;
              th = wh[(j4 + 1) % 16];
              tl = wl[(j4 + 1) % 16];
              h3 = (th >>> 1 | tl << 32 - 1) ^ (th >>> 8 | tl << 32 - 8) ^ th >>> 7;
              l = (tl >>> 1 | th << 32 - 1) ^ (tl >>> 8 | th << 32 - 8) ^ (tl >>> 7 | th << 32 - 7);
              a2 += l & 65535;
              b4 += l >>> 16;
              c2 += h3 & 65535;
              d2 += h3 >>> 16;
              th = wh[(j4 + 14) % 16];
              tl = wl[(j4 + 14) % 16];
              h3 = (th >>> 19 | tl << 32 - 19) ^ (tl >>> 61 - 32 | th << 32 - (61 - 32)) ^ th >>> 6;
              l = (tl >>> 19 | th << 32 - 19) ^ (th >>> 61 - 32 | tl << 32 - (61 - 32)) ^ (tl >>> 6 | th << 32 - 6);
              a2 += l & 65535;
              b4 += l >>> 16;
              c2 += h3 & 65535;
              d2 += h3 >>> 16;
              b4 += a2 >>> 16;
              c2 += b4 >>> 16;
              d2 += c2 >>> 16;
              wh[j4] = c2 & 65535 | d2 << 16;
              wl[j4] = a2 & 65535 | b4 << 16;
            }
          }
        }
        h3 = ah0;
        l = al0;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[0];
        l = hl[0];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[0] = ah0 = c2 & 65535 | d2 << 16;
        hl[0] = al0 = a2 & 65535 | b4 << 16;
        h3 = ah1;
        l = al1;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[1];
        l = hl[1];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[1] = ah1 = c2 & 65535 | d2 << 16;
        hl[1] = al1 = a2 & 65535 | b4 << 16;
        h3 = ah2;
        l = al2;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[2];
        l = hl[2];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[2] = ah2 = c2 & 65535 | d2 << 16;
        hl[2] = al2 = a2 & 65535 | b4 << 16;
        h3 = ah3;
        l = al3;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[3];
        l = hl[3];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[3] = ah3 = c2 & 65535 | d2 << 16;
        hl[3] = al3 = a2 & 65535 | b4 << 16;
        h3 = ah4;
        l = al4;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[4];
        l = hl[4];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[4] = ah4 = c2 & 65535 | d2 << 16;
        hl[4] = al4 = a2 & 65535 | b4 << 16;
        h3 = ah5;
        l = al5;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[5];
        l = hl[5];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[5] = ah5 = c2 & 65535 | d2 << 16;
        hl[5] = al5 = a2 & 65535 | b4 << 16;
        h3 = ah6;
        l = al6;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[6];
        l = hl[6];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[6] = ah6 = c2 & 65535 | d2 << 16;
        hl[6] = al6 = a2 & 65535 | b4 << 16;
        h3 = ah7;
        l = al7;
        a2 = l & 65535;
        b4 = l >>> 16;
        c2 = h3 & 65535;
        d2 = h3 >>> 16;
        h3 = hh[7];
        l = hl[7];
        a2 += l & 65535;
        b4 += l >>> 16;
        c2 += h3 & 65535;
        d2 += h3 >>> 16;
        b4 += a2 >>> 16;
        c2 += b4 >>> 16;
        d2 += c2 >>> 16;
        hh[7] = ah7 = c2 & 65535 | d2 << 16;
        hl[7] = al7 = a2 & 65535 | b4 << 16;
        pos += 128;
        len -= 128;
      }
      return pos;
    }
    function hash(data) {
      var h3 = new SHA512();
      h3.update(data);
      var digest = h3.digest();
      h3.clean();
      return digest;
    }
    exports.hash = hash;
  }
});

// node_modules/@stablelib/ed25519/lib/ed25519.js
var require_ed25519 = __commonJS({
  "node_modules/@stablelib/ed25519/lib/ed25519.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convertSecretKeyToX25519 = exports.convertPublicKeyToX25519 = exports.verify = exports.sign = exports.extractPublicKeyFromSecretKey = exports.generateKeyPair = exports.generateKeyPairFromSeed = exports.SEED_LENGTH = exports.SECRET_KEY_LENGTH = exports.PUBLIC_KEY_LENGTH = exports.SIGNATURE_LENGTH = void 0;
    var random_1 = require_random();
    var sha512_1 = require_sha512();
    var wipe_1 = require_wipe();
    exports.SIGNATURE_LENGTH = 64;
    exports.PUBLIC_KEY_LENGTH = 32;
    exports.SECRET_KEY_LENGTH = 64;
    exports.SEED_LENGTH = 32;
    function gf(init) {
      const r = new Float64Array(16);
      if (init) {
        for (let i2 = 0; i2 < init.length; i2++) {
          r[i2] = init[i2];
        }
      }
      return r;
    }
    var _9 = new Uint8Array(32);
    _9[0] = 9;
    var gf0 = gf();
    var gf1 = gf([1]);
    var D3 = gf([
      30883,
      4953,
      19914,
      30187,
      55467,
      16705,
      2637,
      112,
      59544,
      30585,
      16505,
      36039,
      65139,
      11119,
      27886,
      20995
    ]);
    var D22 = gf([
      61785,
      9906,
      39828,
      60374,
      45398,
      33411,
      5274,
      224,
      53552,
      61171,
      33010,
      6542,
      64743,
      22239,
      55772,
      9222
    ]);
    var X3 = gf([
      54554,
      36645,
      11616,
      51542,
      42930,
      38181,
      51040,
      26924,
      56412,
      64982,
      57905,
      49316,
      21502,
      52590,
      14035,
      8553
    ]);
    var Y = gf([
      26200,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214,
      26214
    ]);
    var I2 = gf([
      41136,
      18958,
      6951,
      50414,
      58488,
      44335,
      6150,
      12099,
      55207,
      15867,
      153,
      11085,
      57099,
      20417,
      9344,
      11139
    ]);
    function set25519(r, a2) {
      for (let i2 = 0; i2 < 16; i2++) {
        r[i2] = a2[i2] | 0;
      }
    }
    function car25519(o) {
      let c2 = 1;
      for (let i2 = 0; i2 < 16; i2++) {
        let v2 = o[i2] + c2 + 65535;
        c2 = Math.floor(v2 / 65536);
        o[i2] = v2 - c2 * 65536;
      }
      o[0] += c2 - 1 + 37 * (c2 - 1);
    }
    function sel25519(p4, q3, b4) {
      const c2 = ~(b4 - 1);
      for (let i2 = 0; i2 < 16; i2++) {
        const t = c2 & (p4[i2] ^ q3[i2]);
        p4[i2] ^= t;
        q3[i2] ^= t;
      }
    }
    function pack25519(o, n2) {
      const m2 = gf();
      const t = gf();
      for (let i2 = 0; i2 < 16; i2++) {
        t[i2] = n2[i2];
      }
      car25519(t);
      car25519(t);
      car25519(t);
      for (let j4 = 0; j4 < 2; j4++) {
        m2[0] = t[0] - 65517;
        for (let i2 = 1; i2 < 15; i2++) {
          m2[i2] = t[i2] - 65535 - (m2[i2 - 1] >> 16 & 1);
          m2[i2 - 1] &= 65535;
        }
        m2[15] = t[15] - 32767 - (m2[14] >> 16 & 1);
        const b4 = m2[15] >> 16 & 1;
        m2[14] &= 65535;
        sel25519(t, m2, 1 - b4);
      }
      for (let i2 = 0; i2 < 16; i2++) {
        o[2 * i2] = t[i2] & 255;
        o[2 * i2 + 1] = t[i2] >> 8;
      }
    }
    function verify32(x2, y4) {
      let d2 = 0;
      for (let i2 = 0; i2 < 32; i2++) {
        d2 |= x2[i2] ^ y4[i2];
      }
      return (1 & d2 - 1 >>> 8) - 1;
    }
    function neq25519(a2, b4) {
      const c2 = new Uint8Array(32);
      const d2 = new Uint8Array(32);
      pack25519(c2, a2);
      pack25519(d2, b4);
      return verify32(c2, d2);
    }
    function par25519(a2) {
      const d2 = new Uint8Array(32);
      pack25519(d2, a2);
      return d2[0] & 1;
    }
    function unpack25519(o, n2) {
      for (let i2 = 0; i2 < 16; i2++) {
        o[i2] = n2[2 * i2] + (n2[2 * i2 + 1] << 8);
      }
      o[15] &= 32767;
    }
    function add(o, a2, b4) {
      for (let i2 = 0; i2 < 16; i2++) {
        o[i2] = a2[i2] + b4[i2];
      }
    }
    function sub(o, a2, b4) {
      for (let i2 = 0; i2 < 16; i2++) {
        o[i2] = a2[i2] - b4[i2];
      }
    }
    function mul(o, a2, b4) {
      let v2, c2, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b4[0], b1 = b4[1], b22 = b4[2], b32 = b4[3], b42 = b4[4], b5 = b4[5], b6 = b4[6], b7 = b4[7], b8 = b4[8], b9 = b4[9], b10 = b4[10], b11 = b4[11], b12 = b4[12], b13 = b4[13], b14 = b4[14], b15 = b4[15];
      v2 = a2[0];
      t0 += v2 * b0;
      t1 += v2 * b1;
      t2 += v2 * b22;
      t3 += v2 * b32;
      t4 += v2 * b42;
      t5 += v2 * b5;
      t6 += v2 * b6;
      t7 += v2 * b7;
      t8 += v2 * b8;
      t9 += v2 * b9;
      t10 += v2 * b10;
      t11 += v2 * b11;
      t12 += v2 * b12;
      t13 += v2 * b13;
      t14 += v2 * b14;
      t15 += v2 * b15;
      v2 = a2[1];
      t1 += v2 * b0;
      t2 += v2 * b1;
      t3 += v2 * b22;
      t4 += v2 * b32;
      t5 += v2 * b42;
      t6 += v2 * b5;
      t7 += v2 * b6;
      t8 += v2 * b7;
      t9 += v2 * b8;
      t10 += v2 * b9;
      t11 += v2 * b10;
      t12 += v2 * b11;
      t13 += v2 * b12;
      t14 += v2 * b13;
      t15 += v2 * b14;
      t16 += v2 * b15;
      v2 = a2[2];
      t2 += v2 * b0;
      t3 += v2 * b1;
      t4 += v2 * b22;
      t5 += v2 * b32;
      t6 += v2 * b42;
      t7 += v2 * b5;
      t8 += v2 * b6;
      t9 += v2 * b7;
      t10 += v2 * b8;
      t11 += v2 * b9;
      t12 += v2 * b10;
      t13 += v2 * b11;
      t14 += v2 * b12;
      t15 += v2 * b13;
      t16 += v2 * b14;
      t17 += v2 * b15;
      v2 = a2[3];
      t3 += v2 * b0;
      t4 += v2 * b1;
      t5 += v2 * b22;
      t6 += v2 * b32;
      t7 += v2 * b42;
      t8 += v2 * b5;
      t9 += v2 * b6;
      t10 += v2 * b7;
      t11 += v2 * b8;
      t12 += v2 * b9;
      t13 += v2 * b10;
      t14 += v2 * b11;
      t15 += v2 * b12;
      t16 += v2 * b13;
      t17 += v2 * b14;
      t18 += v2 * b15;
      v2 = a2[4];
      t4 += v2 * b0;
      t5 += v2 * b1;
      t6 += v2 * b22;
      t7 += v2 * b32;
      t8 += v2 * b42;
      t9 += v2 * b5;
      t10 += v2 * b6;
      t11 += v2 * b7;
      t12 += v2 * b8;
      t13 += v2 * b9;
      t14 += v2 * b10;
      t15 += v2 * b11;
      t16 += v2 * b12;
      t17 += v2 * b13;
      t18 += v2 * b14;
      t19 += v2 * b15;
      v2 = a2[5];
      t5 += v2 * b0;
      t6 += v2 * b1;
      t7 += v2 * b22;
      t8 += v2 * b32;
      t9 += v2 * b42;
      t10 += v2 * b5;
      t11 += v2 * b6;
      t12 += v2 * b7;
      t13 += v2 * b8;
      t14 += v2 * b9;
      t15 += v2 * b10;
      t16 += v2 * b11;
      t17 += v2 * b12;
      t18 += v2 * b13;
      t19 += v2 * b14;
      t20 += v2 * b15;
      v2 = a2[6];
      t6 += v2 * b0;
      t7 += v2 * b1;
      t8 += v2 * b22;
      t9 += v2 * b32;
      t10 += v2 * b42;
      t11 += v2 * b5;
      t12 += v2 * b6;
      t13 += v2 * b7;
      t14 += v2 * b8;
      t15 += v2 * b9;
      t16 += v2 * b10;
      t17 += v2 * b11;
      t18 += v2 * b12;
      t19 += v2 * b13;
      t20 += v2 * b14;
      t21 += v2 * b15;
      v2 = a2[7];
      t7 += v2 * b0;
      t8 += v2 * b1;
      t9 += v2 * b22;
      t10 += v2 * b32;
      t11 += v2 * b42;
      t12 += v2 * b5;
      t13 += v2 * b6;
      t14 += v2 * b7;
      t15 += v2 * b8;
      t16 += v2 * b9;
      t17 += v2 * b10;
      t18 += v2 * b11;
      t19 += v2 * b12;
      t20 += v2 * b13;
      t21 += v2 * b14;
      t22 += v2 * b15;
      v2 = a2[8];
      t8 += v2 * b0;
      t9 += v2 * b1;
      t10 += v2 * b22;
      t11 += v2 * b32;
      t12 += v2 * b42;
      t13 += v2 * b5;
      t14 += v2 * b6;
      t15 += v2 * b7;
      t16 += v2 * b8;
      t17 += v2 * b9;
      t18 += v2 * b10;
      t19 += v2 * b11;
      t20 += v2 * b12;
      t21 += v2 * b13;
      t22 += v2 * b14;
      t23 += v2 * b15;
      v2 = a2[9];
      t9 += v2 * b0;
      t10 += v2 * b1;
      t11 += v2 * b22;
      t12 += v2 * b32;
      t13 += v2 * b42;
      t14 += v2 * b5;
      t15 += v2 * b6;
      t16 += v2 * b7;
      t17 += v2 * b8;
      t18 += v2 * b9;
      t19 += v2 * b10;
      t20 += v2 * b11;
      t21 += v2 * b12;
      t22 += v2 * b13;
      t23 += v2 * b14;
      t24 += v2 * b15;
      v2 = a2[10];
      t10 += v2 * b0;
      t11 += v2 * b1;
      t12 += v2 * b22;
      t13 += v2 * b32;
      t14 += v2 * b42;
      t15 += v2 * b5;
      t16 += v2 * b6;
      t17 += v2 * b7;
      t18 += v2 * b8;
      t19 += v2 * b9;
      t20 += v2 * b10;
      t21 += v2 * b11;
      t22 += v2 * b12;
      t23 += v2 * b13;
      t24 += v2 * b14;
      t25 += v2 * b15;
      v2 = a2[11];
      t11 += v2 * b0;
      t12 += v2 * b1;
      t13 += v2 * b22;
      t14 += v2 * b32;
      t15 += v2 * b42;
      t16 += v2 * b5;
      t17 += v2 * b6;
      t18 += v2 * b7;
      t19 += v2 * b8;
      t20 += v2 * b9;
      t21 += v2 * b10;
      t22 += v2 * b11;
      t23 += v2 * b12;
      t24 += v2 * b13;
      t25 += v2 * b14;
      t26 += v2 * b15;
      v2 = a2[12];
      t12 += v2 * b0;
      t13 += v2 * b1;
      t14 += v2 * b22;
      t15 += v2 * b32;
      t16 += v2 * b42;
      t17 += v2 * b5;
      t18 += v2 * b6;
      t19 += v2 * b7;
      t20 += v2 * b8;
      t21 += v2 * b9;
      t22 += v2 * b10;
      t23 += v2 * b11;
      t24 += v2 * b12;
      t25 += v2 * b13;
      t26 += v2 * b14;
      t27 += v2 * b15;
      v2 = a2[13];
      t13 += v2 * b0;
      t14 += v2 * b1;
      t15 += v2 * b22;
      t16 += v2 * b32;
      t17 += v2 * b42;
      t18 += v2 * b5;
      t19 += v2 * b6;
      t20 += v2 * b7;
      t21 += v2 * b8;
      t22 += v2 * b9;
      t23 += v2 * b10;
      t24 += v2 * b11;
      t25 += v2 * b12;
      t26 += v2 * b13;
      t27 += v2 * b14;
      t28 += v2 * b15;
      v2 = a2[14];
      t14 += v2 * b0;
      t15 += v2 * b1;
      t16 += v2 * b22;
      t17 += v2 * b32;
      t18 += v2 * b42;
      t19 += v2 * b5;
      t20 += v2 * b6;
      t21 += v2 * b7;
      t22 += v2 * b8;
      t23 += v2 * b9;
      t24 += v2 * b10;
      t25 += v2 * b11;
      t26 += v2 * b12;
      t27 += v2 * b13;
      t28 += v2 * b14;
      t29 += v2 * b15;
      v2 = a2[15];
      t15 += v2 * b0;
      t16 += v2 * b1;
      t17 += v2 * b22;
      t18 += v2 * b32;
      t19 += v2 * b42;
      t20 += v2 * b5;
      t21 += v2 * b6;
      t22 += v2 * b7;
      t23 += v2 * b8;
      t24 += v2 * b9;
      t25 += v2 * b10;
      t26 += v2 * b11;
      t27 += v2 * b12;
      t28 += v2 * b13;
      t29 += v2 * b14;
      t30 += v2 * b15;
      t0 += 38 * t16;
      t1 += 38 * t17;
      t2 += 38 * t18;
      t3 += 38 * t19;
      t4 += 38 * t20;
      t5 += 38 * t21;
      t6 += 38 * t22;
      t7 += 38 * t23;
      t8 += 38 * t24;
      t9 += 38 * t25;
      t10 += 38 * t26;
      t11 += 38 * t27;
      t12 += 38 * t28;
      t13 += 38 * t29;
      t14 += 38 * t30;
      c2 = 1;
      v2 = t0 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t0 = v2 - c2 * 65536;
      v2 = t1 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t1 = v2 - c2 * 65536;
      v2 = t2 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t2 = v2 - c2 * 65536;
      v2 = t3 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t3 = v2 - c2 * 65536;
      v2 = t4 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t4 = v2 - c2 * 65536;
      v2 = t5 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t5 = v2 - c2 * 65536;
      v2 = t6 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t6 = v2 - c2 * 65536;
      v2 = t7 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t7 = v2 - c2 * 65536;
      v2 = t8 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t8 = v2 - c2 * 65536;
      v2 = t9 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t9 = v2 - c2 * 65536;
      v2 = t10 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t10 = v2 - c2 * 65536;
      v2 = t11 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t11 = v2 - c2 * 65536;
      v2 = t12 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t12 = v2 - c2 * 65536;
      v2 = t13 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t13 = v2 - c2 * 65536;
      v2 = t14 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t14 = v2 - c2 * 65536;
      v2 = t15 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t15 = v2 - c2 * 65536;
      t0 += c2 - 1 + 37 * (c2 - 1);
      c2 = 1;
      v2 = t0 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t0 = v2 - c2 * 65536;
      v2 = t1 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t1 = v2 - c2 * 65536;
      v2 = t2 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t2 = v2 - c2 * 65536;
      v2 = t3 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t3 = v2 - c2 * 65536;
      v2 = t4 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t4 = v2 - c2 * 65536;
      v2 = t5 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t5 = v2 - c2 * 65536;
      v2 = t6 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t6 = v2 - c2 * 65536;
      v2 = t7 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t7 = v2 - c2 * 65536;
      v2 = t8 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t8 = v2 - c2 * 65536;
      v2 = t9 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t9 = v2 - c2 * 65536;
      v2 = t10 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t10 = v2 - c2 * 65536;
      v2 = t11 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t11 = v2 - c2 * 65536;
      v2 = t12 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t12 = v2 - c2 * 65536;
      v2 = t13 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t13 = v2 - c2 * 65536;
      v2 = t14 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t14 = v2 - c2 * 65536;
      v2 = t15 + c2 + 65535;
      c2 = Math.floor(v2 / 65536);
      t15 = v2 - c2 * 65536;
      t0 += c2 - 1 + 37 * (c2 - 1);
      o[0] = t0;
      o[1] = t1;
      o[2] = t2;
      o[3] = t3;
      o[4] = t4;
      o[5] = t5;
      o[6] = t6;
      o[7] = t7;
      o[8] = t8;
      o[9] = t9;
      o[10] = t10;
      o[11] = t11;
      o[12] = t12;
      o[13] = t13;
      o[14] = t14;
      o[15] = t15;
    }
    function square(o, a2) {
      mul(o, a2, a2);
    }
    function inv25519(o, i2) {
      const c2 = gf();
      let a2;
      for (a2 = 0; a2 < 16; a2++) {
        c2[a2] = i2[a2];
      }
      for (a2 = 253; a2 >= 0; a2--) {
        square(c2, c2);
        if (a2 !== 2 && a2 !== 4) {
          mul(c2, c2, i2);
        }
      }
      for (a2 = 0; a2 < 16; a2++) {
        o[a2] = c2[a2];
      }
    }
    function pow2523(o, i2) {
      const c2 = gf();
      let a2;
      for (a2 = 0; a2 < 16; a2++) {
        c2[a2] = i2[a2];
      }
      for (a2 = 250; a2 >= 0; a2--) {
        square(c2, c2);
        if (a2 !== 1) {
          mul(c2, c2, i2);
        }
      }
      for (a2 = 0; a2 < 16; a2++) {
        o[a2] = c2[a2];
      }
    }
    function edadd(p4, q3) {
      const a2 = gf(), b4 = gf(), c2 = gf(), d2 = gf(), e = gf(), f3 = gf(), g5 = gf(), h3 = gf(), t = gf();
      sub(a2, p4[1], p4[0]);
      sub(t, q3[1], q3[0]);
      mul(a2, a2, t);
      add(b4, p4[0], p4[1]);
      add(t, q3[0], q3[1]);
      mul(b4, b4, t);
      mul(c2, p4[3], q3[3]);
      mul(c2, c2, D22);
      mul(d2, p4[2], q3[2]);
      add(d2, d2, d2);
      sub(e, b4, a2);
      sub(f3, d2, c2);
      add(g5, d2, c2);
      add(h3, b4, a2);
      mul(p4[0], e, f3);
      mul(p4[1], h3, g5);
      mul(p4[2], g5, f3);
      mul(p4[3], e, h3);
    }
    function cswap(p4, q3, b4) {
      for (let i2 = 0; i2 < 4; i2++) {
        sel25519(p4[i2], q3[i2], b4);
      }
    }
    function pack(r, p4) {
      const tx = gf(), ty = gf(), zi2 = gf();
      inv25519(zi2, p4[2]);
      mul(tx, p4[0], zi2);
      mul(ty, p4[1], zi2);
      pack25519(r, ty);
      r[31] ^= par25519(tx) << 7;
    }
    function scalarmult(p4, q3, s) {
      set25519(p4[0], gf0);
      set25519(p4[1], gf1);
      set25519(p4[2], gf1);
      set25519(p4[3], gf0);
      for (let i2 = 255; i2 >= 0; --i2) {
        const b4 = s[i2 / 8 | 0] >> (i2 & 7) & 1;
        cswap(p4, q3, b4);
        edadd(q3, p4);
        edadd(p4, p4);
        cswap(p4, q3, b4);
      }
    }
    function scalarbase(p4, s) {
      const q3 = [gf(), gf(), gf(), gf()];
      set25519(q3[0], X3);
      set25519(q3[1], Y);
      set25519(q3[2], gf1);
      mul(q3[3], X3, Y);
      scalarmult(p4, q3, s);
    }
    function generateKeyPairFromSeed2(seed) {
      if (seed.length !== exports.SEED_LENGTH) {
        throw new Error(`ed25519: seed must be ${exports.SEED_LENGTH} bytes`);
      }
      const d2 = (0, sha512_1.hash)(seed);
      d2[0] &= 248;
      d2[31] &= 127;
      d2[31] |= 64;
      const publicKey = new Uint8Array(32);
      const p4 = [gf(), gf(), gf(), gf()];
      scalarbase(p4, d2);
      pack(publicKey, p4);
      const secretKey = new Uint8Array(64);
      secretKey.set(seed);
      secretKey.set(publicKey, 32);
      return {
        publicKey,
        secretKey
      };
    }
    exports.generateKeyPairFromSeed = generateKeyPairFromSeed2;
    function generateKeyPair2(prng) {
      const seed = (0, random_1.randomBytes)(32, prng);
      const result = generateKeyPairFromSeed2(seed);
      (0, wipe_1.wipe)(seed);
      return result;
    }
    exports.generateKeyPair = generateKeyPair2;
    function extractPublicKeyFromSecretKey(secretKey) {
      if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error(`ed25519: secret key must be ${exports.SECRET_KEY_LENGTH} bytes`);
      }
      return new Uint8Array(secretKey.subarray(32));
    }
    exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
    var L3 = new Float64Array([
      237,
      211,
      245,
      92,
      26,
      99,
      18,
      88,
      214,
      156,
      247,
      162,
      222,
      249,
      222,
      20,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      16
    ]);
    function modL(r, x2) {
      let carry;
      let i2;
      let j4;
      let k;
      for (i2 = 63; i2 >= 32; --i2) {
        carry = 0;
        for (j4 = i2 - 32, k = i2 - 12; j4 < k; ++j4) {
          x2[j4] += carry - 16 * x2[i2] * L3[j4 - (i2 - 32)];
          carry = Math.floor((x2[j4] + 128) / 256);
          x2[j4] -= carry * 256;
        }
        x2[j4] += carry;
        x2[i2] = 0;
      }
      carry = 0;
      for (j4 = 0; j4 < 32; j4++) {
        x2[j4] += carry - (x2[31] >> 4) * L3[j4];
        carry = x2[j4] >> 8;
        x2[j4] &= 255;
      }
      for (j4 = 0; j4 < 32; j4++) {
        x2[j4] -= carry * L3[j4];
      }
      for (i2 = 0; i2 < 32; i2++) {
        x2[i2 + 1] += x2[i2] >> 8;
        r[i2] = x2[i2] & 255;
      }
    }
    function reduce(r) {
      const x2 = new Float64Array(64);
      for (let i2 = 0; i2 < 64; i2++) {
        x2[i2] = r[i2];
      }
      for (let i2 = 0; i2 < 64; i2++) {
        r[i2] = 0;
      }
      modL(r, x2);
    }
    function sign2(secretKey, message) {
      const x2 = new Float64Array(64);
      const p4 = [gf(), gf(), gf(), gf()];
      const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d2[0] &= 248;
      d2[31] &= 127;
      d2[31] |= 64;
      const signature = new Uint8Array(64);
      signature.set(d2.subarray(32), 32);
      const hs3 = new sha512_1.SHA512();
      hs3.update(signature.subarray(32));
      hs3.update(message);
      const r = hs3.digest();
      hs3.clean();
      reduce(r);
      scalarbase(p4, r);
      pack(signature, p4);
      hs3.reset();
      hs3.update(signature.subarray(0, 32));
      hs3.update(secretKey.subarray(32));
      hs3.update(message);
      const h3 = hs3.digest();
      reduce(h3);
      for (let i2 = 0; i2 < 32; i2++) {
        x2[i2] = r[i2];
      }
      for (let i2 = 0; i2 < 32; i2++) {
        for (let j4 = 0; j4 < 32; j4++) {
          x2[i2 + j4] += h3[i2] * d2[j4];
        }
      }
      modL(signature.subarray(32), x2);
      return signature;
    }
    exports.sign = sign2;
    function unpackneg(r, p4) {
      const t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
      set25519(r[2], gf1);
      unpack25519(r[1], p4);
      square(num, r[1]);
      mul(den, num, D3);
      sub(num, num, r[2]);
      add(den, r[2], den);
      square(den2, den);
      square(den4, den2);
      mul(den6, den4, den2);
      mul(t, den6, num);
      mul(t, t, den);
      pow2523(t, t);
      mul(t, t, num);
      mul(t, t, den);
      mul(t, t, den);
      mul(r[0], t, den);
      square(chk, r[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        mul(r[0], r[0], I2);
      }
      square(chk, r[0]);
      mul(chk, chk, den);
      if (neq25519(chk, num)) {
        return -1;
      }
      if (par25519(r[0]) === p4[31] >> 7) {
        sub(r[0], gf0, r[0]);
      }
      mul(r[3], r[0], r[1]);
      return 0;
    }
    function verify2(publicKey, message, signature) {
      const t = new Uint8Array(32);
      const p4 = [gf(), gf(), gf(), gf()];
      const q3 = [gf(), gf(), gf(), gf()];
      if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error(`ed25519: signature must be ${exports.SIGNATURE_LENGTH} bytes`);
      }
      if (unpackneg(q3, publicKey)) {
        return false;
      }
      const hs3 = new sha512_1.SHA512();
      hs3.update(signature.subarray(0, 32));
      hs3.update(publicKey);
      hs3.update(message);
      const h3 = hs3.digest();
      reduce(h3);
      scalarmult(p4, q3, h3);
      scalarbase(q3, signature.subarray(32));
      edadd(p4, q3);
      pack(t, p4);
      if (verify32(signature, t)) {
        return false;
      }
      return true;
    }
    exports.verify = verify2;
    function convertPublicKeyToX25519(publicKey) {
      let q3 = [gf(), gf(), gf(), gf()];
      if (unpackneg(q3, publicKey)) {
        throw new Error("Ed25519: invalid public key");
      }
      let a2 = gf();
      let b4 = gf();
      let y4 = q3[1];
      add(a2, gf1, y4);
      sub(b4, gf1, y4);
      inv25519(b4, b4);
      mul(a2, a2, b4);
      let z = new Uint8Array(32);
      pack25519(z, a2);
      return z;
    }
    exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
    function convertSecretKeyToX25519(secretKey) {
      const d2 = (0, sha512_1.hash)(secretKey.subarray(0, 32));
      d2[0] &= 248;
      d2[31] &= 127;
      d2[31] |= 64;
      const o = new Uint8Array(d2.subarray(0, 32));
      (0, wipe_1.wipe)(d2);
      return o;
    }
    exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
  }
});

// node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js
var tslib_es6_exports4 = {};
__export(tslib_es6_exports4, {
  __assign: () => __assign4,
  __asyncDelegator: () => __asyncDelegator4,
  __asyncGenerator: () => __asyncGenerator4,
  __asyncValues: () => __asyncValues4,
  __await: () => __await4,
  __awaiter: () => __awaiter4,
  __classPrivateFieldGet: () => __classPrivateFieldGet4,
  __classPrivateFieldSet: () => __classPrivateFieldSet4,
  __createBinding: () => __createBinding4,
  __decorate: () => __decorate4,
  __exportStar: () => __exportStar4,
  __extends: () => __extends4,
  __generator: () => __generator4,
  __importDefault: () => __importDefault4,
  __importStar: () => __importStar4,
  __makeTemplateObject: () => __makeTemplateObject4,
  __metadata: () => __metadata4,
  __param: () => __param4,
  __read: () => __read4,
  __rest: () => __rest4,
  __spread: () => __spread4,
  __spreadArrays: () => __spreadArrays4,
  __values: () => __values4
});
function __extends4(d2, b4) {
  extendStatics4(d2, b4);
  function __() {
    this.constructor = d2;
  }
  d2.prototype = b4 === null ? Object.create(b4) : (__.prototype = b4.prototype, new __());
}
function __rest4(s, e) {
  var t = {};
  for (var p4 in s)
    if (Object.prototype.hasOwnProperty.call(s, p4) && e.indexOf(p4) < 0)
      t[p4] = s[p4];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p4 = Object.getOwnPropertySymbols(s); i2 < p4.length; i2++) {
      if (e.indexOf(p4[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p4[i2]))
        t[p4[i2]] = s[p4[i2]];
    }
  return t;
}
function __decorate4(decorators, target, key, desc) {
  var c2 = arguments.length, r = c2 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i2 = decorators.length - 1; i2 >= 0; i2--)
      if (d2 = decorators[i2])
        r = (c2 < 3 ? d2(r) : c2 > 3 ? d2(target, key, r) : d2(target, key)) || r;
  return c2 > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param4(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata4(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter4(thisArg, _arguments, P3, generator) {
  function adopt(value) {
    return value instanceof P3 ? value : new P3(function(resolve) {
      resolve(value);
    });
  }
  return new (P3 || (P3 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator4(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f3, y4, t, g5;
  return g5 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g5[Symbol.iterator] = function() {
    return this;
  }), g5;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f3)
      throw new TypeError("Generator is already executing.");
    while (_3)
      try {
        if (f3 = 1, y4 && (t = op[0] & 2 ? y4["return"] : op[0] ? y4["throw"] || ((t = y4["return"]) && t.call(y4), 0) : y4.next) && !(t = t.call(y4, op[1])).done)
          return t;
        if (y4 = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _3.label++;
            return { value: op[1], done: false };
          case 5:
            _3.label++;
            y4 = op[1];
            op = [0];
            continue;
          case 7:
            op = _3.ops.pop();
            _3.trys.pop();
            continue;
          default:
            if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _3 = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _3.label = op[1];
              break;
            }
            if (op[0] === 6 && _3.label < t[1]) {
              _3.label = t[1];
              t = op;
              break;
            }
            if (t && _3.label < t[2]) {
              _3.label = t[2];
              _3.ops.push(op);
              break;
            }
            if (t[2])
              _3.ops.pop();
            _3.trys.pop();
            continue;
        }
        op = body.call(thisArg, _3);
      } catch (e) {
        op = [6, e];
        y4 = 0;
      } finally {
        f3 = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding4(o, m2, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m2[k];
}
function __exportStar4(m2, exports) {
  for (var p4 in m2)
    if (p4 !== "default" && !exports.hasOwnProperty(p4))
      exports[p4] = m2[p4];
}
function __values4(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o[s], i2 = 0;
  if (m2)
    return m2.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i2 >= o.length)
          o = void 0;
        return { value: o && o[i2++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read4(o, n2) {
  var m2 = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m2)
    return o;
  var i2 = m2.call(o), r, ar2 = [], e;
  try {
    while ((n2 === void 0 || n2-- > 0) && !(r = i2.next()).done)
      ar2.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m2 = i2["return"]))
        m2.call(i2);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar2;
}
function __spread4() {
  for (var ar2 = [], i2 = 0; i2 < arguments.length; i2++)
    ar2 = ar2.concat(__read4(arguments[i2]));
  return ar2;
}
function __spreadArrays4() {
  for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
    s += arguments[i2].length;
  for (var r = Array(s), k = 0, i2 = 0; i2 < il; i2++)
    for (var a2 = arguments[i2], j4 = 0, jl = a2.length; j4 < jl; j4++, k++)
      r[k] = a2[j4];
  return r;
}
function __await4(v2) {
  return this instanceof __await4 ? (this.v = v2, this) : new __await4(v2);
}
function __asyncGenerator4(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g5 = generator.apply(thisArg, _arguments || []), i2, q3 = [];
  return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2;
  function verb(n2) {
    if (g5[n2])
      i2[n2] = function(v2) {
        return new Promise(function(a2, b4) {
          q3.push([n2, v2, a2, b4]) > 1 || resume(n2, v2);
        });
      };
  }
  function resume(n2, v2) {
    try {
      step(g5[n2](v2));
    } catch (e) {
      settle(q3[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await4 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q3[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f3, v2) {
    if (f3(v2), q3.shift(), q3.length)
      resume(q3[0][0], q3[0][1]);
  }
}
function __asyncDelegator4(o) {
  var i2, p4;
  return i2 = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i2[Symbol.iterator] = function() {
    return this;
  }, i2;
  function verb(n2, f3) {
    i2[n2] = o[n2] ? function(v2) {
      return (p4 = !p4) ? { value: __await4(o[n2](v2)), done: n2 === "return" } : f3 ? f3(v2) : v2;
    } : f3;
  }
}
function __asyncValues4(o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m2 = o[Symbol.asyncIterator], i2;
  return m2 ? m2.call(o) : (o = typeof __values4 === "function" ? __values4(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
    return this;
  }, i2);
  function verb(n2) {
    i2[n2] = o[n2] && function(v2) {
      return new Promise(function(resolve, reject) {
        v2 = o[n2](v2), settle(resolve, reject, v2.done, v2.value);
      });
    };
  }
  function settle(resolve, reject, d2, v2) {
    Promise.resolve(v2).then(function(v3) {
      resolve({ value: v3, done: d2 });
    }, reject);
  }
}
function __makeTemplateObject4(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar4(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (Object.hasOwnProperty.call(mod, k))
        result[k] = mod[k];
  }
  result.default = mod;
  return result;
}
function __importDefault4(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet4(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet4(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics4, __assign4;
var init_tslib_es64 = __esm({
  "node_modules/@walletconnect/environment/node_modules/tslib/tslib.es6.js"() {
    extendStatics4 = function(d2, b4) {
      extendStatics4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b5) {
        d3.__proto__ = b5;
      } || function(d3, b5) {
        for (var p4 in b5)
          if (b5.hasOwnProperty(p4))
            d3[p4] = b5[p4];
      };
      return extendStatics4(d2, b4);
    };
    __assign4 = function() {
      __assign4 = Object.assign || function __assign5(t) {
        for (var s, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s = arguments[i2];
          for (var p4 in s)
            if (Object.prototype.hasOwnProperty.call(s, p4))
              t[p4] = s[p4];
        }
        return t;
      };
      return __assign4.apply(this, arguments);
    };
  }
});

// node_modules/@walletconnect/environment/dist/cjs/crypto.js
var require_crypto = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
    function getBrowerCrypto() {
      return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
    }
    exports.getBrowerCrypto = getBrowerCrypto;
    function getSubtleCrypto() {
      const browserCrypto = getBrowerCrypto();
      return browserCrypto.subtle || browserCrypto.webkitSubtle;
    }
    exports.getSubtleCrypto = getSubtleCrypto;
    function isBrowserCryptoAvailable() {
      return !!getBrowerCrypto() && !!getSubtleCrypto();
    }
    exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/env.js
var require_env = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
    function isReactNative2() {
      return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
    }
    exports.isReactNative = isReactNative2;
    function isNode2() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    }
    exports.isNode = isNode2;
    function isBrowser() {
      return !isReactNative2() && !isNode2();
    }
    exports.isBrowser = isBrowser;
  }
});

// node_modules/@walletconnect/environment/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@walletconnect/environment/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es64(), __toCommonJS(tslib_es6_exports4));
    tslib_1.__exportStar(require_crypto(), exports);
    tslib_1.__exportStar(require_env(), exports);
  }
});

// node_modules/ws/browser.js
var require_browser3 = __commonJS({
  "node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n2, iteratee) {
      var index = -1, result = Array(n2);
      while (++index < n2) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual;
  }
});

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var import_events9 = __toESM(require_events());

// node_modules/@walletconnect/core/dist/index.es.js
var import_events5 = __toESM(require_events());
var import_keyvaluestorage = __toESM(require_browser());
var import_heartbeat = __toESM(require_cjs3());
var import_logger = __toESM(require_cjs4());

// node_modules/@walletconnect/types/dist/index.es.js
init_esm();
var import_events2 = __toESM(require_events());
var n = class extends IEvents {
  constructor(s) {
    super(), this.opts = s, this.protocol = "wc", this.version = 2;
  }
};
var h2 = class extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t, this.records = /* @__PURE__ */ new Map();
  }
};
var a = class {
  constructor(s, t) {
    this.logger = s, this.core = t;
  }
};
var u = class extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
var g = class extends IEvents {
  constructor(s) {
    super();
  }
};
var p2 = class {
  constructor(s, t, o, w3) {
    this.core = s, this.logger = t, this.name = o;
  }
};
var d = class extends IEvents {
  constructor(s, t) {
    super(), this.relayer = s, this.logger = t;
  }
};
var E = class extends IEvents {
  constructor(s, t) {
    super(), this.core = s, this.logger = t;
  }
};
var y = class {
  constructor(s, t) {
    this.projectId = s, this.logger = t;
  }
};
var b = class {
  constructor(s) {
    this.opts = s, this.protocol = "wc", this.version = 2;
  }
};
var S2 = class {
  constructor(s) {
    this.client = s;
  }
};

// node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}

// node_modules/@walletconnect/relay-auth/dist/esm/api.js
var ed25519 = __toESM(require_ed25519());
var import_random = __toESM(require_random());
var import_time = __toESM(require_cjs());

// node_modules/@walletconnect/relay-auth/dist/esm/constants.js
var JWT_IRIDIUM_ALG = "EdDSA";
var JWT_IRIDIUM_TYP = "JWT";
var JWT_DELIMITER = ".";
var JWT_ENCODING = "base64url";
var JSON_ENCODING = "utf8";
var DATA_ENCODING = "utf8";
var DID_DELIMITER = ":";
var DID_PREFIX = "did";
var DID_METHOD = "key";
var MULTICODEC_ED25519_ENCODING = "base58btc";
var MULTICODEC_ED25519_BASE = "z";
var MULTICODEC_ED25519_HEADER = "K36";
var KEY_PAIR_SEED_LENGTH = 32;

// node_modules/@walletconnect/relay-auth/dist/esm/utils.js
function encodeJSON(val) {
  return toString(fromString(safeJsonStringify(val), JSON_ENCODING), JWT_ENCODING);
}
function encodeIss(publicKey) {
  const header = fromString(MULTICODEC_ED25519_HEADER, MULTICODEC_ED25519_ENCODING);
  const multicodec = MULTICODEC_ED25519_BASE + toString(concat([header, publicKey]), MULTICODEC_ED25519_ENCODING);
  return [DID_PREFIX, DID_METHOD, multicodec].join(DID_DELIMITER);
}
function encodeSig(bytes) {
  return toString(bytes, JWT_ENCODING);
}
function encodeData(params) {
  return fromString([encodeJSON(params.header), encodeJSON(params.payload)].join(JWT_DELIMITER), DATA_ENCODING);
}
function encodeJWT(params) {
  return [
    encodeJSON(params.header),
    encodeJSON(params.payload),
    encodeSig(params.signature)
  ].join(JWT_DELIMITER);
}

// node_modules/@walletconnect/relay-auth/dist/esm/api.js
function generateKeyPair(seed = (0, import_random.randomBytes)(KEY_PAIR_SEED_LENGTH)) {
  return ed25519.generateKeyPairFromSeed(seed);
}
async function signJWT(sub, aud, ttl, keyPair, iat = (0, import_time.fromMiliseconds)(Date.now())) {
  const header = { alg: JWT_IRIDIUM_ALG, typ: JWT_IRIDIUM_TYP };
  const iss = encodeIss(keyPair.publicKey);
  const exp = iat + ttl;
  const payload = { iss, sub, aud, iat, exp };
  const data = encodeData({ header, payload });
  const signature = ed25519.sign(keyPair.secretKey, data);
  return encodeJWT({ header, payload, signature });
}

// node_modules/@walletconnect/core/dist/index.es.js
var import_time2 = __toESM(require_cjs());

// node_modules/@walletconnect/jsonrpc-provider/dist/esm/provider.js
var import_events3 = __toESM(require_events());

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  DEFAULT_ERROR: () => DEFAULT_ERROR,
  IBaseJsonRpcProvider: () => IBaseJsonRpcProvider,
  IEvents: () => IEvents2,
  IJsonRpcConnection: () => IJsonRpcConnection,
  IJsonRpcProvider: () => IJsonRpcProvider,
  INTERNAL_ERROR: () => INTERNAL_ERROR,
  INVALID_PARAMS: () => INVALID_PARAMS,
  INVALID_REQUEST: () => INVALID_REQUEST,
  METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
  PARSE_ERROR: () => PARSE_ERROR,
  RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
  SERVER_ERROR: () => SERVER_ERROR,
  SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
  STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
  formatErrorMessage: () => formatErrorMessage,
  formatJsonRpcError: () => formatJsonRpcError,
  formatJsonRpcRequest: () => formatJsonRpcRequest,
  formatJsonRpcResult: () => formatJsonRpcResult,
  getBigIntRpcId: () => getBigIntRpcId,
  getError: () => getError,
  getErrorByCode: () => getErrorByCode,
  isHttpUrl: () => isHttpUrl,
  isJsonRpcError: () => isJsonRpcError,
  isJsonRpcPayload: () => isJsonRpcPayload,
  isJsonRpcRequest: () => isJsonRpcRequest,
  isJsonRpcResponse: () => isJsonRpcResponse,
  isJsonRpcResult: () => isJsonRpcResult,
  isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
  isLocalhostUrl: () => isLocalhostUrl,
  isNodeJs: () => isNodeJs,
  isReservedErrorCode: () => isReservedErrorCode,
  isServerErrorCode: () => isServerErrorCode,
  isValidDefaultRoute: () => isValidDefaultRoute,
  isValidErrorCode: () => isValidErrorCode,
  isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
  isValidRoute: () => isValidRoute,
  isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
  isValidWildcardRoute: () => isValidWildcardRoute,
  isWsUrl: () => isWsUrl,
  parseConnectionError: () => parseConnectionError,
  payloadId: () => payloadId,
  validateJsonRpcError: () => validateJsonRpcError
});

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
var PARSE_ERROR = "PARSE_ERROR";
var INVALID_REQUEST = "INVALID_REQUEST";
var METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
var INVALID_PARAMS = "INVALID_PARAMS";
var INTERNAL_ERROR = "INTERNAL_ERROR";
var SERVER_ERROR = "SERVER_ERROR";
var RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
var SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
var STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
var DEFAULT_ERROR = SERVER_ERROR;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js
function isServerErrorCode(code) {
  return code <= SERVER_ERROR_CODE_RANGE[0] && code >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code) {
  return RESERVED_ERROR_CODES.includes(code);
}
function isValidErrorCode(code) {
  return typeof code === "number";
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e) => e.code === code);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return { valid: false, error: "Missing code for JSON-RPC error" };
  }
  if (typeof response.error.message === "undefined") {
    return { valid: false, error: "Missing message for JSON-RPC error" };
  }
  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }
  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);
    if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }
  return { valid: true };
}
function parseConnectionError(e, url, type) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js
var env_exports = {};
__export(env_exports, {
  isNodeJs: () => isNodeJs
});
var import_environment = __toESM(require_cjs5());
__reExport(env_exports, __toESM(require_cjs5()));
var isNodeJs = import_environment.isNode;

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
__reExport(esm_exports2, env_exports);

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js
function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }
  if (/\W/g.test(route)) {
    return false;
  }
  return true;
}
function isValidDefaultRoute(route) {
  return route === "*";
}
function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }
  if (!route.includes("*")) {
    return false;
  }
  if (route.split("*").length !== 2) {
    return false;
  }
  if (route.split("*").filter((x2) => x2.trim() === "").length !== 1) {
    return false;
  }
  return true;
}
function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

// node_modules/@walletconnect/jsonrpc-types/dist/esm/misc.js
var IEvents2 = class {
};

// node_modules/@walletconnect/jsonrpc-types/dist/esm/provider.js
var IJsonRpcConnection = class extends IEvents2 {
  constructor(opts) {
    super();
  }
};
var IBaseJsonRpcProvider = class extends IEvents2 {
  constructor() {
    super();
  }
};
var IJsonRpcProvider = class extends IBaseJsonRpcProvider {
  constructor(connection) {
    super();
  }
};

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
var HTTP_REGEX = "^https?:";
var WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

// node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}

// node_modules/@walletconnect/jsonrpc-provider/dist/esm/provider.js
var JsonRpcProvider = class extends IJsonRpcProvider {
  constructor(connection) {
    super(connection);
    this.events = new import_events3.EventEmitter();
    this.hasRegisteredEventListeners = false;
    this.connection = this.setConnection(connection);
    if (this.connection.connected) {
      this.registerEventListeners();
    }
  }
  async connect(connection = this.connection) {
    await this.open(connection);
  }
  async disconnect() {
    await this.close();
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async request(request, context) {
    return this.requestStrict(formatJsonRpcRequest(request.method, request.params || [], request.id || getBigIntRpcId().toString()), context);
  }
  async requestStrict(request, context) {
    return new Promise(async (resolve, reject) => {
      if (!this.connection.connected) {
        try {
          await this.open();
        } catch (e) {
          reject(e);
        }
      }
      this.events.on(`${request.id}`, (response) => {
        if (isJsonRpcError(response)) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
      try {
        await this.connection.send(request, context);
      } catch (e) {
        reject(e);
      }
    });
  }
  setConnection(connection = this.connection) {
    return connection;
  }
  onPayload(payload) {
    this.events.emit("payload", payload);
    if (isJsonRpcResponse(payload)) {
      this.events.emit(`${payload.id}`, payload);
    } else {
      this.events.emit("message", {
        type: payload.method,
        data: payload.params
      });
    }
  }
  onClose(event) {
    if (event && event.code === 3e3) {
      this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${event.code} ${event.reason ? `(${event.reason})` : ""}`));
    }
    this.events.emit("disconnect");
  }
  async open(connection = this.connection) {
    if (this.connection === connection && this.connection.connected)
      return;
    if (this.connection.connected)
      this.close();
    if (typeof connection === "string") {
      await this.connection.open(connection);
      connection = this.connection;
    }
    this.connection = this.setConnection(connection);
    await this.connection.open();
    this.registerEventListeners();
    this.events.emit("connect");
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    if (this.hasRegisteredEventListeners)
      return;
    this.connection.on("payload", (payload) => this.onPayload(payload));
    this.connection.on("close", (event) => this.onClose(event));
    this.connection.on("error", (error) => this.events.emit("error", error));
    this.connection.on("register_error", (error) => this.onClose());
    this.hasRegisteredEventListeners = true;
  }
};

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/esm/ws.js
var import_events4 = __toESM(require_events());

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/esm/utils.js
var resolveWebSocketImplementation = () => {
  if (typeof WebSocket !== "undefined") {
    return WebSocket;
  } else if (typeof global !== "undefined" && typeof global.WebSocket !== "undefined") {
    return global.WebSocket;
  } else if (typeof window !== "undefined" && typeof window.WebSocket !== "undefined") {
    return window.WebSocket;
  } else if (typeof self !== "undefined" && typeof self.WebSocket !== "undefined") {
    return self.WebSocket;
  }
  return require_browser3();
};
var hasBuiltInWebSocket = () => typeof WebSocket !== "undefined" || typeof global !== "undefined" && typeof global.WebSocket !== "undefined" || typeof window !== "undefined" && typeof window.WebSocket !== "undefined" || typeof self !== "undefined" && typeof self.WebSocket !== "undefined";
var truncateQuery = (wssUrl) => wssUrl.split("?")[0];

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/esm/ws.js
var EVENT_EMITTER_MAX_LISTENERS_DEFAULT = 10;
var WS = resolveWebSocketImplementation();
var WsConnection = class {
  constructor(url) {
    this.url = url;
    this.events = new import_events4.EventEmitter();
    this.registering = false;
    if (!isWsUrl(url)) {
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
    }
    this.url = url;
  }
  get connected() {
    return typeof this.socket !== "undefined";
  }
  get connecting() {
    return this.registering;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(url = this.url) {
    await this.register(url);
  }
  async close() {
    return new Promise((resolve, reject) => {
      if (typeof this.socket === "undefined") {
        reject(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (event) => {
        this.onClose(event);
        resolve();
      };
      this.socket.close();
    });
  }
  async send(payload, context) {
    if (typeof this.socket === "undefined") {
      this.socket = await this.register();
    }
    try {
      this.socket.send(safeJsonStringify(payload));
    } catch (e) {
      this.onError(payload.id, e);
    }
  }
  register(url = this.url) {
    if (!isWsUrl(url)) {
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${url}`);
    }
    if (this.registering) {
      const currentMaxListeners = this.events.getMaxListeners();
      if (this.events.listenerCount("register_error") >= currentMaxListeners || this.events.listenerCount("open") >= currentMaxListeners) {
        this.events.setMaxListeners(currentMaxListeners + 1);
      }
      return new Promise((resolve, reject) => {
        this.events.once("register_error", (error) => {
          this.resetMaxListeners();
          reject(error);
        });
        this.events.once("open", () => {
          this.resetMaxListeners();
          if (typeof this.socket === "undefined") {
            return reject(new Error("WebSocket connection is missing or invalid"));
          }
          resolve(this.socket);
        });
      });
    }
    this.url = url;
    this.registering = true;
    return new Promise((resolve, reject) => {
      const opts = !(0, esm_exports2.isReactNative)() ? { rejectUnauthorized: !isLocalhostUrl(url) } : void 0;
      const socket = new WS(url, [], opts);
      if (hasBuiltInWebSocket()) {
        socket.onerror = (event) => {
          const errorEvent = event;
          reject(this.emitError(errorEvent.error));
        };
      } else {
        socket.on("error", (errorEvent) => {
          reject(this.emitError(errorEvent));
        });
      }
      socket.onopen = () => {
        this.onOpen(socket);
        resolve(socket);
      };
    });
  }
  onOpen(socket) {
    socket.onmessage = (event) => this.onPayload(event);
    socket.onclose = (event) => this.onClose(event);
    this.socket = socket;
    this.registering = false;
    this.events.emit("open");
  }
  onClose(event) {
    this.socket = void 0;
    this.registering = false;
    this.events.emit("close", event);
  }
  onPayload(e) {
    if (typeof e.data === "undefined")
      return;
    const payload = typeof e.data === "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", payload);
  }
  onError(id, e) {
    const error = this.parseError(e);
    const message = error.message || error.toString();
    const payload = formatJsonRpcError(id, message);
    this.events.emit("payload", payload);
  }
  parseError(e, url = this.url) {
    return parseConnectionError(e, truncateQuery(url), "WS");
  }
  resetMaxListeners() {
    if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT) {
      this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT);
    }
  }
  emitError(errorEvent) {
    const error = this.parseError(new Error((errorEvent === null || errorEvent === void 0 ? void 0 : errorEvent.message) || `WebSocket connection failed for host: ${truncateQuery(this.url)}`));
    this.events.emit("register_error", error);
    return error;
  }
};
var ws_default = WsConnection;

// node_modules/@walletconnect/jsonrpc-ws-connection/dist/esm/index.js
var esm_default = ws_default;

// node_modules/@walletconnect/core/dist/index.es.js
var import_lodash = __toESM(require_lodash());
function Ki(r, e) {
  if (r.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i2 = 0; i2 < t.length; i2++)
    t[i2] = 255;
  for (var s = 0; s < r.length; s++) {
    var n2 = r.charAt(s), a2 = n2.charCodeAt(0);
    if (t[a2] !== 255)
      throw new TypeError(n2 + " is ambiguous");
    t[a2] = s;
  }
  var o = r.length, h3 = r.charAt(0), u3 = Math.log(o) / Math.log(256), d2 = Math.log(256) / Math.log(o);
  function p4(c2) {
    if (c2 instanceof Uint8Array || (ArrayBuffer.isView(c2) ? c2 = new Uint8Array(c2.buffer, c2.byteOffset, c2.byteLength) : Array.isArray(c2) && (c2 = Uint8Array.from(c2))), !(c2 instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (c2.length === 0)
      return "";
    for (var b4 = 0, z = 0, v2 = 0, _3 = c2.length; v2 !== _3 && c2[v2] === 0; )
      v2++, b4++;
    for (var T = (_3 - v2) * d2 + 1 >>> 0, m2 = new Uint8Array(T); v2 !== _3; ) {
      for (var S4 = c2[v2], A2 = 0, I2 = T - 1; (S4 !== 0 || A2 < z) && I2 !== -1; I2--, A2++)
        S4 += 256 * m2[I2] >>> 0, m2[I2] = S4 % o >>> 0, S4 = S4 / o >>> 0;
      if (S4 !== 0)
        throw new Error("Non-zero carry");
      z = A2, v2++;
    }
    for (var O3 = T - z; O3 !== T && m2[O3] === 0; )
      O3++;
    for (var q3 = h3.repeat(b4); O3 < T; ++O3)
      q3 += r.charAt(m2[O3]);
    return q3;
  }
  function y4(c2) {
    if (typeof c2 != "string")
      throw new TypeError("Expected String");
    if (c2.length === 0)
      return new Uint8Array();
    var b4 = 0;
    if (c2[b4] !== " ") {
      for (var z = 0, v2 = 0; c2[b4] === h3; )
        z++, b4++;
      for (var _3 = (c2.length - b4) * u3 + 1 >>> 0, T = new Uint8Array(_3); c2[b4]; ) {
        var m2 = t[c2.charCodeAt(b4)];
        if (m2 === 255)
          return;
        for (var S4 = 0, A2 = _3 - 1; (m2 !== 0 || S4 < v2) && A2 !== -1; A2--, S4++)
          m2 += o * T[A2] >>> 0, T[A2] = m2 % 256 >>> 0, m2 = m2 / 256 >>> 0;
        if (m2 !== 0)
          throw new Error("Non-zero carry");
        v2 = S4, b4++;
      }
      if (c2[b4] !== " ") {
        for (var I2 = _3 - v2; I2 !== _3 && T[I2] === 0; )
          I2++;
        for (var O3 = new Uint8Array(z + (_3 - I2)), q3 = z; I2 !== _3; )
          O3[q3++] = T[I2++];
        return O3;
      }
    }
  }
  function $3(c2) {
    var b4 = y4(c2);
    if (b4)
      return b4;
    throw new Error(`Non-${e} character`);
  }
  return { encode: p4, decodeUnsafe: y4, decode: $3 };
}
var Bi = Ki;
var Vi = Bi;
var ze = (r) => {
  if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
    return r;
  if (r instanceof ArrayBuffer)
    return new Uint8Array(r);
  if (ArrayBuffer.isView(r))
    return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var qi = (r) => new TextEncoder().encode(r);
var ji = (r) => new TextDecoder().decode(r);
var Yi = class {
  constructor(e, t, i2) {
    this.name = e, this.prefix = t, this.baseEncode = i2;
  }
  encode(e) {
    if (e instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(e)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Gi = class {
  constructor(e, t, i2) {
    if (this.name = e, this.prefix = t, t.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i2;
  }
  decode(e) {
    if (typeof e == "string") {
      if (e.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(e) {
    return Ne(this, e);
  }
};
var Hi = class {
  constructor(e) {
    this.decoders = e;
  }
  or(e) {
    return Ne(this, e);
  }
  decode(e) {
    const t = e[0], i2 = this.decoders[t];
    if (i2)
      return i2.decode(e);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var Ne = (r, e) => new Hi({ ...r.decoders || { [r.prefix]: r }, ...e.decoders || { [e.prefix]: e } });
var Ji = class {
  constructor(e, t, i2, s) {
    this.name = e, this.prefix = t, this.baseEncode = i2, this.baseDecode = s, this.encoder = new Yi(e, t, i2), this.decoder = new Gi(e, t, s);
  }
  encode(e) {
    return this.encoder.encode(e);
  }
  decode(e) {
    return this.decoder.decode(e);
  }
};
var W = ({ name: r, prefix: e, encode: t, decode: i2 }) => new Ji(r, e, t, i2);
var K = ({ prefix: r, name: e, alphabet: t }) => {
  const { encode: i2, decode: s } = Vi(t, e);
  return W({ prefix: r, name: e, encode: i2, decode: (n2) => ze(s(n2)) });
};
var Wi = (r, e, t, i2) => {
  const s = {};
  for (let d2 = 0; d2 < e.length; ++d2)
    s[e[d2]] = d2;
  let n2 = r.length;
  for (; r[n2 - 1] === "="; )
    --n2;
  const a2 = new Uint8Array(n2 * t / 8 | 0);
  let o = 0, h3 = 0, u3 = 0;
  for (let d2 = 0; d2 < n2; ++d2) {
    const p4 = s[r[d2]];
    if (p4 === void 0)
      throw new SyntaxError(`Non-${i2} character`);
    h3 = h3 << t | p4, o += t, o >= 8 && (o -= 8, a2[u3++] = 255 & h3 >> o);
  }
  if (o >= t || 255 & h3 << 8 - o)
    throw new SyntaxError("Unexpected end of data");
  return a2;
};
var Xi = (r, e, t) => {
  const i2 = e[e.length - 1] === "=", s = (1 << t) - 1;
  let n2 = "", a2 = 0, o = 0;
  for (let h3 = 0; h3 < r.length; ++h3)
    for (o = o << 8 | r[h3], a2 += 8; a2 > t; )
      a2 -= t, n2 += e[s & o >> a2];
  if (a2 && (n2 += e[s & o << t - a2]), i2)
    for (; n2.length * t & 7; )
      n2 += "=";
  return n2;
};
var g2 = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i2 }) => W({ prefix: e, name: r, encode(s) {
  return Xi(s, i2, t);
}, decode(s) {
  return Wi(s, i2, t, r);
} });
var Qi = W({ prefix: "\0", name: "identity", encode: (r) => ji(r), decode: (r) => qi(r) });
var Zi = Object.freeze({ __proto__: null, identity: Qi });
var es = g2({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var ts = Object.freeze({ __proto__: null, base2: es });
var is = g2({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var ss = Object.freeze({ __proto__: null, base8: is });
var rs = K({ prefix: "9", name: "base10", alphabet: "0123456789" });
var ns = Object.freeze({ __proto__: null, base10: rs });
var as = g2({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var os = g2({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var hs = Object.freeze({ __proto__: null, base16: as, base16upper: os });
var cs = g2({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var us = g2({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var ls = g2({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var ds = g2({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var gs = g2({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var ps = g2({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var Ds = g2({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var ys = g2({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var bs = g2({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var ms = Object.freeze({ __proto__: null, base32: cs, base32upper: us, base32pad: ls, base32padupper: ds, base32hex: gs, base32hexupper: ps, base32hexpad: Ds, base32hexpadupper: ys, base32z: bs });
var fs = K({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var Es = K({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ws = Object.freeze({ __proto__: null, base36: fs, base36upper: Es });
var vs = K({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Is = K({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Cs = Object.freeze({ __proto__: null, base58btc: vs, base58flickr: Is });
var Rs = g2({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var _s = g2({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var Ts = g2({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Ss = g2({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Ps = Object.freeze({ __proto__: null, base64: Rs, base64pad: _s, base64url: Ts, base64urlpad: Ss });
var Ue = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂");
var Os = Ue.reduce((r, e, t) => (r[t] = e, r), []);
var xs = Ue.reduce((r, e, t) => (r[e.codePointAt(0)] = t, r), []);
function As(r) {
  return r.reduce((e, t) => (e += Os[t], e), "");
}
function zs(r) {
  const e = [];
  for (const t of r) {
    const i2 = xs[t.codePointAt(0)];
    if (i2 === void 0)
      throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i2);
  }
  return new Uint8Array(e);
}
var Ns = W({ prefix: "🚀", name: "base256emoji", encode: As, decode: zs });
var Us = Object.freeze({ __proto__: null, base256emoji: Ns });
var Ls = Fe;
var Le = 128;
var Fs = 127;
var $s = ~Fs;
var Ms = Math.pow(2, 31);
function Fe(r, e, t) {
  e = e || [], t = t || 0;
  for (var i2 = t; r >= Ms; )
    e[t++] = r & 255 | Le, r /= 128;
  for (; r & $s; )
    e[t++] = r & 255 | Le, r >>>= 7;
  return e[t] = r | 0, Fe.bytes = t - i2 + 1, e;
}
var ks = oe2;
var Ks = 128;
var $e = 127;
function oe2(r, i2) {
  var t = 0, i2 = i2 || 0, s = 0, n2 = i2, a2, o = r.length;
  do {
    if (n2 >= o)
      throw oe2.bytes = 0, new RangeError("Could not decode varint");
    a2 = r[n2++], t += s < 28 ? (a2 & $e) << s : (a2 & $e) * Math.pow(2, s), s += 7;
  } while (a2 >= Ks);
  return oe2.bytes = n2 - i2, t;
}
var Bs = Math.pow(2, 7);
var Vs = Math.pow(2, 14);
var qs = Math.pow(2, 21);
var js = Math.pow(2, 28);
var Ys = Math.pow(2, 35);
var Gs = Math.pow(2, 42);
var Hs = Math.pow(2, 49);
var Js = Math.pow(2, 56);
var Ws = Math.pow(2, 63);
var Xs = function(r) {
  return r < Bs ? 1 : r < Vs ? 2 : r < qs ? 3 : r < js ? 4 : r < Ys ? 5 : r < Gs ? 6 : r < Hs ? 7 : r < Js ? 8 : r < Ws ? 9 : 10;
};
var Qs = { encode: Ls, decode: ks, encodingLength: Xs };
var Me = Qs;
var ke = (r, e, t = 0) => (Me.encode(r, e, t), e);
var Ke = (r) => Me.encodingLength(r);
var he = (r, e) => {
  const t = e.byteLength, i2 = Ke(r), s = i2 + Ke(t), n2 = new Uint8Array(s + t);
  return ke(r, n2, 0), ke(t, n2, i2), n2.set(e, s), new Zs(r, t, e, n2);
};
var Zs = class {
  constructor(e, t, i2, s) {
    this.code = e, this.size = t, this.digest = i2, this.bytes = s;
  }
};
var Be = ({ name: r, code: e, encode: t }) => new er2(r, e, t);
var er2 = class {
  constructor(e, t, i2) {
    this.name = e, this.code = t, this.encode = i2;
  }
  digest(e) {
    if (e instanceof Uint8Array) {
      const t = this.encode(e);
      return t instanceof Uint8Array ? he(this.code, t) : t.then((i2) => he(this.code, i2));
    } else
      throw Error("Unknown type, must be binary type");
  }
};
var Ve = (r) => async (e) => new Uint8Array(await crypto.subtle.digest(r, e));
var tr = Be({ name: "sha2-256", code: 18, encode: Ve("SHA-256") });
var ir = Be({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
var sr = Object.freeze({ __proto__: null, sha256: tr, sha512: ir });
var qe = 0;
var rr = "identity";
var je = ze;
var nr = (r) => he(qe, je(r));
var ar = { code: qe, name: rr, encode: je, digest: nr };
var or = Object.freeze({ __proto__: null, identity: ar });
new TextEncoder(), new TextDecoder();
var Ye = { ...Zi, ...ts, ...ss, ...ns, ...hs, ...ms, ...ws, ...Cs, ...Ps, ...Us };
({ ...sr, ...or });
function Ge(r) {
  return globalThis.Buffer != null ? new Uint8Array(r.buffer, r.byteOffset, r.byteLength) : r;
}
function hr(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Ge(globalThis.Buffer.allocUnsafe(r)) : new Uint8Array(r);
}
function He(r, e, t, i2) {
  return { name: r, prefix: e, encoder: { name: r, prefix: e, encode: t }, decoder: { decode: i2 } };
}
var Je = He("utf8", "u", (r) => "u" + new TextDecoder("utf8").decode(r), (r) => new TextEncoder().encode(r.substring(1)));
var ce = He("ascii", "a", (r) => {
  let e = "a";
  for (let t = 0; t < r.length; t++)
    e += String.fromCharCode(r[t]);
  return e;
}, (r) => {
  r = r.substring(1);
  const e = hr(r.length);
  for (let t = 0; t < r.length; t++)
    e[t] = r.charCodeAt(t);
  return e;
});
var cr = { utf8: Je, "utf-8": Je, hex: Ye.base16, latin1: ce, ascii: ce, binary: ce, ...Ye };
function ur(r, e = "utf8") {
  const t = cr[e];
  if (!t)
    throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Ge(globalThis.Buffer.from(r, "utf-8")) : t.decoder.decode(`${t.prefix}${r}`);
}
var ue = "wc";
var We = 2;
var X = "core";
var x = `${ue}@2:${X}:`;
var Xe2 = { name: X, logger: "error" };
var Qe = { database: ":memory:" };
var Ze = "crypto";
var le = "client_ed25519_seed";
var et2 = import_time2.ONE_DAY;
var tt = "keychain";
var it2 = "0.3";
var st2 = "messages";
var rt = "0.3";
var nt2 = import_time2.SIX_HOURS;
var at2 = "publisher";
var ot = "irn";
var ht = "error";
var de = "wss://relay.walletconnect.com";
var ge = "wss://relay.walletconnect.org";
var ct2 = "relayer";
var D = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var ut2 = "_subscription";
var P = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var lt2 = import_time2.ONE_SECOND;
var dt2 = "2.10.1";
var gt = 1e4;
var pt2 = "0.3";
var Dt2 = "WALLETCONNECT_CLIENT_ID";
var C = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var yt2 = "subscription";
var bt2 = "0.3";
var mt2 = import_time2.FIVE_SECONDS * 1e3;
var ft2 = "pairing";
var Et = "0.3";
var F = { wc_pairingDelete: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time2.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time2.ONE_DAY, prompt: false, tag: 0 } } };
var B2 = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var R = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var wt = "history";
var vt = "0.3";
var It = "expirer";
var w2 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Ct = "0.3";
var Q = "verify-api";
var Z = "https://verify.walletconnect.com";
var pe = "https://verify.walletconnect.org";
var Rt = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.keychain = /* @__PURE__ */ new Map(), this.name = tt, this.version = it2, this.initialized = false, this.storagePrefix = x, this.init = async () => {
      if (!this.initialized) {
        const i2 = await this.getKeyChain();
        typeof i2 < "u" && (this.keychain = i2), this.initialized = true;
      }
    }, this.has = (i2) => (this.isInitialized(), this.keychain.has(i2)), this.set = async (i2, s) => {
      this.isInitialized(), this.keychain.set(i2, s), await this.persist();
    }, this.get = (i2) => {
      this.isInitialized();
      const s = this.keychain.get(i2);
      if (typeof s > "u") {
        const { message: n2 } = N("NO_MATCHING_KEY", `${this.name}: ${i2}`);
        throw new Error(n2);
      }
      return s;
    }, this.del = async (i2) => {
      this.isInitialized(), this.keychain.delete(i2), await this.persist();
    }, this.core = e, this.logger = (0, import_logger.generateChildLogger)(t, this.name);
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setKeyChain(e) {
    await this.core.storage.setItem(this.storageKey, et(e));
  }
  async getKeyChain() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? nt(e) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var _t = class {
  constructor(e, t, i2) {
    this.core = e, this.logger = t, this.name = Ze, this.initialized = false, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }, this.hasKeys = (s) => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
      this.isInitialized();
      const s = await this.getClientSeed(), n2 = generateKeyPair(s);
      return encodeIss(n2.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const s = jn();
      return this.setPrivateKey(s.publicKey, s.privateKey);
    }, this.signJWT = async (s) => {
      this.isInitialized();
      const n2 = await this.getClientSeed(), a2 = generateKeyPair(n2), o = Dn(), h3 = et2;
      return await signJWT(o, s, h3, a2);
    }, this.generateSharedKey = (s, n2, a2) => {
      this.isInitialized();
      const o = this.getPrivateKey(s), h3 = kn(o, n2);
      return this.setSymKey(h3, a2);
    }, this.setSymKey = async (s, n2) => {
      this.isInitialized();
      const a2 = n2 || Vn(s);
      return await this.keychain.set(a2, s), a2;
    }, this.deleteKeyPair = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.deleteSymKey = async (s) => {
      this.isInitialized(), await this.keychain.del(s);
    }, this.encode = async (s, n2, a2) => {
      this.isInitialized();
      const o = Re(a2), h3 = safeJsonStringify(n2);
      if (Fn(o)) {
        const y4 = o.senderPublicKey, $3 = o.receiverPublicKey;
        s = await this.generateSharedKey(y4, $3);
      }
      const u3 = this.getSymKey(s), { type: d2, senderPublicKey: p4 } = o;
      return Kn({ type: d2, symKey: u3, message: h3, senderPublicKey: p4 });
    }, this.decode = async (s, n2, a2) => {
      this.isInitialized();
      const o = xn(n2, a2);
      if (Fn(o)) {
        const h3 = o.receiverPublicKey, u3 = o.senderPublicKey;
        s = await this.generateSharedKey(h3, u3);
      }
      try {
        const h3 = this.getSymKey(s), u3 = Ln({ symKey: h3, encoded: n2 });
        return safeJsonParse(u3);
      } catch (h3) {
        this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(h3);
      }
    }, this.getPayloadType = (s) => {
      const n2 = ee(s);
      return $(n2.type);
    }, this.getPayloadSenderPublicKey = (s) => {
      const n2 = ee(s);
      return n2.senderPublicKey ? toString(n2.senderPublicKey, p) : void 0;
    }, this.core = e, this.logger = (0, import_logger.generateChildLogger)(t, this.name), this.keychain = i2 || new Rt(this.core, this.logger);
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  async setPrivateKey(e, t) {
    return await this.keychain.set(e, t), e;
  }
  getPrivateKey(e) {
    return this.keychain.get(e);
  }
  async getClientSeed() {
    let e = "";
    try {
      e = this.keychain.get(le);
    } catch {
      e = Dn(), await this.keychain.set(le, e);
    }
    return ur(e, "base16");
  }
  getSymKey(e) {
    return this.keychain.get(e);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Tt = class extends a {
  constructor(e, t) {
    super(e, t), this.logger = e, this.core = t, this.messages = /* @__PURE__ */ new Map(), this.name = st2, this.version = rt, this.initialized = false, this.storagePrefix = x, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i2 = await this.getRelayerMessages();
          typeof i2 < "u" && (this.messages = i2), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i2) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i2);
        } finally {
          this.initialized = true;
        }
      }
    }, this.set = async (i2, s) => {
      this.isInitialized();
      const n2 = Mn(s);
      let a2 = this.messages.get(i2);
      return typeof a2 > "u" && (a2 = {}), typeof a2[n2] < "u" || (a2[n2] = s, this.messages.set(i2, a2), await this.persist()), n2;
    }, this.get = (i2) => {
      this.isInitialized();
      let s = this.messages.get(i2);
      return typeof s > "u" && (s = {}), s;
    }, this.has = (i2, s) => {
      this.isInitialized();
      const n2 = this.get(i2), a2 = Mn(s);
      return typeof n2[a2] < "u";
    }, this.del = async (i2) => {
      this.isInitialized(), this.messages.delete(i2), await this.persist();
    }, this.logger = (0, import_logger.generateChildLogger)(e, this.name), this.core = t;
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  async setRelayerMessages(e) {
    await this.core.storage.setItem(this.storageKey, et(e));
  }
  async getRelayerMessages() {
    const e = await this.core.storage.getItem(this.storageKey);
    return typeof e < "u" ? nt(e) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Dr = class extends u {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.events = new import_events5.EventEmitter(), this.name = at2, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = (0, import_time2.toMiliseconds)(import_time2.TEN_SECONDS), this.needsTransportRestart = false, this.publish = async (i2, s, n2) => {
      var a2;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s, opts: n2 } });
      try {
        const o = (n2 == null ? void 0 : n2.ttl) || nt2, h3 = mt(n2), u3 = (n2 == null ? void 0 : n2.prompt) || false, d2 = (n2 == null ? void 0 : n2.tag) || 0, p4 = (n2 == null ? void 0 : n2.id) || getBigIntRpcId().toString(), y4 = { topic: i2, message: s, opts: { ttl: o, relay: h3, prompt: u3, tag: d2, id: p4 } }, $3 = setTimeout(() => this.queue.set(p4, y4), this.publishTimeout);
        try {
          await await it(this.rpcPublish(i2, s, o, h3, u3, d2, p4), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(p4), this.relayer.events.emit(D.publish, y4);
        } catch (c2) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = true, (a2 = n2 == null ? void 0 : n2.internal) != null && a2.throwOnFailedPublish)
            throw this.removeRequestFromQueue(p4), c2;
          return;
        } finally {
          clearTimeout($3);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i2, message: s, opts: n2 } });
      } catch (o) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(o), o;
      }
    }, this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.relayer = e, this.logger = (0, import_logger.generateChildLogger)(t, this.name), this.registerEventListeners();
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  rpcPublish(e, t, i2, s, n2, a2, o) {
    var h3, u3, d2, p4;
    const y4 = { method: yt(s.protocol).publish, params: { topic: e, message: t, ttl: i2, prompt: n2, tag: a2 }, id: o };
    return w((h3 = y4.params) == null ? void 0 : h3.prompt) && ((u3 = y4.params) == null || delete u3.prompt), w((d2 = y4.params) == null ? void 0 : d2.tag) && ((p4 = y4.params) == null || delete p4.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: y4 }), this.relayer.request(y4);
  }
  removeRequestFromQueue(e) {
    this.queue.delete(e);
  }
  checkQueue() {
    this.queue.forEach(async (e) => {
      const { topic: t, message: i2, opts: s } = e;
      await this.publish(t, i2, s);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(D.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(D.message_ack, (e) => {
      this.removeRequestFromQueue(e.id.toString());
    });
  }
};
var yr = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (e, t) => {
      const i2 = this.get(e);
      this.exists(e, t) || this.map.set(e, [...i2, t]);
    }, this.get = (e) => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
      if (typeof t > "u") {
        this.map.delete(e);
        return;
      }
      if (!this.map.has(e))
        return;
      const i2 = this.get(e);
      if (!this.exists(e, t))
        return;
      const s = i2.filter((n2) => n2 !== t);
      if (!s.length) {
        this.map.delete(e);
        return;
      }
      this.map.set(e, s);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var br = Object.defineProperty;
var mr = Object.defineProperties;
var fr = Object.getOwnPropertyDescriptors;
var St = Object.getOwnPropertySymbols;
var Er = Object.prototype.hasOwnProperty;
var wr = Object.prototype.propertyIsEnumerable;
var Pt = (r, e, t) => e in r ? br(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var V = (r, e) => {
  for (var t in e || (e = {}))
    Er.call(e, t) && Pt(r, t, e[t]);
  if (St)
    for (var t of St(e))
      wr.call(e, t) && Pt(r, t, e[t]);
  return r;
};
var De = (r, e) => mr(r, fr(e));
var Ot = class extends d {
  constructor(e, t) {
    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new yr(), this.events = new import_events5.EventEmitter(), this.name = yt2, this.version = bt2, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = false, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = x, this.subscribeTimeout = 1e4, this.restartInProgress = false, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (i2, s) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s } });
      try {
        const n2 = mt(s), a2 = { topic: i2, relay: n2 };
        this.pending.set(i2, a2);
        const o = await this.rpcSubscribe(i2, n2);
        return this.onSubscribe(o, a2), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i2, opts: s } }), o;
      } catch (n2) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n2), n2;
      }
    }, this.unsubscribe = async (i2, s) => {
      await this.restartToComplete(), this.isInitialized(), typeof (s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(i2, s.id, s) : await this.unsubscribeByTopic(i2, s);
    }, this.isSubscribed = async (i2) => this.topics.includes(i2) ? true : await new Promise((s, n2) => {
      const a2 = new import_time2.Watch();
      a2.start(this.pendingSubscriptionWatchLabel);
      const o = setInterval(() => {
        !this.pending.has(i2) && this.topics.includes(i2) && (clearInterval(o), a2.stop(this.pendingSubscriptionWatchLabel), s(true)), a2.elapsed(this.pendingSubscriptionWatchLabel) >= mt2 && (clearInterval(o), a2.stop(this.pendingSubscriptionWatchLabel), n2(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => false), this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.restart = async () => {
      this.restartInProgress = true, await this.restore(), await this.reset(), this.restartInProgress = false;
    }, this.relayer = e, this.logger = (0, import_logger.generateChildLogger)(t, this.name), this.clientId = "";
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(e, t) {
    let i2 = false;
    try {
      i2 = this.getSubscription(e).topic === t;
    } catch {
    }
    return i2;
  }
  onEnable() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e, t) {
    const i2 = this.topicMap.get(e);
    await Promise.all(i2.map(async (s) => await this.unsubscribeById(e, s, t)));
  }
  async unsubscribeById(e, t, i2) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i2 } });
    try {
      const s = mt(i2);
      await this.rpcUnsubscribe(e, t, s);
      const n2 = U("USER_DISCONNECTED", `${this.name}, ${e}`);
      await this.onUnsubscribe(e, t, n2), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e, id: t, opts: i2 } });
    } catch (s) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s;
    }
  }
  async rpcSubscribe(e, t) {
    const i2 = { method: yt(t.protocol).subscribe, params: { topic: e } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    try {
      await await it(this.relayer.request(i2), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(D.connection_stalled);
    }
    return Mn(e + this.clientId);
  }
  async rpcBatchSubscribe(e) {
    if (!e.length)
      return;
    const t = e[0].relay, i2 = { method: yt(t.protocol).batchSubscribe, params: { topics: e.map((s) => s.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i2 });
    try {
      return await await it(this.relayer.request(i2), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(D.connection_stalled);
    }
  }
  rpcUnsubscribe(e, t, i2) {
    const s = { method: yt(i2.protocol).unsubscribe, params: { topic: e, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s }), this.relayer.request(s);
  }
  onSubscribe(e, t) {
    this.setSubscription(e, De(V({}, t), { id: e })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e) {
    e.length && e.forEach((t) => {
      this.setSubscription(t.id, V({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e, t, i2) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, i2), await this.relayer.messages.del(e);
  }
  async setRelayerSubscriptions(e) {
    await this.relayer.core.storage.setItem(this.storageKey, e);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e, t) {
    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e, subscription: t }), this.addSubscription(e, t));
  }
  addSubscription(e, t) {
    this.subscriptions.set(e, V({}, t)), this.topicMap.set(t.topic, e), this.events.emit(C.created, t);
  }
  getSubscription(e) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e });
    const t = this.subscriptions.get(e);
    if (!t) {
      const { message: i2 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i2);
    }
    return t;
  }
  deleteSubscription(e, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e, reason: t });
    const i2 = this.getSubscription(e);
    this.subscriptions.delete(e), this.topicMap.delete(i2.topic, e), this.events.emit(C.deleted, De(V({}, i2), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(C.sync);
  }
  async reset() {
    if (this.cached.length) {
      const e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let t = 0; t < e; t++) {
        const i2 = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(i2);
      }
    }
    this.events.emit(C.resubscribed);
  }
  async restore() {
    try {
      const e = await this.getRelayerSubscriptions();
      if (typeof e > "u" || !e.length)
        return;
      if (this.subscriptions.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e);
    }
  }
  async batchSubscribe(e) {
    if (!e.length)
      return;
    const t = await this.rpcBatchSubscribe(e);
    j(t) && this.onBatchSubscribe(t.map((i2, s) => De(V({}, e[s]), { id: i2 })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const e = [];
    this.pending.forEach((t) => {
      e.push(t);
    }), await this.batchSubscribe(e);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(D.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(D.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(C.created, async (e) => {
      const t = C.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    }), this.events.on(C.deleted, async (e) => {
      const t = C.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((e) => {
      const t = setInterval(() => {
        this.restartInProgress || (clearInterval(t), e());
      }, this.pollingInterval);
    });
  }
};
var vr = Object.defineProperty;
var xt2 = Object.getOwnPropertySymbols;
var Ir = Object.prototype.hasOwnProperty;
var Cr = Object.prototype.propertyIsEnumerable;
var At2 = (r, e, t) => e in r ? vr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var Rr = (r, e) => {
  for (var t in e || (e = {}))
    Ir.call(e, t) && At2(r, t, e[t]);
  if (xt2)
    for (var t of xt2(e))
      Cr.call(e, t) && At2(r, t, e[t]);
  return r;
};
var zt2 = class extends g {
  constructor(e) {
    super(e), this.protocol = "wc", this.version = 2, this.events = new import_events5.EventEmitter(), this.name = ct2, this.transportExplicitlyClosed = false, this.initialized = false, this.connectionAttemptInProgress = false, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = false, this.request = async (t) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(t);
      } catch (i2) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(i2), i2;
      }
    }, this.onPayloadHandler = (t) => {
      this.onProviderPayload(t);
    }, this.onConnectHandler = () => {
      this.events.emit(D.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (t) => {
      this.logger.error(t), this.events.emit(D.error, t), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(P.payload, this.onPayloadHandler), this.provider.on(P.connect, this.onConnectHandler), this.provider.on(P.disconnect, this.onDisconnectHandler), this.provider.on(P.error, this.onProviderErrorHandler);
    }, this.core = e.core, this.logger = typeof e.logger < "u" && typeof e.logger != "string" ? (0, import_logger.generateChildLogger)(e.logger, this.name) : (0, import_logger.pino)((0, import_logger.getDefaultLoggerOptions)({ level: e.logger || ht })), this.messages = new Tt(this.logger, e.core), this.subscriber = new Ot(this, this.logger), this.publisher = new Dr(this, this.logger), this.relayUrl = (e == null ? void 0 : e.relayUrl) || de, this.projectId = e.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ge}...`), await this.restartTransport(ge);
    }
    this.initialized = true, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = false);
    }, gt);
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(e, t, i2) {
    this.isInitialized(), await this.publisher.publish(e, t, i2), await this.recordMessageEvent({ topic: e, message: t, publishedAt: Date.now() });
  }
  async subscribe(e, t) {
    var i2;
    this.isInitialized();
    let s = ((i2 = this.subscriber.topicMap.get(e)) == null ? void 0 : i2[0]) || "";
    return s || (await Promise.all([new Promise((n2) => {
      this.subscriber.once(C.created, (a2) => {
        a2.topic === e && n2();
      });
    }), new Promise(async (n2) => {
      s = await this.subscriber.subscribe(e, t), n2();
    })]), s);
  }
  async unsubscribe(e, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e, t);
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, this.hasExperiencedNetworkDisruption && this.connected ? await it(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(e) {
    if (this.transportExplicitlyClosed = false, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = true;
      try {
        await Promise.all([new Promise((t) => {
          if (!this.initialized)
            return t();
          this.subscriber.once(C.resubscribed, () => {
            t();
          });
        }), new Promise(async (t, i2) => {
          try {
            await it(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (s) {
            i2(s);
            return;
          }
          t();
        })]);
      } catch (t) {
        this.logger.error(t);
        const i2 = t;
        if (!this.isConnectionStalled(i2.message))
          throw t;
        this.provider.events.emit(P.disconnect);
      } finally {
        this.connectionAttemptInProgress = false, this.hasExperiencedNetworkDisruption = false;
      }
    }
  }
  async restartTransport(e) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await Zt())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(e) {
    return this.staleConnectionErrors.some((t) => e.includes(t));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new JsonRpcProvider(new esm_default(Jn({ sdkVersion: dt2, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e, useOnCloseEvent: true }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e) {
    const { topic: t, message: i2 } = e;
    await this.messages.set(t, i2);
  }
  async shouldIgnoreMessageEvent(e) {
    const { topic: t, message: i2 } = e;
    if (!i2 || i2.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${i2}`), true;
    if (!await this.subscriber.isSubscribed(t))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), true;
    const s = this.messages.has(t, i2);
    return s && this.logger.debug(`Ignoring duplicate message: ${i2}`), s;
  }
  async onProviderPayload(e) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e }), isJsonRpcRequest(e)) {
      if (!e.method.endsWith(ut2))
        return;
      const t = e.params, { topic: i2, message: s, publishedAt: n2 } = t.data, a2 = { topic: i2, message: s, publishedAt: n2 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Rr({ type: "event", event: t.id }, a2)), this.events.emit(t.id, a2), await this.acknowledgePayload(e), await this.onMessageEvent(a2);
    } else
      isJsonRpcResponse(e) && this.events.emit(D.message_ack, e);
  }
  async onMessageEvent(e) {
    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(D.message, e), await this.recordMessageEvent(e));
  }
  async acknowledgePayload(e) {
    const t = formatJsonRpcResult(e.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(P.payload, this.onPayloadHandler), this.provider.off(P.connect, this.onConnectHandler), this.provider.off(P.disconnect, this.onDisconnectHandler), this.provider.off(P.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(D.connection_stalled, () => {
      this.restartTransport().catch((t) => this.logger.error(t));
    });
    let e = await Zt();
    Xt(async (t) => {
      this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch((i2) => this.logger.error(i2)) : (this.hasExperiencedNetworkDisruption = true, await this.transportClose().catch((i2) => this.logger.error(i2))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(D.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((e) => this.logger.error(e));
    }, (0, import_time2.toMiliseconds)(lt2)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((e) => {
          const t = setInterval(() => {
            this.connected && (clearInterval(t), e());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
};
var _r = Object.defineProperty;
var Nt2 = Object.getOwnPropertySymbols;
var Tr = Object.prototype.hasOwnProperty;
var Sr = Object.prototype.propertyIsEnumerable;
var Ut = (r, e, t) => e in r ? _r(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var Lt2 = (r, e) => {
  for (var t in e || (e = {}))
    Tr.call(e, t) && Ut(r, t, e[t]);
  if (Nt2)
    for (var t of Nt2(e))
      Sr.call(e, t) && Ut(r, t, e[t]);
  return r;
};
var Ft2 = class extends p2 {
  constructor(e, t, i2, s = x, n2 = void 0) {
    super(e, t, i2, s), this.core = e, this.logger = t, this.name = i2, this.map = /* @__PURE__ */ new Map(), this.version = pt2, this.cached = [], this.initialized = false, this.storagePrefix = x, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((a2) => {
        this.getKey && a2 !== null && !w(a2) ? this.map.set(this.getKey(a2), a2) : Dt(a2) ? this.map.set(a2.id, a2) : kt(a2) && this.map.set(a2.topic, a2);
      }), this.cached = [], this.initialized = true);
    }, this.set = async (a2, o) => {
      this.isInitialized(), this.map.has(a2) ? await this.update(a2, o) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: a2, value: o }), this.map.set(a2, o), await this.persist());
    }, this.get = (a2) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: a2 }), this.getData(a2)), this.getAll = (a2) => (this.isInitialized(), a2 ? this.values.filter((o) => Object.keys(a2).every((h3) => (0, import_lodash.default)(o[h3], a2[h3]))) : this.values), this.update = async (a2, o) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: a2, update: o });
      const h3 = Lt2(Lt2({}, this.getData(a2)), o);
      this.map.set(a2, h3), await this.persist();
    }, this.delete = async (a2, o) => {
      this.isInitialized(), this.map.has(a2) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: a2, reason: o }), this.map.delete(a2), await this.persist());
    }, this.logger = (0, import_logger.generateChildLogger)(t, this.name), this.storagePrefix = s, this.getKey = n2;
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e) {
    const t = this.map.get(e);
    if (!t) {
      const { message: i2 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i2), new Error(i2);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e = await this.getDataStore();
      if (typeof e > "u" || !e.length)
        return;
      if (this.map.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var $t2 = class {
  constructor(e, t) {
    this.core = e, this.logger = t, this.name = ft2, this.version = Et, this.events = new import_events5.default(), this.initialized = false, this.storagePrefix = x, this.ignoredPayloadTypes = [_], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }, this.register = ({ methods: i2 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i2])];
    }, this.create = async () => {
      this.isInitialized();
      const i2 = Dn(), s = await this.core.crypto.setSymKey(i2), n2 = lt(import_time2.FIVE_MINUTES), a2 = { protocol: ot }, o = { topic: s, expiry: n2, relay: a2, active: false }, h3 = Nt({ protocol: this.core.protocol, version: this.core.version, topic: s, symKey: i2, relay: a2 });
      return await this.pairings.set(s, o), await this.core.relayer.subscribe(s), this.core.expirer.set(s, n2), { topic: s, uri: h3 };
    }, this.pair = async (i2) => {
      this.isInitialized(), this.isValidPair(i2);
      const { topic: s, symKey: n2, relay: a2 } = bt(i2.uri);
      let o;
      if (this.pairings.keys.includes(s) && (o = this.pairings.get(s), o.active))
        throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
      this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(n2, s), await this.core.relayer.subscribe(s, { relay: a2 }));
      const h3 = lt(import_time2.FIVE_MINUTES), u3 = { topic: s, relay: a2, expiry: h3, active: false };
      return await this.pairings.set(s, u3), this.core.expirer.set(s, h3), i2.activatePairing && await this.activate({ topic: s }), this.events.emit(B2.create, u3), u3;
    }, this.activate = async ({ topic: i2 }) => {
      this.isInitialized();
      const s = lt(import_time2.THIRTY_DAYS);
      await this.pairings.update(i2, { active: true, expiry: s }), this.core.expirer.set(i2, s);
    }, this.ping = async (i2) => {
      this.isInitialized(), await this.isValidPing(i2);
      const { topic: s } = i2;
      if (this.pairings.keys.includes(s)) {
        const n2 = await this.sendRequest(s, "wc_pairingPing", {}), { done: a2, resolve: o, reject: h3 } = st();
        this.events.once(ft("pairing_ping", n2), ({ error: u3 }) => {
          u3 ? h3(u3) : o();
        }), await a2();
      }
    }, this.updateExpiry = async ({ topic: i2, expiry: s }) => {
      this.isInitialized(), await this.pairings.update(i2, { expiry: s });
    }, this.updateMetadata = async ({ topic: i2, metadata: s }) => {
      this.isInitialized(), await this.pairings.update(i2, { peerMetadata: s });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (i2) => {
      this.isInitialized(), await this.isValidDisconnect(i2);
      const { topic: s } = i2;
      this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", U("USER_DISCONNECTED")), await this.deletePairing(s));
    }, this.sendRequest = async (i2, s, n2) => {
      const a2 = formatJsonRpcRequest(s, n2), o = await this.core.crypto.encode(i2, a2), h3 = F[s].req;
      return this.core.history.set(i2, a2), this.core.relayer.publish(i2, o, h3), a2.id;
    }, this.sendResult = async (i2, s, n2) => {
      const a2 = formatJsonRpcResult(i2, n2), o = await this.core.crypto.encode(s, a2), h3 = await this.core.history.get(s, i2), u3 = F[h3.request.method].res;
      await this.core.relayer.publish(s, o, u3), await this.core.history.resolve(a2);
    }, this.sendError = async (i2, s, n2) => {
      const a2 = formatJsonRpcError(i2, n2), o = await this.core.crypto.encode(s, a2), h3 = await this.core.history.get(s, i2), u3 = F[h3.request.method] ? F[h3.request.method].res : F.unregistered_method.res;
      await this.core.relayer.publish(s, o, u3), await this.core.history.resolve(a2);
    }, this.deletePairing = async (i2, s) => {
      await this.core.relayer.unsubscribe(i2), await Promise.all([this.pairings.delete(i2, U("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i2), s ? Promise.resolve() : this.core.expirer.del(i2)]);
    }, this.cleanup = async () => {
      const i2 = this.pairings.getAll().filter((s) => dt(s.expiry));
      await Promise.all(i2.map((s) => this.deletePairing(s.topic)));
    }, this.onRelayEventRequest = (i2) => {
      const { topic: s, payload: n2 } = i2;
      switch (n2.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(s, n2);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(s, n2);
        default:
          return this.onUnknownRpcMethodRequest(s, n2);
      }
    }, this.onRelayEventResponse = async (i2) => {
      const { topic: s, payload: n2 } = i2, a2 = (await this.core.history.get(s, n2.id)).request.method;
      switch (a2) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s, n2);
        default:
          return this.onUnknownRpcMethodResponse(a2);
      }
    }, this.onPairingPingRequest = async (i2, s) => {
      const { id: n2 } = s;
      try {
        this.isValidPing({ topic: i2 }), await this.sendResult(n2, i2, true), this.events.emit(B2.ping, { id: n2, topic: i2 });
      } catch (a2) {
        await this.sendError(n2, i2, a2), this.logger.error(a2);
      }
    }, this.onPairingPingResponse = (i2, s) => {
      const { id: n2 } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(ft("pairing_ping", n2), {}) : isJsonRpcError(s) && this.events.emit(ft("pairing_ping", n2), { error: s.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (i2, s) => {
      const { id: n2 } = s;
      try {
        this.isValidDisconnect({ topic: i2 }), await this.deletePairing(i2), this.events.emit(B2.delete, { id: n2, topic: i2 });
      } catch (a2) {
        await this.sendError(n2, i2, a2), this.logger.error(a2);
      }
    }, this.onUnknownRpcMethodRequest = async (i2, s) => {
      const { id: n2, method: a2 } = s;
      try {
        if (this.registeredMethods.includes(a2))
          return;
        const o = U("WC_METHOD_UNSUPPORTED", a2);
        await this.sendError(n2, i2, o), this.logger.error(o);
      } catch (o) {
        await this.sendError(n2, i2, o), this.logger.error(o);
      }
    }, this.onUnknownRpcMethodResponse = (i2) => {
      this.registeredMethods.includes(i2) || this.logger.error(U("WC_METHOD_UNSUPPORTED", i2));
    }, this.isValidPair = (i2) => {
      if (!xt(i2)) {
        const { message: s } = N("MISSING_OR_INVALID", `pair() params: ${i2}`);
        throw new Error(s);
      }
      if (!jt(i2.uri)) {
        const { message: s } = N("MISSING_OR_INVALID", `pair() uri: ${i2.uri}`);
        throw new Error(s);
      }
    }, this.isValidPing = async (i2) => {
      if (!xt(i2)) {
        const { message: n2 } = N("MISSING_OR_INVALID", `ping() params: ${i2}`);
        throw new Error(n2);
      }
      const { topic: s } = i2;
      await this.isValidPairingTopic(s);
    }, this.isValidDisconnect = async (i2) => {
      if (!xt(i2)) {
        const { message: n2 } = N("MISSING_OR_INVALID", `disconnect() params: ${i2}`);
        throw new Error(n2);
      }
      const { topic: s } = i2;
      await this.isValidPairingTopic(s);
    }, this.isValidPairingTopic = async (i2) => {
      if (!h(i2, false)) {
        const { message: s } = N("MISSING_OR_INVALID", `pairing topic should be a string: ${i2}`);
        throw new Error(s);
      }
      if (!this.pairings.keys.includes(i2)) {
        const { message: s } = N("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i2}`);
        throw new Error(s);
      }
      if (dt(this.pairings.get(i2).expiry)) {
        await this.deletePairing(i2);
        const { message: s } = N("EXPIRED", `pairing topic: ${i2}`);
        throw new Error(s);
      }
    }, this.core = e, this.logger = (0, import_logger.generateChildLogger)(t, this.name), this.pairings = new Ft2(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(D.message, async (e) => {
      const { topic: t, message: i2 } = e;
      if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i2)))
        return;
      const s = await this.core.crypto.decode(t, i2);
      try {
        isJsonRpcRequest(s) ? (this.core.history.set(t, s), this.onRelayEventRequest({ topic: t, payload: s })) : isJsonRpcResponse(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({ topic: t, payload: s }), this.core.history.delete(t, s.id));
      } catch (n2) {
        this.logger.error(n2);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(w2.expired, async (e) => {
      const { topic: t } = ut(e.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(B2.expire, { topic: t }));
    });
  }
};
var Mt2 = class extends h2 {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.records = /* @__PURE__ */ new Map(), this.events = new import_events5.EventEmitter(), this.name = wt, this.version = vt, this.cached = [], this.initialized = false, this.storagePrefix = x, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.records.set(i2.id, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.set = (i2, s, n2) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i2, request: s, chainId: n2 }), this.records.has(s.id))
        return;
      const a2 = { id: s.id, topic: i2, request: { method: s.method, params: s.params || null }, chainId: n2, expiry: lt(import_time2.THIRTY_DAYS) };
      this.records.set(a2.id, a2), this.events.emit(R.created, a2);
    }, this.resolve = async (i2) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i2 }), !this.records.has(i2.id))
        return;
      const s = await this.getRecord(i2.id);
      typeof s.response > "u" && (s.response = isJsonRpcError(i2) ? { error: i2.error } : { result: i2.result }, this.records.set(s.id, s), this.events.emit(R.updated, s));
    }, this.get = async (i2, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i2, id: s }), await this.getRecord(s)), this.delete = (i2, s) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s }), this.values.forEach((n2) => {
        if (n2.topic === i2) {
          if (typeof s < "u" && n2.id !== s)
            return;
          this.records.delete(n2.id), this.events.emit(R.deleted, n2);
        }
      });
    }, this.exists = async (i2, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === i2 : false), this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.logger = (0, import_logger.generateChildLogger)(t, this.name);
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u")
        return;
      const i2 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e.push(i2);
    }), e;
  }
  async setJsonRpcRecords(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e) {
    this.isInitialized();
    const t = this.records.get(e);
    if (!t) {
      const { message: i2 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw new Error(i2);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(R.sync);
  }
  async restore() {
    try {
      const e = await this.getJsonRpcRecords();
      if (typeof e > "u" || !e.length)
        return;
      if (this.records.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e);
    }
  }
  registerEventListeners() {
    this.events.on(R.created, (e) => {
      const t = R.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(R.updated, (e) => {
      const t = R.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.events.on(R.deleted, (e) => {
      const t = R.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e }), this.persist();
    }), this.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((e) => {
        (0, import_time2.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id));
      });
    } catch (e) {
      this.logger.warn(e);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var kt2 = class extends E {
  constructor(e, t) {
    super(e, t), this.core = e, this.logger = t, this.expirations = /* @__PURE__ */ new Map(), this.events = new import_events5.EventEmitter(), this.name = It, this.version = Ct, this.cached = [], this.initialized = false, this.storagePrefix = x, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i2) => this.expirations.set(i2.target, i2)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }, this.has = (i2) => {
      try {
        const s = this.formatTarget(i2);
        return typeof this.getExpiration(s) < "u";
      } catch {
        return false;
      }
    }, this.set = (i2, s) => {
      this.isInitialized();
      const n2 = this.formatTarget(i2), a2 = { target: n2, expiry: s };
      this.expirations.set(n2, a2), this.checkExpiry(n2, a2), this.events.emit(w2.created, { target: n2, expiration: a2 });
    }, this.get = (i2) => {
      this.isInitialized();
      const s = this.formatTarget(i2);
      return this.getExpiration(s);
    }, this.del = (i2) => {
      if (this.isInitialized(), this.has(i2)) {
        const s = this.formatTarget(i2), n2 = this.getExpiration(s);
        this.expirations.delete(s), this.events.emit(w2.deleted, { target: s, expiration: n2 });
      }
    }, this.on = (i2, s) => {
      this.events.on(i2, s);
    }, this.once = (i2, s) => {
      this.events.once(i2, s);
    }, this.off = (i2, s) => {
      this.events.off(i2, s);
    }, this.removeListener = (i2, s) => {
      this.events.removeListener(i2, s);
    }, this.logger = (0, import_logger.generateChildLogger)(t, this.name);
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e) {
    if (typeof e == "string")
      return ct(e);
    if (typeof e == "number")
      return at(e);
    const { message: t } = N("UNKNOWN_TYPE", `Target type: ${typeof e}`);
    throw new Error(t);
  }
  async setExpirations(e) {
    await this.core.storage.setItem(this.storageKey, e);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(w2.sync);
  }
  async restore() {
    try {
      const e = await this.getExpirations();
      if (typeof e > "u" || !e.length)
        return;
      if (this.expirations.size) {
        const { message: t } = N("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e);
    }
  }
  getExpiration(e) {
    const t = this.expirations.get(e);
    if (!t) {
      const { message: i2 } = N("NO_MATCHING_KEY", `${this.name}: ${e}`);
      throw this.logger.error(i2), new Error(i2);
    }
    return t;
  }
  checkExpiry(e, t) {
    const { expiry: i2 } = t;
    (0, import_time2.toMiliseconds)(i2) - Date.now() <= 0 && this.expire(e, t);
  }
  expire(e, t) {
    this.expirations.delete(e), this.events.emit(w2.expired, { target: e, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e));
  }
  registerEventListeners() {
    this.core.heartbeat.on(import_heartbeat.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(w2.created, (e) => {
      const t = w2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(w2.expired, (e) => {
      const t = w2.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    }), this.events.on(w2.deleted, (e) => {
      const t = w2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e } = N("NOT_INITIALIZED", this.name);
      throw new Error(e);
    }
  }
};
var Kt2 = class extends y {
  constructor(e, t) {
    super(e, t), this.projectId = e, this.logger = t, this.name = Q, this.initialized = false, this.queue = [], this.verifyDisabled = false, this.init = async (i2) => {
      if (this.verifyDisabled || H() || !q())
        return;
      const s = (i2 == null ? void 0 : i2.verifyUrl) || Z;
      this.verifyUrl !== s && this.removeIframe(), this.verifyUrl = s;
      try {
        await this.createIframe();
      } catch (n2) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n2);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = pe;
        try {
          await this.createIframe();
        } catch (n2) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(n2), this.verifyDisabled = true;
        }
      }
    }, this.register = async (i2) => {
      this.initialized ? this.sendPost(i2.attestationId) : (this.addToQueue(i2.attestationId), await this.init());
    }, this.resolve = async (i2) => {
      if (this.isDevEnv)
        return "";
      const s = (i2 == null ? void 0 : i2.verifyUrl) || Z;
      let n2;
      try {
        n2 = await this.fetchAttestation(i2.attestationId, s);
      } catch (a2) {
        this.logger.info(`failed to resolve attestation: ${i2.attestationId} from url: ${s}`), this.logger.info(a2), n2 = await this.fetchAttestation(i2.attestationId, pe);
      }
      return n2;
    }, this.fetchAttestation = async (i2, s) => {
      this.logger.info(`resolving attestation: ${i2} from url: ${s}`);
      const n2 = this.startAbortTimer(import_time2.ONE_SECOND * 2), a2 = await fetch(`${s}/attestation/${i2}`, { signal: this.abortController.signal });
      return clearTimeout(n2), a2.status === 200 ? await a2.json() : void 0;
    }, this.addToQueue = (i2) => {
      this.queue.push(i2);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((i2) => this.sendPost(i2)), this.queue = []);
    }, this.sendPost = (i2) => {
      var s;
      try {
        if (!this.iframe)
          return;
        (s = this.iframe.contentWindow) == null || s.postMessage(i2, "*"), this.logger.info(`postMessage sent: ${i2} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let i2;
      const s = (n2) => {
        n2.data === "verify_ready" && (this.initialized = true, this.processQueue(), window.removeEventListener("message", s), i2());
      };
      await Promise.race([new Promise((n2) => {
        if (document.getElementById(Q))
          return n2();
        window.addEventListener("message", s);
        const a2 = document.createElement("iframe");
        a2.id = Q, a2.src = `${this.verifyUrl}/${this.projectId}`, a2.style.display = "none", document.body.append(a2), this.iframe = a2, i2 = n2;
      }), new Promise((n2, a2) => setTimeout(() => {
        window.removeEventListener("message", s), a2("verify iframe load timeout");
      }, (0, import_time2.toMiliseconds)(import_time2.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = false);
    }, this.logger = (0, import_logger.generateChildLogger)(t, this.name), this.verifyUrl = Z, this.abortController = new AbortController(), this.isDevEnv = te() && process.env.IS_VITEST;
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  startAbortTimer(e) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time2.toMiliseconds)(e));
  }
};
var Pr = Object.defineProperty;
var Bt2 = Object.getOwnPropertySymbols;
var Or = Object.prototype.hasOwnProperty;
var xr = Object.prototype.propertyIsEnumerable;
var Vt2 = (r, e, t) => e in r ? Pr(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var qt2 = (r, e) => {
  for (var t in e || (e = {}))
    Or.call(e, t) && Vt2(r, t, e[t]);
  if (Bt2)
    for (var t of Bt2(e))
      xr.call(e, t) && Vt2(r, t, e[t]);
  return r;
};
var ee2 = class _ee extends n {
  constructor(e) {
    super(e), this.protocol = ue, this.version = We, this.name = X, this.events = new import_events5.EventEmitter(), this.initialized = false, this.on = (i2, s) => this.events.on(i2, s), this.once = (i2, s) => this.events.once(i2, s), this.off = (i2, s) => this.events.off(i2, s), this.removeListener = (i2, s) => this.events.removeListener(i2, s), this.projectId = e == null ? void 0 : e.projectId, this.relayUrl = (e == null ? void 0 : e.relayUrl) || de;
    const t = typeof (e == null ? void 0 : e.logger) < "u" && typeof (e == null ? void 0 : e.logger) != "string" ? e.logger : (0, import_logger.pino)((0, import_logger.getDefaultLoggerOptions)({ level: (e == null ? void 0 : e.logger) || Xe2.logger }));
    this.logger = (0, import_logger.generateChildLogger)(t, this.name), this.heartbeat = new import_heartbeat.HeartBeat(), this.crypto = new _t(this, this.logger, e == null ? void 0 : e.keychain), this.history = new Mt2(this, this.logger), this.expirer = new kt2(this, this.logger), this.storage = e != null && e.storage ? e.storage : new import_keyvaluestorage.default(qt2(qt2({}, Qe), e == null ? void 0 : e.storageOptions)), this.relayer = new zt2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new $t2(this, this.logger), this.verify = new Kt2(this.projectId || "", this.logger);
  }
  static async init(e) {
    const t = new _ee(e);
    await t.initialize();
    const i2 = await t.crypto.getClientId();
    return await t.storage.setItem(Dt2, i2), t;
  }
  get context() {
    return (0, import_logger.getLoggerContext)(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e;
    }
  }
};
var Ar = ee2;

// node_modules/@walletconnect/sign-client/dist/index.es.js
var import_logger2 = __toESM(require_cjs4());
var import_events6 = __toESM(require_events());
var import_time3 = __toESM(require_cjs());
var X2 = "wc";
var F2 = 2;
var H2 = "client";
var G = `${X2}@${F2}:${H2}:`;
var M = { name: H2, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.com" };
var W2 = "WALLETCONNECT_DEEPLINK_CHOICE";
var ne = "proposal";
var oe3 = "Proposal expired";
var ae = "session";
var A = import_time3.SEVEN_DAYS;
var ce2 = "engine";
var V2 = { wc_sessionPropose: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1101 } }, wc_sessionSettle: { req: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time3.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time3.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time3.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time3.THIRTY_SECONDS, prompt: false, tag: 1114 }, res: { ttl: import_time3.THIRTY_SECONDS, prompt: false, tag: 1115 } } };
var U3 = { min: import_time3.FIVE_MINUTES, max: import_time3.SEVEN_DAYS };
var I = { idle: "IDLE", active: "ACTIVE" };
var le2 = "request";
var pe2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var ns2 = Object.defineProperty;
var os2 = Object.defineProperties;
var as2 = Object.getOwnPropertyDescriptors;
var he2 = Object.getOwnPropertySymbols;
var cs2 = Object.prototype.hasOwnProperty;
var ls2 = Object.prototype.propertyIsEnumerable;
var de2 = (m2, r, e) => r in m2 ? ns2(m2, r, { enumerable: true, configurable: true, writable: true, value: e }) : m2[r] = e;
var g3 = (m2, r) => {
  for (var e in r || (r = {}))
    cs2.call(r, e) && de2(m2, e, r[e]);
  if (he2)
    for (var e of he2(r))
      ls2.call(r, e) && de2(m2, e, r[e]);
  return m2;
};
var b2 = (m2, r) => os2(m2, as2(r));
var ps2 = class extends S2 {
  constructor(r) {
    super(r), this.name = ce2, this.events = new import_events6.default(), this.initialized = false, this.ignoredPayloadTypes = [_], this.requestQueue = { state: I.idle, queue: [] }, this.sessionRequestQueue = { state: I.idle, queue: [] }, this.requestQueueDelay = import_time3.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(V2) }), this.initialized = true, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay)));
    }, this.connect = async (e) => {
      await this.isInitialized();
      const s = b2(g3({}, e), { requiredNamespaces: e.requiredNamespaces || {}, optionalNamespaces: e.optionalNamespaces || {} });
      await this.isValidConnect(s);
      const { pairingTopic: t, requiredNamespaces: i2, optionalNamespaces: n2, sessionProperties: o, relays: a2 } = s;
      let c2 = t, p4, d2 = false;
      if (c2 && (d2 = this.client.core.pairing.pairings.get(c2).active), !c2 || !d2) {
        const { topic: v2, uri: S4 } = await this.client.core.pairing.create();
        c2 = v2, p4 = S4;
      }
      const h3 = await this.client.core.crypto.generateKeyPair(), R2 = g3({ requiredNamespaces: i2, optionalNamespaces: n2, relays: a2 ?? [{ protocol: ot }], proposer: { publicKey: h3, metadata: this.client.metadata } }, o && { sessionProperties: o }), { reject: w3, resolve: T, done: K2 } = st(import_time3.FIVE_MINUTES, oe3);
      if (this.events.once(ft("session_connect"), async ({ error: v2, session: S4 }) => {
        if (v2)
          w3(v2);
        else if (S4) {
          S4.self.publicKey = h3;
          const B3 = b2(g3({}, S4), { requiredNamespaces: S4.requiredNamespaces, optionalNamespaces: S4.optionalNamespaces });
          await this.client.session.set(S4.topic, B3), await this.setExpiry(S4.topic, S4.expiry), c2 && await this.client.core.pairing.updateMetadata({ topic: c2, metadata: S4.peer.metadata }), T(B3);
        }
      }), !c2) {
        const { message: v2 } = N("NO_MATCHING_KEY", `connect() pairing topic: ${c2}`);
        throw new Error(v2);
      }
      const L3 = await this.sendRequest({ topic: c2, method: "wc_sessionPropose", params: R2 }), ue2 = lt(import_time3.FIVE_MINUTES);
      return await this.setProposal(L3, g3({ id: L3, expiry: ue2 }, R2)), { uri: p4, approval: K2 };
    }, this.pair = async (e) => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async (e) => {
      await this.isInitialized(), await this.isValidApprove(e);
      const { id: s, relayProtocol: t, namespaces: i2, sessionProperties: n2 } = e, o = this.client.proposal.get(s);
      let { pairingTopic: a2, proposer: c2, requiredNamespaces: p4, optionalNamespaces: d2 } = o;
      a2 = a2 || "", B(p4) || (p4 = At(i2, "approve()"));
      const h3 = await this.client.core.crypto.generateKeyPair(), R2 = c2.publicKey, w3 = await this.client.core.crypto.generateSharedKey(h3, R2);
      a2 && s && (await this.client.core.pairing.updateMetadata({ topic: a2, metadata: c2.metadata }), await this.sendResult({ id: s, topic: a2, result: { relay: { protocol: t ?? "irn" }, responderPublicKey: h3 } }), await this.client.proposal.delete(s, U("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: a2 }));
      const T = g3({ relay: { protocol: t ?? "irn" }, namespaces: i2, requiredNamespaces: p4, optionalNamespaces: d2, pairingTopic: a2, controller: { publicKey: h3, metadata: this.client.metadata }, expiry: lt(A) }, n2 && { sessionProperties: n2 });
      await this.client.core.relayer.subscribe(w3), await this.sendRequest({ topic: w3, method: "wc_sessionSettle", params: T, throwOnFailedPublish: true });
      const K2 = b2(g3({}, T), { topic: w3, pairingTopic: a2, acknowledged: false, self: T.controller, peer: { publicKey: c2.publicKey, metadata: c2.metadata }, controller: h3 });
      return await this.client.session.set(w3, K2), await this.setExpiry(w3, lt(A)), { topic: w3, acknowledged: () => new Promise((L3) => setTimeout(() => L3(this.client.session.get(w3)), 500)) };
    }, this.reject = async (e) => {
      await this.isInitialized(), await this.isValidReject(e);
      const { id: s, reason: t } = e, { pairingTopic: i2 } = this.client.proposal.get(s);
      i2 && (await this.sendError(s, i2, t), await this.client.proposal.delete(s, U("USER_DISCONNECTED")));
    }, this.update = async (e) => {
      await this.isInitialized(), await this.isValidUpdate(e);
      const { topic: s, namespaces: t } = e, i2 = await this.sendRequest({ topic: s, method: "wc_sessionUpdate", params: { namespaces: t } }), { done: n2, resolve: o, reject: a2 } = st();
      return this.events.once(ft("session_update", i2), ({ error: c2 }) => {
        c2 ? a2(c2) : o();
      }), await this.client.session.update(s, { namespaces: t }), { acknowledged: n2 };
    }, this.extend = async (e) => {
      await this.isInitialized(), await this.isValidExtend(e);
      const { topic: s } = e, t = await this.sendRequest({ topic: s, method: "wc_sessionExtend", params: {} }), { done: i2, resolve: n2, reject: o } = st();
      return this.events.once(ft("session_extend", t), ({ error: a2 }) => {
        a2 ? o(a2) : n2();
      }), await this.setExpiry(s, lt(A)), { acknowledged: i2 };
    }, this.request = async (e) => {
      await this.isInitialized(), await this.isValidRequest(e);
      const { chainId: s, request: t, topic: i2, expiry: n2 } = e, o = payloadId(), { done: a2, resolve: c2, reject: p4 } = st(n2);
      return this.events.once(ft("session_request", o), ({ error: d2, result: h3 }) => {
        d2 ? p4(d2) : c2(h3);
      }), await Promise.all([new Promise(async (d2) => {
        await this.sendRequest({ clientRpcId: o, topic: i2, method: "wc_sessionRequest", params: { request: t, chainId: s }, expiry: n2, throwOnFailedPublish: true }).catch((h3) => p4(h3)), this.client.events.emit("session_request_sent", { topic: i2, request: t, chainId: s, id: o }), d2();
      }), new Promise(async (d2) => {
        const h3 = await this.client.core.storage.getItem(W2);
        pt({ id: o, topic: i2, wcDeepLink: h3 }), d2();
      }), a2()]).then((d2) => d2[2]);
    }, this.respond = async (e) => {
      await this.isInitialized(), await this.isValidRespond(e);
      const { topic: s, response: t } = e, { id: i2 } = t;
      isJsonRpcResult(t) ? await this.sendResult({ id: i2, topic: s, result: t.result, throwOnFailedPublish: true }) : isJsonRpcError(t) && await this.sendError(i2, s, t.error), this.cleanupAfterResponse(e);
    }, this.ping = async (e) => {
      await this.isInitialized(), await this.isValidPing(e);
      const { topic: s } = e;
      if (this.client.session.keys.includes(s)) {
        const t = await this.sendRequest({ topic: s, method: "wc_sessionPing", params: {} }), { done: i2, resolve: n2, reject: o } = st();
        this.events.once(ft("session_ping", t), ({ error: a2 }) => {
          a2 ? o(a2) : n2();
        }), await i2();
      } else
        this.client.core.pairing.pairings.keys.includes(s) && await this.client.core.pairing.ping({ topic: s });
    }, this.emit = async (e) => {
      await this.isInitialized(), await this.isValidEmit(e);
      const { topic: s, event: t, chainId: i2 } = e;
      await this.sendRequest({ topic: s, method: "wc_sessionEvent", params: { event: t, chainId: i2 } });
    }, this.disconnect = async (e) => {
      await this.isInitialized(), await this.isValidDisconnect(e);
      const { topic: s } = e;
      this.client.session.keys.includes(s) ? (await this.sendRequest({ topic: s, method: "wc_sessionDelete", params: U("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession(s)) : await this.client.core.pairing.disconnect({ topic: s });
    }, this.find = (e) => (this.isInitialized(), this.client.session.getAll().filter((s) => $t(s, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (e) => {
      if (e.pairingTopic)
        try {
          const s = this.client.core.pairing.pairings.get(e.pairingTopic), t = this.client.core.pairing.pairings.getAll().filter((i2) => {
            var n2, o;
            return ((n2 = i2.peerMetadata) == null ? void 0 : n2.url) && ((o = i2.peerMetadata) == null ? void 0 : o.url) === e.peer.metadata.url && i2.topic && i2.topic !== s.topic;
          });
          if (t.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${t.length} duplicate pairing(s)`), await Promise.all(t.map((i2) => this.client.core.pairing.disconnect({ topic: i2.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (s) {
          this.client.logger.error(s);
        }
    }, this.deleteSession = async (e, s) => {
      const { self: t } = this.client.session.get(e);
      await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, U("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(t.publicKey) && await this.client.core.crypto.deleteKeyPair(t.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), s || this.client.core.expirer.del(e), this.client.core.storage.removeItem(W2).catch((i2) => this.client.logger.warn(i2));
    }, this.deleteProposal = async (e, s) => {
      await Promise.all([this.client.proposal.delete(e, U("USER_DISCONNECTED")), s ? Promise.resolve() : this.client.core.expirer.del(e)]);
    }, this.deletePendingSessionRequest = async (e, s, t = false) => {
      await Promise.all([this.client.pendingRequest.delete(e, s), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i2) => i2.id !== e), t && (this.sessionRequestQueue.state = I.idle);
    }, this.setExpiry = async (e, s) => {
      this.client.session.keys.includes(e) && await this.client.session.update(e, { expiry: s }), this.client.core.expirer.set(e, s);
    }, this.setProposal = async (e, s) => {
      await this.client.proposal.set(e, s), this.client.core.expirer.set(e, s.expiry);
    }, this.setPendingSessionRequest = async (e) => {
      const s = V2.wc_sessionRequest.req.ttl, { id: t, topic: i2, params: n2, verifyContext: o } = e;
      await this.client.pendingRequest.set(t, { id: t, topic: i2, params: n2, verifyContext: o }), s && this.client.core.expirer.set(t, lt(s));
    }, this.sendRequest = async (e) => {
      const { topic: s, method: t, params: i2, expiry: n2, relayRpcId: o, clientRpcId: a2, throwOnFailedPublish: c2 } = e, p4 = formatJsonRpcRequest(t, i2, a2);
      if (q() && pe2.includes(t)) {
        const R2 = Mn(JSON.stringify(p4));
        this.client.core.verify.register({ attestationId: R2 });
      }
      const d2 = await this.client.core.crypto.encode(s, p4), h3 = V2[t].req;
      return n2 && (h3.ttl = n2), o && (h3.id = o), this.client.core.history.set(s, p4), c2 ? (h3.internal = b2(g3({}, h3.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s, d2, h3)) : this.client.core.relayer.publish(s, d2, h3).catch((R2) => this.client.logger.error(R2)), p4.id;
    }, this.sendResult = async (e) => {
      const { id: s, topic: t, result: i2, throwOnFailedPublish: n2 } = e, o = formatJsonRpcResult(s, i2), a2 = await this.client.core.crypto.encode(t, o), c2 = await this.client.core.history.get(t, s), p4 = V2[c2.request.method].res;
      n2 ? (p4.internal = b2(g3({}, p4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(t, a2, p4)) : this.client.core.relayer.publish(t, a2, p4).catch((d2) => this.client.logger.error(d2)), await this.client.core.history.resolve(o);
    }, this.sendError = async (e, s, t) => {
      const i2 = formatJsonRpcError(e, t), n2 = await this.client.core.crypto.encode(s, i2), o = await this.client.core.history.get(s, e), a2 = V2[o.request.method].res;
      this.client.core.relayer.publish(s, n2, a2), await this.client.core.history.resolve(i2);
    }, this.cleanup = async () => {
      const e = [], s = [];
      this.client.session.getAll().forEach((t) => {
        dt(t.expiry) && e.push(t.topic);
      }), this.client.proposal.getAll().forEach((t) => {
        dt(t.expiry) && s.push(t.id);
      }), await Promise.all([...e.map((t) => this.deleteSession(t)), ...s.map((t) => this.deleteProposal(t))]);
    }, this.onRelayEventRequest = async (e) => {
      this.requestQueue.queue.push(e), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === I.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = I.active;
        const e = this.requestQueue.queue.shift();
        if (e)
          try {
            this.processRequest(e), await new Promise((s) => setTimeout(s, 300));
          } catch (s) {
            this.client.logger.warn(s);
          }
      }
      this.requestQueue.state = I.idle;
    }, this.processRequest = (e) => {
      const { topic: s, payload: t } = e, i2 = t.method;
      switch (i2) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(s, t);
        case "wc_sessionPing":
          return this.onSessionPingRequest(s, t);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequest(s, t);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(s, t);
        default:
          return this.client.logger.info(`Unsupported request method ${i2}`);
      }
    }, this.onRelayEventResponse = async (e) => {
      const { topic: s, payload: t } = e, i2 = (await this.client.core.history.get(s, t.id)).request.method;
      switch (i2) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(s, t);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(s, t);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(s, t);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(s, t);
        case "wc_sessionPing":
          return this.onSessionPingResponse(s, t);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(s, t);
        default:
          return this.client.logger.info(`Unsupported response method ${i2}`);
      }
    }, this.onRelayEventUnknownPayload = (e) => {
      const { topic: s } = e, { message: t } = N("MISSING_OR_INVALID", `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(t);
    }, this.onSessionProposeRequest = async (e, s) => {
      const { params: t, id: i2 } = s;
      try {
        this.isValidConnect(g3({}, s.params));
        const n2 = lt(import_time3.FIVE_MINUTES), o = g3({ id: i2, pairingTopic: e, expiry: n2 }, t);
        await this.setProposal(i2, o);
        const a2 = Mn(JSON.stringify(s)), c2 = await this.getVerifyContext(a2, o.proposer.metadata);
        this.client.events.emit("session_proposal", { id: i2, params: o, verifyContext: c2 });
      } catch (n2) {
        await this.sendError(i2, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionProposeResponse = async (e, s) => {
      const { id: t } = s;
      if (isJsonRpcResult(s)) {
        const { result: i2 } = s;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: i2 });
        const n2 = this.client.proposal.get(t);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n2 });
        const o = n2.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: o });
        const a2 = i2.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: a2 });
        const c2 = await this.client.core.crypto.generateSharedKey(o, a2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: c2 });
        const p4 = await this.client.core.relayer.subscribe(c2);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: p4 }), await this.client.core.pairing.activate({ topic: e });
      } else
        isJsonRpcError(s) && (await this.client.proposal.delete(t, U("USER_DISCONNECTED")), this.events.emit(ft("session_connect"), { error: s.error }));
    }, this.onSessionSettleRequest = async (e, s) => {
      const { id: t, params: i2 } = s;
      try {
        this.isValidSessionSettleRequest(i2);
        const { relay: n2, controller: o, expiry: a2, namespaces: c2, requiredNamespaces: p4, optionalNamespaces: d2, sessionProperties: h3, pairingTopic: R2 } = s.params, w3 = g3({ topic: e, relay: n2, expiry: a2, namespaces: c2, acknowledged: true, pairingTopic: R2, requiredNamespaces: p4, optionalNamespaces: d2, controller: o.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: o.publicKey, metadata: o.metadata } }, h3 && { sessionProperties: h3 });
        await this.sendResult({ id: s.id, topic: e, result: true }), this.events.emit(ft("session_connect"), { session: w3 }), this.cleanupDuplicatePairings(w3);
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionSettleResponse = async (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? (await this.client.session.update(e, { acknowledged: true }), this.events.emit(ft("session_approve", t), {})) : isJsonRpcError(s) && (await this.client.session.delete(e, U("USER_DISCONNECTED")), this.events.emit(ft("session_approve", t), { error: s.error }));
    }, this.onSessionUpdateRequest = async (e, s) => {
      const { params: t, id: i2 } = s;
      try {
        const n2 = `${e}_session_update`, o = er.get(n2);
        if (o && this.isRequestOutOfSync(o, i2)) {
          this.client.logger.info(`Discarding out of sync request - ${i2}`);
          return;
        }
        this.isValidUpdate(g3({ topic: e }, t)), await this.client.session.update(e, { namespaces: t.namespaces }), await this.sendResult({ id: i2, topic: e, result: true }), this.client.events.emit("session_update", { id: i2, topic: e, params: t }), er.set(n2, i2);
      } catch (n2) {
        await this.sendError(i2, e, n2), this.client.logger.error(n2);
      }
    }, this.isRequestOutOfSync = (e, s) => parseInt(s.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(ft("session_update", t), {}) : isJsonRpcError(s) && this.events.emit(ft("session_update", t), { error: s.error });
    }, this.onSessionExtendRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidExtend({ topic: e }), await this.setExpiry(e, lt(A)), await this.sendResult({ id: t, topic: e, result: true }), this.client.events.emit("session_extend", { id: t, topic: e });
      } catch (i2) {
        await this.sendError(t, e, i2), this.client.logger.error(i2);
      }
    }, this.onSessionExtendResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(ft("session_extend", t), {}) : isJsonRpcError(s) && this.events.emit(ft("session_extend", t), { error: s.error });
    }, this.onSessionPingRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidPing({ topic: e }), await this.sendResult({ id: t, topic: e, result: true }), this.client.events.emit("session_ping", { id: t, topic: e });
      } catch (i2) {
        await this.sendError(t, e, i2), this.client.logger.error(i2);
      }
    }, this.onSessionPingResponse = (e, s) => {
      const { id: t } = s;
      setTimeout(() => {
        isJsonRpcResult(s) ? this.events.emit(ft("session_ping", t), {}) : isJsonRpcError(s) && this.events.emit(ft("session_ping", t), { error: s.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (e, s) => {
      const { id: t } = s;
      try {
        this.isValidDisconnect({ topic: e, reason: s.params }), await Promise.all([new Promise((i2) => {
          this.client.core.relayer.once(D.publish, async () => {
            i2(await this.deleteSession(e));
          });
        }), this.sendResult({ id: t, topic: e, result: true })]), this.client.events.emit("session_delete", { id: t, topic: e });
      } catch (i2) {
        this.client.logger.error(i2);
      }
    }, this.onSessionRequest = async (e, s) => {
      const { id: t, params: i2 } = s;
      try {
        this.isValidRequest(g3({ topic: e }, i2));
        const n2 = Mn(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", i2, t))), o = this.client.session.get(e), a2 = await this.getVerifyContext(n2, o.peer.metadata), c2 = { id: t, topic: e, params: i2, verifyContext: a2 };
        await this.setPendingSessionRequest(c2), this.addSessionRequestToSessionRequestQueue(c2), this.processSessionRequestQueue();
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.onSessionRequestResponse = (e, s) => {
      const { id: t } = s;
      isJsonRpcResult(s) ? this.events.emit(ft("session_request", t), { result: s.result }) : isJsonRpcError(s) && this.events.emit(ft("session_request", t), { error: s.error });
    }, this.onSessionEventRequest = async (e, s) => {
      const { id: t, params: i2 } = s;
      try {
        const n2 = `${e}_session_event_${i2.event.name}`, o = er.get(n2);
        if (o && this.isRequestOutOfSync(o, t)) {
          this.client.logger.info(`Discarding out of sync request - ${t}`);
          return;
        }
        this.isValidEmit(g3({ topic: e }, i2)), this.client.events.emit("session_event", { id: t, topic: e, params: i2 }), er.set(n2, t);
      } catch (n2) {
        await this.sendError(t, e, n2), this.client.logger.error(n2);
      }
    }, this.addSessionRequestToSessionRequestQueue = (e) => {
      this.sessionRequestQueue.queue.push(e);
    }, this.cleanupAfterResponse = (e) => {
      this.deletePendingSessionRequest(e.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = I.idle, this.processSessionRequestQueue();
      }, (0, import_time3.toMiliseconds)(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === I.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const e = this.sessionRequestQueue.queue[0];
      if (!e) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = I.active, this.client.events.emit("session_request", e);
      } catch (s) {
        this.client.logger.error(s);
      }
    }, this.onPairingCreated = (e) => {
      if (e.active)
        return;
      const s = this.client.proposal.getAll().find((t) => t.pairingTopic === e.topic);
      s && this.onSessionProposeRequest(e.topic, formatJsonRpcRequest("wc_sessionPropose", { requiredNamespaces: s.requiredNamespaces, optionalNamespaces: s.optionalNamespaces, relays: s.relays, proposer: s.proposer }, s.id));
    }, this.isValidConnect = async (e) => {
      if (!xt(e)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
        throw new Error(a2);
      }
      const { pairingTopic: s, requiredNamespaces: t, optionalNamespaces: i2, sessionProperties: n2, relays: o } = e;
      if (w(s) || await this.isValidPairingTopic(s), !Kt(o, true)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `connect() relays: ${o}`);
        throw new Error(a2);
      }
      !w(t) && B(t) !== 0 && this.validateNamespaces(t, "requiredNamespaces"), !w(i2) && B(i2) !== 0 && this.validateNamespaces(i2, "optionalNamespaces"), w(n2) || this.validateSessionProps(n2, "sessionProperties");
    }, this.validateNamespaces = (e, s) => {
      const t = Mt(e, "connect()", s);
      if (t)
        throw new Error(t.message);
    }, this.isValidApprove = async (e) => {
      if (!xt(e))
        throw new Error(N("MISSING_OR_INVALID", `approve() params: ${e}`).message);
      const { id: s, namespaces: t, relayProtocol: i2, sessionProperties: n2 } = e;
      await this.isValidProposalId(s);
      const o = this.client.proposal.get(s), a2 = cn(t, "approve()");
      if (a2)
        throw new Error(a2.message);
      const c2 = un(o.requiredNamespaces, t, "approve()");
      if (c2)
        throw new Error(c2.message);
      if (!h(i2, true)) {
        const { message: p4 } = N("MISSING_OR_INVALID", `approve() relayProtocol: ${i2}`);
        throw new Error(p4);
      }
      w(n2) || this.validateSessionProps(n2, "sessionProperties");
    }, this.isValidReject = async (e) => {
      if (!xt(e)) {
        const { message: i2 } = N("MISSING_OR_INVALID", `reject() params: ${e}`);
        throw new Error(i2);
      }
      const { id: s, reason: t } = e;
      if (await this.isValidProposalId(s), !Ft(t)) {
        const { message: i2 } = N("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(t)}`);
        throw new Error(i2);
      }
    }, this.isValidSessionSettleRequest = (e) => {
      if (!xt(e)) {
        const { message: c2 } = N("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
        throw new Error(c2);
      }
      const { relay: s, controller: t, namespaces: i2, expiry: n2 } = e;
      if (!an(s)) {
        const { message: c2 } = N("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(c2);
      }
      const o = Vt(t, "onSessionSettleRequest()");
      if (o)
        throw new Error(o.message);
      const a2 = cn(i2, "onSessionSettleRequest()");
      if (a2)
        throw new Error(a2.message);
      if (dt(n2)) {
        const { message: c2 } = N("EXPIRED", "onSessionSettleRequest()");
        throw new Error(c2);
      }
    }, this.isValidUpdate = async (e) => {
      if (!xt(e)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `update() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: s, namespaces: t } = e;
      await this.isValidSessionTopic(s);
      const i2 = this.client.session.get(s), n2 = cn(t, "update()");
      if (n2)
        throw new Error(n2.message);
      const o = un(i2.requiredNamespaces, t, "update()");
      if (o)
        throw new Error(o.message);
    }, this.isValidExtend = async (e) => {
      if (!xt(e)) {
        const { message: t } = N("MISSING_OR_INVALID", `extend() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionTopic(s);
    }, this.isValidRequest = async (e) => {
      if (!xt(e)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `request() params: ${e}`);
        throw new Error(a2);
      }
      const { topic: s, request: t, chainId: i2, expiry: n2 } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: o } = this.client.session.get(s);
      if (!Gt(o, i2)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `request() chainId: ${i2}`);
        throw new Error(a2);
      }
      if (!Ht(t)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `request() ${JSON.stringify(t)}`);
        throw new Error(a2);
      }
      if (!Wt(o, i2, t.method)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `request() method: ${t.method}`);
        throw new Error(a2);
      }
      if (n2 && !Qt(n2, U3)) {
        const { message: a2 } = N("MISSING_OR_INVALID", `request() expiry: ${n2}. Expiry must be a number (in seconds) between ${U3.min} and ${U3.max}`);
        throw new Error(a2);
      }
    }, this.isValidRespond = async (e) => {
      if (!xt(e)) {
        const { message: i2 } = N("MISSING_OR_INVALID", `respond() params: ${e}`);
        throw new Error(i2);
      }
      const { topic: s, response: t } = e;
      if (await this.isValidSessionTopic(s), !qt(t)) {
        const { message: i2 } = N("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(t)}`);
        throw new Error(i2);
      }
    }, this.isValidPing = async (e) => {
      if (!xt(e)) {
        const { message: t } = N("MISSING_OR_INVALID", `ping() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.isValidEmit = async (e) => {
      if (!xt(e)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() params: ${e}`);
        throw new Error(o);
      }
      const { topic: s, event: t, chainId: i2 } = e;
      await this.isValidSessionTopic(s);
      const { namespaces: n2 } = this.client.session.get(s);
      if (!Gt(n2, i2)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() chainId: ${i2}`);
        throw new Error(o);
      }
      if (!Bt(t)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
      if (!zt(n2, i2, t.name)) {
        const { message: o } = N("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(t)}`);
        throw new Error(o);
      }
    }, this.isValidDisconnect = async (e) => {
      if (!xt(e)) {
        const { message: t } = N("MISSING_OR_INVALID", `disconnect() params: ${e}`);
        throw new Error(t);
      }
      const { topic: s } = e;
      await this.isValidSessionOrPairingTopic(s);
    }, this.getVerifyContext = async (e, s) => {
      const t = { verified: { verifyUrl: s.verifyUrl || Z, validation: "UNKNOWN", origin: s.url || "" } };
      try {
        const i2 = await this.client.core.verify.resolve({ attestationId: e, verifyUrl: s.verifyUrl });
        i2 && (t.verified.origin = i2.origin, t.verified.isScam = i2.isScam, t.verified.validation = i2.origin === new URL(s.url).origin ? "VALID" : "INVALID");
      } catch (i2) {
        this.client.logger.info(i2);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(t)}`), t;
    }, this.validateSessionProps = (e, s) => {
      Object.values(e).forEach((t) => {
        if (!h(t, false)) {
          const { message: i2 } = N("MISSING_OR_INVALID", `${s} must be in Record<string, string> format. Received: ${JSON.stringify(t)}`);
          throw new Error(i2);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: r } = N("NOT_INITIALIZED", this.name);
      throw new Error(r);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(D.message, async (r) => {
      const { topic: e, message: s } = r;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s)))
        return;
      const t = await this.client.core.crypto.decode(e, s);
      try {
        isJsonRpcRequest(t) ? (this.client.core.history.set(e, t), this.onRelayEventRequest({ topic: e, payload: t })) : isJsonRpcResponse(t) ? (await this.client.core.history.resolve(t), await this.onRelayEventResponse({ topic: e, payload: t }), this.client.core.history.delete(e, t.id)) : this.onRelayEventUnknownPayload({ topic: e, payload: t });
      } catch (i2) {
        this.client.logger.error(i2);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(w2.expired, async (r) => {
      const { topic: e, id: s } = ut(r.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, N("EXPIRED"), true);
      e ? this.client.session.keys.includes(e) && (await this.deleteSession(e, true), this.client.events.emit("session_expire", { topic: e })) : s && (await this.deleteProposal(s, true), this.client.events.emit("proposal_expire", { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(B2.create, (r) => this.onPairingCreated(r));
  }
  isValidPairingTopic(r) {
    if (!h(r, false)) {
      const { message: e } = N("MISSING_OR_INVALID", `pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.core.pairing.pairings.keys.includes(r)) {
      const { message: e } = N("NO_MATCHING_KEY", `pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (dt(this.client.core.pairing.pairings.get(r).expiry)) {
      const { message: e } = N("EXPIRED", `pairing topic: ${r}`);
      throw new Error(e);
    }
  }
  async isValidSessionTopic(r) {
    if (!h(r, false)) {
      const { message: e } = N("MISSING_OR_INVALID", `session topic should be a string: ${r}`);
      throw new Error(e);
    }
    if (!this.client.session.keys.includes(r)) {
      const { message: e } = N("NO_MATCHING_KEY", `session topic doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (dt(this.client.session.get(r).expiry)) {
      await this.deleteSession(r);
      const { message: e } = N("EXPIRED", `session topic: ${r}`);
      throw new Error(e);
    }
  }
  async isValidSessionOrPairingTopic(r) {
    if (this.client.session.keys.includes(r))
      await this.isValidSessionTopic(r);
    else if (this.client.core.pairing.pairings.keys.includes(r))
      this.isValidPairingTopic(r);
    else if (h(r, false)) {
      const { message: e } = N("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${r}`);
      throw new Error(e);
    } else {
      const { message: e } = N("MISSING_OR_INVALID", `session or pairing topic should be a string: ${r}`);
      throw new Error(e);
    }
  }
  async isValidProposalId(r) {
    if (!Lt(r)) {
      const { message: e } = N("MISSING_OR_INVALID", `proposal id should be a number: ${r}`);
      throw new Error(e);
    }
    if (!this.client.proposal.keys.includes(r)) {
      const { message: e } = N("NO_MATCHING_KEY", `proposal id doesn't exist: ${r}`);
      throw new Error(e);
    }
    if (dt(this.client.proposal.get(r).expiry)) {
      await this.deleteProposal(r);
      const { message: e } = N("EXPIRED", `proposal id: ${r}`);
      throw new Error(e);
    }
  }
};
var hs2 = class extends Ft2 {
  constructor(r, e) {
    super(r, e, ne, G), this.core = r, this.logger = e;
  }
};
var ds2 = class extends Ft2 {
  constructor(r, e) {
    super(r, e, ae, G), this.core = r, this.logger = e;
  }
};
var us2 = class extends Ft2 {
  constructor(r, e) {
    super(r, e, le2, G, (s) => s.id), this.core = r, this.logger = e;
  }
};
var Q2 = class _Q extends b {
  constructor(r) {
    super(r), this.protocol = X2, this.version = F2, this.name = M.name, this.events = new import_events6.EventEmitter(), this.on = (s, t) => this.events.on(s, t), this.once = (s, t) => this.events.once(s, t), this.off = (s, t) => this.events.off(s, t), this.removeListener = (s, t) => this.events.removeListener(s, t), this.removeAllListeners = (s) => this.events.removeAllListeners(s), this.connect = async (s) => {
      try {
        return await this.engine.connect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.pair = async (s) => {
      try {
        return await this.engine.pair(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.approve = async (s) => {
      try {
        return await this.engine.approve(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.reject = async (s) => {
      try {
        return await this.engine.reject(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.update = async (s) => {
      try {
        return await this.engine.update(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.extend = async (s) => {
      try {
        return await this.engine.extend(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.request = async (s) => {
      try {
        return await this.engine.request(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.respond = async (s) => {
      try {
        return await this.engine.respond(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.ping = async (s) => {
      try {
        return await this.engine.ping(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.emit = async (s) => {
      try {
        return await this.engine.emit(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.disconnect = async (s) => {
      try {
        return await this.engine.disconnect(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.find = (s) => {
      try {
        return this.engine.find(s);
      } catch (t) {
        throw this.logger.error(t.message), t;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (s) {
        throw this.logger.error(s.message), s;
      }
    }, this.name = (r == null ? void 0 : r.name) || M.name, this.metadata = (r == null ? void 0 : r.metadata) || zn();
    const e = typeof (r == null ? void 0 : r.logger) < "u" && typeof (r == null ? void 0 : r.logger) != "string" ? r.logger : (0, import_logger2.pino)((0, import_logger2.getDefaultLoggerOptions)({ level: (r == null ? void 0 : r.logger) || M.logger }));
    this.core = (r == null ? void 0 : r.core) || new Ar(r), this.logger = (0, import_logger2.generateChildLogger)(e, this.name), this.session = new ds2(this.core, this.logger), this.proposal = new hs2(this.core, this.logger), this.pendingRequest = new us2(this.core, this.logger), this.engine = new ps2(this);
  }
  static async init(r) {
    const e = new _Q(r);
    return await e.initialize(), e;
  }
  get context() {
    return (0, import_logger2.getLoggerContext)(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (r) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(r.message), r;
    }
  }
};

// node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_logger3 = __toESM(require_cjs4());

// node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/http.js
var import_events7 = __toESM(require_events());
var import_cross_fetch = __toESM(require_browser_ponyfill());
var DEFAULT_HTTP_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json"
};
var DEFAULT_HTTP_METHOD = "POST";
var DEFAULT_FETCH_OPTS = {
  headers: DEFAULT_HTTP_HEADERS,
  method: DEFAULT_HTTP_METHOD
};
var EVENT_EMITTER_MAX_LISTENERS_DEFAULT2 = 10;
var HttpConnection = class {
  constructor(url, disableProviderPing = false) {
    this.url = url;
    this.disableProviderPing = disableProviderPing;
    this.events = new import_events7.EventEmitter();
    this.isAvailable = false;
    this.registering = false;
    if (!isHttpUrl(url)) {
      throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
    }
    this.url = url;
    this.disableProviderPing = disableProviderPing;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(event, listener) {
    this.events.on(event, listener);
  }
  once(event, listener) {
    this.events.once(event, listener);
  }
  off(event, listener) {
    this.events.off(event, listener);
  }
  removeListener(event, listener) {
    this.events.removeListener(event, listener);
  }
  async open(url = this.url) {
    await this.register(url);
  }
  async close() {
    if (!this.isAvailable) {
      throw new Error("Connection already closed");
    }
    this.onClose();
  }
  async send(payload, context) {
    if (!this.isAvailable) {
      await this.register();
    }
    try {
      const body = safeJsonStringify(payload);
      const res = await (0, import_cross_fetch.default)(this.url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
      const data = await res.json();
      this.onPayload({ data });
    } catch (e) {
      this.onError(payload.id, e);
    }
  }
  async register(url = this.url) {
    if (!isHttpUrl(url)) {
      throw new Error(`Provided URL is not compatible with HTTP connection: ${url}`);
    }
    if (this.registering) {
      const currentMaxListeners = this.events.getMaxListeners();
      if (this.events.listenerCount("register_error") >= currentMaxListeners || this.events.listenerCount("open") >= currentMaxListeners) {
        this.events.setMaxListeners(currentMaxListeners + 1);
      }
      return new Promise((resolve, reject) => {
        this.events.once("register_error", (error) => {
          this.resetMaxListeners();
          reject(error);
        });
        this.events.once("open", () => {
          this.resetMaxListeners();
          if (typeof this.isAvailable === "undefined") {
            return reject(new Error("HTTP connection is missing or invalid"));
          }
          resolve();
        });
      });
    }
    this.url = url;
    this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const body = safeJsonStringify({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await (0, import_cross_fetch.default)(url, Object.assign(Object.assign({}, DEFAULT_FETCH_OPTS), { body }));
      }
      this.onOpen();
    } catch (e) {
      const error = this.parseError(e);
      this.events.emit("register_error", error);
      this.onClose();
      throw error;
    }
  }
  onOpen() {
    this.isAvailable = true;
    this.registering = false;
    this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false;
    this.registering = false;
    this.events.emit("close");
  }
  onPayload(e) {
    if (typeof e.data === "undefined")
      return;
    const payload = typeof e.data === "string" ? safeJsonParse(e.data) : e.data;
    this.events.emit("payload", payload);
  }
  onError(id, e) {
    const error = this.parseError(e);
    const message = error.message || error.toString();
    const payload = formatJsonRpcError(id, message);
    this.events.emit("payload", payload);
  }
  parseError(e, url = this.url) {
    return parseConnectionError(e, url, "HTTP");
  }
  resetMaxListeners() {
    if (this.events.getMaxListeners() > EVENT_EMITTER_MAX_LISTENERS_DEFAULT2) {
      this.events.setMaxListeners(EVENT_EMITTER_MAX_LISTENERS_DEFAULT2);
    }
  }
};
var http_default = HttpConnection;

// node_modules/@walletconnect/jsonrpc-http-connection/dist/esm/index.js
var esm_default2 = http_default;

// node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events8 = __toESM(require_events());
var Ia = "error";
var Ug = "wss://relay.walletconnect.com";
var Wg = "wc";
var Fg = "universal_provider";
var xa = `${Wg}@2:${Fg}:`;
var Mg = "https://rpc.walletconnect.com/v1/";
var at3 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var ge2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var Ui = { exports: {} };
(function(C2, u3) {
  (function() {
    var i2, d2 = "4.17.21", w3 = 200, T = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", U5 = "Expected a function", En = "Invalid `variable` option passed into `_.template`", zt3 = "__lodash_hash_undefined__", pr = 500, At3 = "__lodash_placeholder__", Ln2 = 1, Fn2 = 2, Ct2 = 4, It2 = 1, ve2 = 2, vn = 1, ot2 = 2, qi2 = 4, Dn2 = 8, xt3 = 16, Nn = 32, Et2 = 64, Mn2 = 128, Kt3 = 256, dr = 512, La = 30, Da = "...", Na = 800, Ha = 16, Bi2 = 1, $a = 2, Ua = 3, ft3 = 1 / 0, Vn2 = 9007199254740991, Wa = 17976931348623157e292, _e3 = 0 / 0, Hn = 4294967295, Fa = Hn - 1, Ma = Hn >>> 1, qa = [["ary", Mn2], ["bind", vn], ["bindKey", ot2], ["curry", Dn2], ["curryRight", xt3], ["flip", dr], ["partial", Nn], ["partialRight", Et2], ["rearg", Kt3]], yt3 = "[object Arguments]", me = "[object Array]", Ba = "[object AsyncFunction]", Yt2 = "[object Boolean]", Zt2 = "[object Date]", Ga = "[object DOMException]", we = "[object Error]", Pe = "[object Function]", Gi2 = "[object GeneratorFunction]", yn = "[object Map]", Jt = "[object Number]", za = "[object Null]", qn = "[object Object]", zi2 = "[object Promise]", Ka = "[object Proxy]", Xt2 = "[object RegExp]", Sn = "[object Set]", Qt2 = "[object String]", Ae = "[object Symbol]", Ya = "[object Undefined]", Vt3 = "[object WeakMap]", Za = "[object WeakSet]", kt3 = "[object ArrayBuffer]", St2 = "[object DataView]", gr = "[object Float32Array]", vr2 = "[object Float64Array]", _r2 = "[object Int8Array]", mr2 = "[object Int16Array]", wr2 = "[object Int32Array]", Pr2 = "[object Uint8Array]", Ar2 = "[object Uint8ClampedArray]", Cr2 = "[object Uint16Array]", Ir2 = "[object Uint32Array]", Ja = /\b__p \+= '';/g, Xa = /\b(__p \+=) '' \+/g, Qa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ki2 = /&(?:amp|lt|gt|quot|#39);/g, Yi2 = /[&<>"']/g, Va = RegExp(Ki2.source), ka = RegExp(Yi2.source), ja = /<%-([\s\S]+?)%>/g, no = /<%([\s\S]+?)%>/g, Zi2 = /<%=([\s\S]+?)%>/g, to = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, eo = /^\w*$/, ro = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xr2 = /[\\^$.*+?()[\]{}|]/g, io = RegExp(xr2.source), Er2 = /^\s+/, so = /\s/, uo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ao = /\{\n\/\* \[wrapped with (.+)\] \*/, oo = /,? & /, fo = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, co = /[()=,{}\[\]\/\s]/, ho = /\\(\\)?/g, lo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ji2 = /\w*$/, po = /^[-+]0x[0-9a-f]+$/i, go = /^0b[01]+$/i, vo = /^\[object .+?Constructor\]$/, _o = /^0o[0-7]+$/i, mo = /^(?:0|[1-9]\d*)$/, wo = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Ce2 = /($^)/, Po = /['\n\r\u2028\u2029\\]/g, Ie2 = "\\ud800-\\udfff", Ao = "\\u0300-\\u036f", Co = "\\ufe20-\\ufe2f", Io = "\\u20d0-\\u20ff", Xi2 = Ao + Co + Io, Qi2 = "\\u2700-\\u27bf", Vi2 = "a-z\\xdf-\\xf6\\xf8-\\xff", xo = "\\xac\\xb1\\xd7\\xf7", Eo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", yo = "\\u2000-\\u206f", So = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ki2 = "A-Z\\xc0-\\xd6\\xd8-\\xde", ji2 = "\\ufe0e\\ufe0f", ns3 = xo + Eo + yo + So, yr2 = "['’]", Oo = "[" + Ie2 + "]", ts2 = "[" + ns3 + "]", xe = "[" + Xi2 + "]", es2 = "\\d+", Ro = "[" + Qi2 + "]", rs2 = "[" + Vi2 + "]", is2 = "[^" + Ie2 + ns3 + es2 + Qi2 + Vi2 + ki2 + "]", Sr2 = "\\ud83c[\\udffb-\\udfff]", bo = "(?:" + xe + "|" + Sr2 + ")", ss2 = "[^" + Ie2 + "]", Or2 = "(?:\\ud83c[\\udde6-\\uddff]){2}", Rr2 = "[\\ud800-\\udbff][\\udc00-\\udfff]", Ot2 = "[" + ki2 + "]", us3 = "\\u200d", as3 = "(?:" + rs2 + "|" + is2 + ")", To = "(?:" + Ot2 + "|" + is2 + ")", os3 = "(?:" + yr2 + "(?:d|ll|m|re|s|t|ve))?", fs2 = "(?:" + yr2 + "(?:D|LL|M|RE|S|T|VE))?", cs3 = bo + "?", hs3 = "[" + ji2 + "]?", Lo = "(?:" + us3 + "(?:" + [ss2, Or2, Rr2].join("|") + ")" + hs3 + cs3 + ")*", Do = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", No = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", ls3 = hs3 + cs3 + Lo, Ho = "(?:" + [Ro, Or2, Rr2].join("|") + ")" + ls3, $o = "(?:" + [ss2 + xe + "?", xe, Or2, Rr2, Oo].join("|") + ")", Uo = RegExp(yr2, "g"), Wo = RegExp(xe, "g"), br2 = RegExp(Sr2 + "(?=" + Sr2 + ")|" + $o + ls3, "g"), Fo = RegExp([Ot2 + "?" + rs2 + "+" + os3 + "(?=" + [ts2, Ot2, "$"].join("|") + ")", To + "+" + fs2 + "(?=" + [ts2, Ot2 + as3, "$"].join("|") + ")", Ot2 + "?" + as3 + "+" + os3, Ot2 + "+" + fs2, No, Do, es2, Ho].join("|"), "g"), Mo = RegExp("[" + us3 + Ie2 + Xi2 + ji2 + "]"), qo = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Bo = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Go = -1, B3 = {};
    B3[gr] = B3[vr2] = B3[_r2] = B3[mr2] = B3[wr2] = B3[Pr2] = B3[Ar2] = B3[Cr2] = B3[Ir2] = true, B3[yt3] = B3[me] = B3[kt3] = B3[Yt2] = B3[St2] = B3[Zt2] = B3[we] = B3[Pe] = B3[yn] = B3[Jt] = B3[qn] = B3[Xt2] = B3[Sn] = B3[Qt2] = B3[Vt3] = false;
    var q3 = {};
    q3[yt3] = q3[me] = q3[kt3] = q3[St2] = q3[Yt2] = q3[Zt2] = q3[gr] = q3[vr2] = q3[_r2] = q3[mr2] = q3[wr2] = q3[yn] = q3[Jt] = q3[qn] = q3[Xt2] = q3[Sn] = q3[Qt2] = q3[Ae] = q3[Pr2] = q3[Ar2] = q3[Cr2] = q3[Ir2] = true, q3[we] = q3[Pe] = q3[Vt3] = false;
    var zo = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, Ko = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Yo = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Zo = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Jo = parseFloat, Xo = parseInt, ps3 = typeof ge2 == "object" && ge2 && ge2.Object === Object && ge2, Qo = typeof self == "object" && self && self.Object === Object && self, k = ps3 || Qo || Function("return this")(), Tr2 = u3 && !u3.nodeType && u3, ct3 = Tr2 && true && C2 && !C2.nodeType && C2, ds3 = ct3 && ct3.exports === Tr2, Lr = ds3 && ps3.process, _n = function() {
      try {
        var h3 = ct3 && ct3.require && ct3.require("util").types;
        return h3 || Lr && Lr.binding && Lr.binding("util");
      } catch {
      }
    }(), gs2 = _n && _n.isArrayBuffer, vs2 = _n && _n.isDate, _s2 = _n && _n.isMap, ms2 = _n && _n.isRegExp, ws2 = _n && _n.isSet, Ps2 = _n && _n.isTypedArray;
    function cn2(h3, g5, p4) {
      switch (p4.length) {
        case 0:
          return h3.call(g5);
        case 1:
          return h3.call(g5, p4[0]);
        case 2:
          return h3.call(g5, p4[0], p4[1]);
        case 3:
          return h3.call(g5, p4[0], p4[1], p4[2]);
      }
      return h3.apply(g5, p4);
    }
    function Vo(h3, g5, p4, A2) {
      for (var S4 = -1, $3 = h3 == null ? 0 : h3.length; ++S4 < $3; ) {
        var X3 = h3[S4];
        g5(A2, X3, p4(X3), h3);
      }
      return A2;
    }
    function mn(h3, g5) {
      for (var p4 = -1, A2 = h3 == null ? 0 : h3.length; ++p4 < A2 && g5(h3[p4], p4, h3) !== false; )
        ;
      return h3;
    }
    function ko(h3, g5) {
      for (var p4 = h3 == null ? 0 : h3.length; p4-- && g5(h3[p4], p4, h3) !== false; )
        ;
      return h3;
    }
    function As2(h3, g5) {
      for (var p4 = -1, A2 = h3 == null ? 0 : h3.length; ++p4 < A2; )
        if (!g5(h3[p4], p4, h3))
          return false;
      return true;
    }
    function kn2(h3, g5) {
      for (var p4 = -1, A2 = h3 == null ? 0 : h3.length, S4 = 0, $3 = []; ++p4 < A2; ) {
        var X3 = h3[p4];
        g5(X3, p4, h3) && ($3[S4++] = X3);
      }
      return $3;
    }
    function Ee2(h3, g5) {
      var p4 = h3 == null ? 0 : h3.length;
      return !!p4 && Rt2(h3, g5, 0) > -1;
    }
    function Dr2(h3, g5, p4) {
      for (var A2 = -1, S4 = h3 == null ? 0 : h3.length; ++A2 < S4; )
        if (p4(g5, h3[A2]))
          return true;
      return false;
    }
    function G3(h3, g5) {
      for (var p4 = -1, A2 = h3 == null ? 0 : h3.length, S4 = Array(A2); ++p4 < A2; )
        S4[p4] = g5(h3[p4], p4, h3);
      return S4;
    }
    function jn2(h3, g5) {
      for (var p4 = -1, A2 = g5.length, S4 = h3.length; ++p4 < A2; )
        h3[S4 + p4] = g5[p4];
      return h3;
    }
    function Nr(h3, g5, p4, A2) {
      var S4 = -1, $3 = h3 == null ? 0 : h3.length;
      for (A2 && $3 && (p4 = h3[++S4]); ++S4 < $3; )
        p4 = g5(p4, h3[S4], S4, h3);
      return p4;
    }
    function jo(h3, g5, p4, A2) {
      var S4 = h3 == null ? 0 : h3.length;
      for (A2 && S4 && (p4 = h3[--S4]); S4--; )
        p4 = g5(p4, h3[S4], S4, h3);
      return p4;
    }
    function Hr(h3, g5) {
      for (var p4 = -1, A2 = h3 == null ? 0 : h3.length; ++p4 < A2; )
        if (g5(h3[p4], p4, h3))
          return true;
      return false;
    }
    var nf = $r("length");
    function tf(h3) {
      return h3.split("");
    }
    function ef(h3) {
      return h3.match(fo) || [];
    }
    function Cs2(h3, g5, p4) {
      var A2;
      return p4(h3, function(S4, $3, X3) {
        if (g5(S4, $3, X3))
          return A2 = $3, false;
      }), A2;
    }
    function ye2(h3, g5, p4, A2) {
      for (var S4 = h3.length, $3 = p4 + (A2 ? 1 : -1); A2 ? $3-- : ++$3 < S4; )
        if (g5(h3[$3], $3, h3))
          return $3;
      return -1;
    }
    function Rt2(h3, g5, p4) {
      return g5 === g5 ? gf(h3, g5, p4) : ye2(h3, Is2, p4);
    }
    function rf(h3, g5, p4, A2) {
      for (var S4 = p4 - 1, $3 = h3.length; ++S4 < $3; )
        if (A2(h3[S4], g5))
          return S4;
      return -1;
    }
    function Is2(h3) {
      return h3 !== h3;
    }
    function xs2(h3, g5) {
      var p4 = h3 == null ? 0 : h3.length;
      return p4 ? Wr(h3, g5) / p4 : _e3;
    }
    function $r(h3) {
      return function(g5) {
        return g5 == null ? i2 : g5[h3];
      };
    }
    function Ur(h3) {
      return function(g5) {
        return h3 == null ? i2 : h3[g5];
      };
    }
    function Es2(h3, g5, p4, A2, S4) {
      return S4(h3, function($3, X3, M3) {
        p4 = A2 ? (A2 = false, $3) : g5(p4, $3, X3, M3);
      }), p4;
    }
    function sf(h3, g5) {
      var p4 = h3.length;
      for (h3.sort(g5); p4--; )
        h3[p4] = h3[p4].value;
      return h3;
    }
    function Wr(h3, g5) {
      for (var p4, A2 = -1, S4 = h3.length; ++A2 < S4; ) {
        var $3 = g5(h3[A2]);
        $3 !== i2 && (p4 = p4 === i2 ? $3 : p4 + $3);
      }
      return p4;
    }
    function Fr(h3, g5) {
      for (var p4 = -1, A2 = Array(h3); ++p4 < h3; )
        A2[p4] = g5(p4);
      return A2;
    }
    function uf(h3, g5) {
      return G3(g5, function(p4) {
        return [p4, h3[p4]];
      });
    }
    function ys2(h3) {
      return h3 && h3.slice(0, bs2(h3) + 1).replace(Er2, "");
    }
    function hn(h3) {
      return function(g5) {
        return h3(g5);
      };
    }
    function Mr(h3, g5) {
      return G3(g5, function(p4) {
        return h3[p4];
      });
    }
    function jt3(h3, g5) {
      return h3.has(g5);
    }
    function Ss2(h3, g5) {
      for (var p4 = -1, A2 = h3.length; ++p4 < A2 && Rt2(g5, h3[p4], 0) > -1; )
        ;
      return p4;
    }
    function Os2(h3, g5) {
      for (var p4 = h3.length; p4-- && Rt2(g5, h3[p4], 0) > -1; )
        ;
      return p4;
    }
    function af(h3, g5) {
      for (var p4 = h3.length, A2 = 0; p4--; )
        h3[p4] === g5 && ++A2;
      return A2;
    }
    var of = Ur(zo), ff = Ur(Ko);
    function cf(h3) {
      return "\\" + Zo[h3];
    }
    function hf(h3, g5) {
      return h3 == null ? i2 : h3[g5];
    }
    function bt3(h3) {
      return Mo.test(h3);
    }
    function lf(h3) {
      return qo.test(h3);
    }
    function pf(h3) {
      for (var g5, p4 = []; !(g5 = h3.next()).done; )
        p4.push(g5.value);
      return p4;
    }
    function qr(h3) {
      var g5 = -1, p4 = Array(h3.size);
      return h3.forEach(function(A2, S4) {
        p4[++g5] = [S4, A2];
      }), p4;
    }
    function Rs2(h3, g5) {
      return function(p4) {
        return h3(g5(p4));
      };
    }
    function nt3(h3, g5) {
      for (var p4 = -1, A2 = h3.length, S4 = 0, $3 = []; ++p4 < A2; ) {
        var X3 = h3[p4];
        (X3 === g5 || X3 === At3) && (h3[p4] = At3, $3[S4++] = p4);
      }
      return $3;
    }
    function Se(h3) {
      var g5 = -1, p4 = Array(h3.size);
      return h3.forEach(function(A2) {
        p4[++g5] = A2;
      }), p4;
    }
    function df(h3) {
      var g5 = -1, p4 = Array(h3.size);
      return h3.forEach(function(A2) {
        p4[++g5] = [A2, A2];
      }), p4;
    }
    function gf(h3, g5, p4) {
      for (var A2 = p4 - 1, S4 = h3.length; ++A2 < S4; )
        if (h3[A2] === g5)
          return A2;
      return -1;
    }
    function vf(h3, g5, p4) {
      for (var A2 = p4 + 1; A2--; )
        if (h3[A2] === g5)
          return A2;
      return A2;
    }
    function Tt2(h3) {
      return bt3(h3) ? mf(h3) : nf(h3);
    }
    function On(h3) {
      return bt3(h3) ? wf(h3) : tf(h3);
    }
    function bs2(h3) {
      for (var g5 = h3.length; g5-- && so.test(h3.charAt(g5)); )
        ;
      return g5;
    }
    var _f = Ur(Yo);
    function mf(h3) {
      for (var g5 = br2.lastIndex = 0; br2.test(h3); )
        ++g5;
      return g5;
    }
    function wf(h3) {
      return h3.match(br2) || [];
    }
    function Pf(h3) {
      return h3.match(Fo) || [];
    }
    var Af = function h3(g5) {
      g5 = g5 == null ? k : Lt3.defaults(k.Object(), g5, Lt3.pick(k, Bo));
      var p4 = g5.Array, A2 = g5.Date, S4 = g5.Error, $3 = g5.Function, X3 = g5.Math, M3 = g5.Object, Br = g5.RegExp, Cf = g5.String, wn = g5.TypeError, Oe = p4.prototype, If = $3.prototype, Dt3 = M3.prototype, Re4 = g5["__core-js_shared__"], be2 = If.toString, F3 = Dt3.hasOwnProperty, xf = 0, Ts2 = function() {
        var n2 = /[^.]+$/.exec(Re4 && Re4.keys && Re4.keys.IE_PROTO || "");
        return n2 ? "Symbol(src)_1." + n2 : "";
      }(), Te2 = Dt3.toString, Ef = be2.call(M3), yf = k._, Sf = Br("^" + be2.call(F3).replace(xr2, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Le2 = ds3 ? g5.Buffer : i2, tt2 = g5.Symbol, De2 = g5.Uint8Array, Ls2 = Le2 ? Le2.allocUnsafe : i2, Ne2 = Rs2(M3.getPrototypeOf, M3), Ds2 = M3.create, Ns2 = Dt3.propertyIsEnumerable, He2 = Oe.splice, Hs2 = tt2 ? tt2.isConcatSpreadable : i2, ne2 = tt2 ? tt2.iterator : i2, ht2 = tt2 ? tt2.toStringTag : i2, $e2 = function() {
        try {
          var n2 = vt2(M3, "defineProperty");
          return n2({}, "", {}), n2;
        } catch {
        }
      }(), Of = g5.clearTimeout !== k.clearTimeout && g5.clearTimeout, Rf = A2 && A2.now !== k.Date.now && A2.now, bf = g5.setTimeout !== k.setTimeout && g5.setTimeout, Ue2 = X3.ceil, We2 = X3.floor, Gr = M3.getOwnPropertySymbols, Tf = Le2 ? Le2.isBuffer : i2, $s2 = g5.isFinite, Lf = Oe.join, Df = Rs2(M3.keys, M3), Q4 = X3.max, nn = X3.min, Nf = A2.now, Hf = g5.parseInt, Us2 = X3.random, $f = Oe.reverse, zr = vt2(g5, "DataView"), te3 = vt2(g5, "Map"), Kr = vt2(g5, "Promise"), Nt3 = vt2(g5, "Set"), ee3 = vt2(g5, "WeakMap"), re2 = vt2(M3, "create"), Fe2 = ee3 && new ee3(), Ht2 = {}, Uf = _t2(zr), Wf = _t2(te3), Ff = _t2(Kr), Mf = _t2(Nt3), qf = _t2(ee3), Me2 = tt2 ? tt2.prototype : i2, ie2 = Me2 ? Me2.valueOf : i2, Ws2 = Me2 ? Me2.toString : i2;
      function a2(n2) {
        if (K2(n2) && !O3(n2) && !(n2 instanceof N4)) {
          if (n2 instanceof Pn)
            return n2;
          if (F3.call(n2, "__wrapped__"))
            return Fu(n2);
        }
        return new Pn(n2);
      }
      var $t3 = function() {
        function n2() {
        }
        return function(t) {
          if (!z(t))
            return {};
          if (Ds2)
            return Ds2(t);
          n2.prototype = t;
          var e = new n2();
          return n2.prototype = i2, e;
        };
      }();
      function qe2() {
      }
      function Pn(n2, t) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = i2;
      }
      a2.templateSettings = { escape: ja, evaluate: no, interpolate: Zi2, variable: "", imports: { _: a2 } }, a2.prototype = qe2.prototype, a2.prototype.constructor = a2, Pn.prototype = $t3(qe2.prototype), Pn.prototype.constructor = Pn;
      function N4(n2) {
        this.__wrapped__ = n2, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = Hn, this.__views__ = [];
      }
      function Bf() {
        var n2 = new N4(this.__wrapped__);
        return n2.__actions__ = un2(this.__actions__), n2.__dir__ = this.__dir__, n2.__filtered__ = this.__filtered__, n2.__iteratees__ = un2(this.__iteratees__), n2.__takeCount__ = this.__takeCount__, n2.__views__ = un2(this.__views__), n2;
      }
      function Gf() {
        if (this.__filtered__) {
          var n2 = new N4(this);
          n2.__dir__ = -1, n2.__filtered__ = true;
        } else
          n2 = this.clone(), n2.__dir__ *= -1;
        return n2;
      }
      function zf() {
        var n2 = this.__wrapped__.value(), t = this.__dir__, e = O3(n2), r = t < 0, s = e ? n2.length : 0, o = eh(0, s, this.__views__), f3 = o.start, c2 = o.end, l = c2 - f3, v2 = r ? c2 : f3 - 1, _3 = this.__iteratees__, m2 = _3.length, P3 = 0, I2 = nn(l, this.__takeCount__);
        if (!e || !r && s == l && I2 == l)
          return ou(n2, this.__actions__);
        var E4 = [];
        n:
          for (; l-- && P3 < I2; ) {
            v2 += t;
            for (var b4 = -1, y4 = n2[v2]; ++b4 < m2; ) {
              var D3 = _3[b4], H3 = D3.iteratee, dn = D3.type, sn = H3(y4);
              if (dn == $a)
                y4 = sn;
              else if (!sn) {
                if (dn == Bi2)
                  continue n;
                break n;
              }
            }
            E4[P3++] = y4;
          }
        return E4;
      }
      N4.prototype = $t3(qe2.prototype), N4.prototype.constructor = N4;
      function lt3(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function Kf() {
        this.__data__ = re2 ? re2(null) : {}, this.size = 0;
      }
      function Yf(n2) {
        var t = this.has(n2) && delete this.__data__[n2];
        return this.size -= t ? 1 : 0, t;
      }
      function Zf(n2) {
        var t = this.__data__;
        if (re2) {
          var e = t[n2];
          return e === zt3 ? i2 : e;
        }
        return F3.call(t, n2) ? t[n2] : i2;
      }
      function Jf(n2) {
        var t = this.__data__;
        return re2 ? t[n2] !== i2 : F3.call(t, n2);
      }
      function Xf(n2, t) {
        var e = this.__data__;
        return this.size += this.has(n2) ? 0 : 1, e[n2] = re2 && t === i2 ? zt3 : t, this;
      }
      lt3.prototype.clear = Kf, lt3.prototype.delete = Yf, lt3.prototype.get = Zf, lt3.prototype.has = Jf, lt3.prototype.set = Xf;
      function Bn(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function Qf() {
        this.__data__ = [], this.size = 0;
      }
      function Vf(n2) {
        var t = this.__data__, e = Be2(t, n2);
        if (e < 0)
          return false;
        var r = t.length - 1;
        return e == r ? t.pop() : He2.call(t, e, 1), --this.size, true;
      }
      function kf(n2) {
        var t = this.__data__, e = Be2(t, n2);
        return e < 0 ? i2 : t[e][1];
      }
      function jf(n2) {
        return Be2(this.__data__, n2) > -1;
      }
      function nc(n2, t) {
        var e = this.__data__, r = Be2(e, n2);
        return r < 0 ? (++this.size, e.push([n2, t])) : e[r][1] = t, this;
      }
      Bn.prototype.clear = Qf, Bn.prototype.delete = Vf, Bn.prototype.get = kf, Bn.prototype.has = jf, Bn.prototype.set = nc;
      function Gn(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.clear(); ++t < e; ) {
          var r = n2[t];
          this.set(r[0], r[1]);
        }
      }
      function tc() {
        this.size = 0, this.__data__ = { hash: new lt3(), map: new (te3 || Bn)(), string: new lt3() };
      }
      function ec(n2) {
        var t = nr2(this, n2).delete(n2);
        return this.size -= t ? 1 : 0, t;
      }
      function rc(n2) {
        return nr2(this, n2).get(n2);
      }
      function ic(n2) {
        return nr2(this, n2).has(n2);
      }
      function sc(n2, t) {
        var e = nr2(this, n2), r = e.size;
        return e.set(n2, t), this.size += e.size == r ? 0 : 1, this;
      }
      Gn.prototype.clear = tc, Gn.prototype.delete = ec, Gn.prototype.get = rc, Gn.prototype.has = ic, Gn.prototype.set = sc;
      function pt3(n2) {
        var t = -1, e = n2 == null ? 0 : n2.length;
        for (this.__data__ = new Gn(); ++t < e; )
          this.add(n2[t]);
      }
      function uc(n2) {
        return this.__data__.set(n2, zt3), this;
      }
      function ac(n2) {
        return this.__data__.has(n2);
      }
      pt3.prototype.add = pt3.prototype.push = uc, pt3.prototype.has = ac;
      function Rn2(n2) {
        var t = this.__data__ = new Bn(n2);
        this.size = t.size;
      }
      function oc() {
        this.__data__ = new Bn(), this.size = 0;
      }
      function fc(n2) {
        var t = this.__data__, e = t.delete(n2);
        return this.size = t.size, e;
      }
      function cc(n2) {
        return this.__data__.get(n2);
      }
      function hc(n2) {
        return this.__data__.has(n2);
      }
      function lc(n2, t) {
        var e = this.__data__;
        if (e instanceof Bn) {
          var r = e.__data__;
          if (!te3 || r.length < w3 - 1)
            return r.push([n2, t]), this.size = ++e.size, this;
          e = this.__data__ = new Gn(r);
        }
        return e.set(n2, t), this.size = e.size, this;
      }
      Rn2.prototype.clear = oc, Rn2.prototype.delete = fc, Rn2.prototype.get = cc, Rn2.prototype.has = hc, Rn2.prototype.set = lc;
      function Fs2(n2, t) {
        var e = O3(n2), r = !e && mt3(n2), s = !e && !r && ut3(n2), o = !e && !r && !s && Mt3(n2), f3 = e || r || s || o, c2 = f3 ? Fr(n2.length, Cf) : [], l = c2.length;
        for (var v2 in n2)
          (t || F3.call(n2, v2)) && !(f3 && (v2 == "length" || s && (v2 == "offset" || v2 == "parent") || o && (v2 == "buffer" || v2 == "byteLength" || v2 == "byteOffset") || Zn(v2, l))) && c2.push(v2);
        return c2;
      }
      function Ms2(n2) {
        var t = n2.length;
        return t ? n2[ei(0, t - 1)] : i2;
      }
      function pc(n2, t) {
        return tr2(un2(n2), dt3(t, 0, n2.length));
      }
      function dc(n2) {
        return tr2(un2(n2));
      }
      function Yr(n2, t, e) {
        (e !== i2 && !bn(n2[t], e) || e === i2 && !(t in n2)) && zn2(n2, t, e);
      }
      function se(n2, t, e) {
        var r = n2[t];
        (!(F3.call(n2, t) && bn(r, e)) || e === i2 && !(t in n2)) && zn2(n2, t, e);
      }
      function Be2(n2, t) {
        for (var e = n2.length; e--; )
          if (bn(n2[e][0], t))
            return e;
        return -1;
      }
      function gc(n2, t, e, r) {
        return et3(n2, function(s, o, f3) {
          t(r, s, e(s), f3);
        }), r;
      }
      function qs2(n2, t) {
        return n2 && Un(t, V3(t), n2);
      }
      function vc(n2, t) {
        return n2 && Un(t, on(t), n2);
      }
      function zn2(n2, t, e) {
        t == "__proto__" && $e2 ? $e2(n2, t, { configurable: true, enumerable: true, value: e, writable: true }) : n2[t] = e;
      }
      function Zr(n2, t) {
        for (var e = -1, r = t.length, s = p4(r), o = n2 == null; ++e < r; )
          s[e] = o ? i2 : Si(n2, t[e]);
        return s;
      }
      function dt3(n2, t, e) {
        return n2 === n2 && (e !== i2 && (n2 = n2 <= e ? n2 : e), t !== i2 && (n2 = n2 >= t ? n2 : t)), n2;
      }
      function An(n2, t, e, r, s, o) {
        var f3, c2 = t & Ln2, l = t & Fn2, v2 = t & Ct2;
        if (e && (f3 = s ? e(n2, r, s, o) : e(n2)), f3 !== i2)
          return f3;
        if (!z(n2))
          return n2;
        var _3 = O3(n2);
        if (_3) {
          if (f3 = ih(n2), !c2)
            return un2(n2, f3);
        } else {
          var m2 = tn(n2), P3 = m2 == Pe || m2 == Gi2;
          if (ut3(n2))
            return hu(n2, c2);
          if (m2 == qn || m2 == yt3 || P3 && !s) {
            if (f3 = l || P3 ? {} : bu(n2), !c2)
              return l ? Zc(n2, vc(f3, n2)) : Yc(n2, qs2(f3, n2));
          } else {
            if (!q3[m2])
              return s ? n2 : {};
            f3 = sh(n2, m2, c2);
          }
        }
        o || (o = new Rn2());
        var I2 = o.get(n2);
        if (I2)
          return I2;
        o.set(n2, f3), sa(n2) ? n2.forEach(function(y4) {
          f3.add(An(y4, t, e, y4, n2, o));
        }) : ra(n2) && n2.forEach(function(y4, D3) {
          f3.set(D3, An(y4, t, e, D3, n2, o));
        });
        var E4 = v2 ? l ? pi : li : l ? on : V3, b4 = _3 ? i2 : E4(n2);
        return mn(b4 || n2, function(y4, D3) {
          b4 && (D3 = y4, y4 = n2[D3]), se(f3, D3, An(y4, t, e, D3, n2, o));
        }), f3;
      }
      function _c(n2) {
        var t = V3(n2);
        return function(e) {
          return Bs2(e, n2, t);
        };
      }
      function Bs2(n2, t, e) {
        var r = e.length;
        if (n2 == null)
          return !r;
        for (n2 = M3(n2); r--; ) {
          var s = e[r], o = t[s], f3 = n2[s];
          if (f3 === i2 && !(s in n2) || !o(f3))
            return false;
        }
        return true;
      }
      function Gs2(n2, t, e) {
        if (typeof n2 != "function")
          throw new wn(U5);
        return le3(function() {
          n2.apply(i2, e);
        }, t);
      }
      function ue2(n2, t, e, r) {
        var s = -1, o = Ee2, f3 = true, c2 = n2.length, l = [], v2 = t.length;
        if (!c2)
          return l;
        e && (t = G3(t, hn(e))), r ? (o = Dr2, f3 = false) : t.length >= w3 && (o = jt3, f3 = false, t = new pt3(t));
        n:
          for (; ++s < c2; ) {
            var _3 = n2[s], m2 = e == null ? _3 : e(_3);
            if (_3 = r || _3 !== 0 ? _3 : 0, f3 && m2 === m2) {
              for (var P3 = v2; P3--; )
                if (t[P3] === m2)
                  continue n;
              l.push(_3);
            } else
              o(t, m2, r) || l.push(_3);
          }
        return l;
      }
      var et3 = vu($n), zs2 = vu(Xr, true);
      function mc(n2, t) {
        var e = true;
        return et3(n2, function(r, s, o) {
          return e = !!t(r, s, o), e;
        }), e;
      }
      function Ge2(n2, t, e) {
        for (var r = -1, s = n2.length; ++r < s; ) {
          var o = n2[r], f3 = t(o);
          if (f3 != null && (c2 === i2 ? f3 === f3 && !pn(f3) : e(f3, c2)))
            var c2 = f3, l = o;
        }
        return l;
      }
      function wc(n2, t, e, r) {
        var s = n2.length;
        for (e = R2(e), e < 0 && (e = -e > s ? 0 : s + e), r = r === i2 || r > s ? s : R2(r), r < 0 && (r += s), r = e > r ? 0 : aa(r); e < r; )
          n2[e++] = t;
        return n2;
      }
      function Ks2(n2, t) {
        var e = [];
        return et3(n2, function(r, s, o) {
          t(r, s, o) && e.push(r);
        }), e;
      }
      function j4(n2, t, e, r, s) {
        var o = -1, f3 = n2.length;
        for (e || (e = ah), s || (s = []); ++o < f3; ) {
          var c2 = n2[o];
          t > 0 && e(c2) ? t > 1 ? j4(c2, t - 1, e, r, s) : jn2(s, c2) : r || (s[s.length] = c2);
        }
        return s;
      }
      var Jr = _u(), Ys2 = _u(true);
      function $n(n2, t) {
        return n2 && Jr(n2, t, V3);
      }
      function Xr(n2, t) {
        return n2 && Ys2(n2, t, V3);
      }
      function ze3(n2, t) {
        return kn2(t, function(e) {
          return Jn2(n2[e]);
        });
      }
      function gt2(n2, t) {
        t = it3(t, n2);
        for (var e = 0, r = t.length; n2 != null && e < r; )
          n2 = n2[Wn(t[e++])];
        return e && e == r ? n2 : i2;
      }
      function Zs2(n2, t, e) {
        var r = t(n2);
        return O3(n2) ? r : jn2(r, e(n2));
      }
      function en(n2) {
        return n2 == null ? n2 === i2 ? Ya : za : ht2 && ht2 in M3(n2) ? th(n2) : dh(n2);
      }
      function Qr(n2, t) {
        return n2 > t;
      }
      function Pc(n2, t) {
        return n2 != null && F3.call(n2, t);
      }
      function Ac(n2, t) {
        return n2 != null && t in M3(n2);
      }
      function Cc(n2, t, e) {
        return n2 >= nn(t, e) && n2 < Q4(t, e);
      }
      function Vr(n2, t, e) {
        for (var r = e ? Dr2 : Ee2, s = n2[0].length, o = n2.length, f3 = o, c2 = p4(o), l = 1 / 0, v2 = []; f3--; ) {
          var _3 = n2[f3];
          f3 && t && (_3 = G3(_3, hn(t))), l = nn(_3.length, l), c2[f3] = !e && (t || s >= 120 && _3.length >= 120) ? new pt3(f3 && _3) : i2;
        }
        _3 = n2[0];
        var m2 = -1, P3 = c2[0];
        n:
          for (; ++m2 < s && v2.length < l; ) {
            var I2 = _3[m2], E4 = t ? t(I2) : I2;
            if (I2 = e || I2 !== 0 ? I2 : 0, !(P3 ? jt3(P3, E4) : r(v2, E4, e))) {
              for (f3 = o; --f3; ) {
                var b4 = c2[f3];
                if (!(b4 ? jt3(b4, E4) : r(n2[f3], E4, e)))
                  continue n;
              }
              P3 && P3.push(E4), v2.push(I2);
            }
          }
        return v2;
      }
      function Ic(n2, t, e, r) {
        return $n(n2, function(s, o, f3) {
          t(r, e(s), o, f3);
        }), r;
      }
      function ae2(n2, t, e) {
        t = it3(t, n2), n2 = Nu(n2, t);
        var r = n2 == null ? n2 : n2[Wn(In(t))];
        return r == null ? i2 : cn2(r, n2, e);
      }
      function Js2(n2) {
        return K2(n2) && en(n2) == yt3;
      }
      function xc(n2) {
        return K2(n2) && en(n2) == kt3;
      }
      function Ec(n2) {
        return K2(n2) && en(n2) == Zt2;
      }
      function oe4(n2, t, e, r, s) {
        return n2 === t ? true : n2 == null || t == null || !K2(n2) && !K2(t) ? n2 !== n2 && t !== t : yc(n2, t, e, r, oe4, s);
      }
      function yc(n2, t, e, r, s, o) {
        var f3 = O3(n2), c2 = O3(t), l = f3 ? me : tn(n2), v2 = c2 ? me : tn(t);
        l = l == yt3 ? qn : l, v2 = v2 == yt3 ? qn : v2;
        var _3 = l == qn, m2 = v2 == qn, P3 = l == v2;
        if (P3 && ut3(n2)) {
          if (!ut3(t))
            return false;
          f3 = true, _3 = false;
        }
        if (P3 && !_3)
          return o || (o = new Rn2()), f3 || Mt3(n2) ? Su(n2, t, e, r, s, o) : jc(n2, t, l, e, r, s, o);
        if (!(e & It2)) {
          var I2 = _3 && F3.call(n2, "__wrapped__"), E4 = m2 && F3.call(t, "__wrapped__");
          if (I2 || E4) {
            var b4 = I2 ? n2.value() : n2, y4 = E4 ? t.value() : t;
            return o || (o = new Rn2()), s(b4, y4, e, r, o);
          }
        }
        return P3 ? (o || (o = new Rn2()), nh(n2, t, e, r, s, o)) : false;
      }
      function Sc(n2) {
        return K2(n2) && tn(n2) == yn;
      }
      function kr(n2, t, e, r) {
        var s = e.length, o = s, f3 = !r;
        if (n2 == null)
          return !o;
        for (n2 = M3(n2); s--; ) {
          var c2 = e[s];
          if (f3 && c2[2] ? c2[1] !== n2[c2[0]] : !(c2[0] in n2))
            return false;
        }
        for (; ++s < o; ) {
          c2 = e[s];
          var l = c2[0], v2 = n2[l], _3 = c2[1];
          if (f3 && c2[2]) {
            if (v2 === i2 && !(l in n2))
              return false;
          } else {
            var m2 = new Rn2();
            if (r)
              var P3 = r(v2, _3, l, n2, t, m2);
            if (!(P3 === i2 ? oe4(_3, v2, It2 | ve2, r, m2) : P3))
              return false;
          }
        }
        return true;
      }
      function Xs2(n2) {
        if (!z(n2) || fh(n2))
          return false;
        var t = Jn2(n2) ? Sf : vo;
        return t.test(_t2(n2));
      }
      function Oc(n2) {
        return K2(n2) && en(n2) == Xt2;
      }
      function Rc(n2) {
        return K2(n2) && tn(n2) == Sn;
      }
      function bc(n2) {
        return K2(n2) && ar2(n2.length) && !!B3[en(n2)];
      }
      function Qs2(n2) {
        return typeof n2 == "function" ? n2 : n2 == null ? fn : typeof n2 == "object" ? O3(n2) ? js2(n2[0], n2[1]) : ks2(n2) : ma(n2);
      }
      function jr(n2) {
        if (!he3(n2))
          return Df(n2);
        var t = [];
        for (var e in M3(n2))
          F3.call(n2, e) && e != "constructor" && t.push(e);
        return t;
      }
      function Tc(n2) {
        if (!z(n2))
          return ph(n2);
        var t = he3(n2), e = [];
        for (var r in n2)
          r == "constructor" && (t || !F3.call(n2, r)) || e.push(r);
        return e;
      }
      function ni(n2, t) {
        return n2 < t;
      }
      function Vs2(n2, t) {
        var e = -1, r = an2(n2) ? p4(n2.length) : [];
        return et3(n2, function(s, o, f3) {
          r[++e] = t(s, o, f3);
        }), r;
      }
      function ks2(n2) {
        var t = gi(n2);
        return t.length == 1 && t[0][2] ? Lu(t[0][0], t[0][1]) : function(e) {
          return e === n2 || kr(e, n2, t);
        };
      }
      function js2(n2, t) {
        return _i(n2) && Tu(t) ? Lu(Wn(n2), t) : function(e) {
          var r = Si(e, n2);
          return r === i2 && r === t ? Oi(e, n2) : oe4(t, r, It2 | ve2);
        };
      }
      function Ke2(n2, t, e, r, s) {
        n2 !== t && Jr(t, function(o, f3) {
          if (s || (s = new Rn2()), z(o))
            Lc(n2, t, f3, e, Ke2, r, s);
          else {
            var c2 = r ? r(wi(n2, f3), o, f3 + "", n2, t, s) : i2;
            c2 === i2 && (c2 = o), Yr(n2, f3, c2);
          }
        }, on);
      }
      function Lc(n2, t, e, r, s, o, f3) {
        var c2 = wi(n2, e), l = wi(t, e), v2 = f3.get(l);
        if (v2) {
          Yr(n2, e, v2);
          return;
        }
        var _3 = o ? o(c2, l, e + "", n2, t, f3) : i2, m2 = _3 === i2;
        if (m2) {
          var P3 = O3(l), I2 = !P3 && ut3(l), E4 = !P3 && !I2 && Mt3(l);
          _3 = l, P3 || I2 || E4 ? O3(c2) ? _3 = c2 : Y(c2) ? _3 = un2(c2) : I2 ? (m2 = false, _3 = hu(l, true)) : E4 ? (m2 = false, _3 = lu(l, true)) : _3 = [] : pe3(l) || mt3(l) ? (_3 = c2, mt3(c2) ? _3 = oa(c2) : (!z(c2) || Jn2(c2)) && (_3 = bu(l))) : m2 = false;
        }
        m2 && (f3.set(l, _3), s(_3, l, r, o, f3), f3.delete(l)), Yr(n2, e, _3);
      }
      function nu(n2, t) {
        var e = n2.length;
        if (e)
          return t += t < 0 ? e : 0, Zn(t, e) ? n2[t] : i2;
      }
      function tu(n2, t, e) {
        t.length ? t = G3(t, function(o) {
          return O3(o) ? function(f3) {
            return gt2(f3, o.length === 1 ? o[0] : o);
          } : o;
        }) : t = [fn];
        var r = -1;
        t = G3(t, hn(x2()));
        var s = Vs2(n2, function(o, f3, c2) {
          var l = G3(t, function(v2) {
            return v2(o);
          });
          return { criteria: l, index: ++r, value: o };
        });
        return sf(s, function(o, f3) {
          return Kc(o, f3, e);
        });
      }
      function Dc(n2, t) {
        return eu(n2, t, function(e, r) {
          return Oi(n2, r);
        });
      }
      function eu(n2, t, e) {
        for (var r = -1, s = t.length, o = {}; ++r < s; ) {
          var f3 = t[r], c2 = gt2(n2, f3);
          e(c2, f3) && fe(o, it3(f3, n2), c2);
        }
        return o;
      }
      function Nc(n2) {
        return function(t) {
          return gt2(t, n2);
        };
      }
      function ti(n2, t, e, r) {
        var s = r ? rf : Rt2, o = -1, f3 = t.length, c2 = n2;
        for (n2 === t && (t = un2(t)), e && (c2 = G3(n2, hn(e))); ++o < f3; )
          for (var l = 0, v2 = t[o], _3 = e ? e(v2) : v2; (l = s(c2, _3, l, r)) > -1; )
            c2 !== n2 && He2.call(c2, l, 1), He2.call(n2, l, 1);
        return n2;
      }
      function ru(n2, t) {
        for (var e = n2 ? t.length : 0, r = e - 1; e--; ) {
          var s = t[e];
          if (e == r || s !== o) {
            var o = s;
            Zn(s) ? He2.call(n2, s, 1) : si(n2, s);
          }
        }
        return n2;
      }
      function ei(n2, t) {
        return n2 + We2(Us2() * (t - n2 + 1));
      }
      function Hc(n2, t, e, r) {
        for (var s = -1, o = Q4(Ue2((t - n2) / (e || 1)), 0), f3 = p4(o); o--; )
          f3[r ? o : ++s] = n2, n2 += e;
        return f3;
      }
      function ri(n2, t) {
        var e = "";
        if (!n2 || t < 1 || t > Vn2)
          return e;
        do
          t % 2 && (e += n2), t = We2(t / 2), t && (n2 += n2);
        while (t);
        return e;
      }
      function L3(n2, t) {
        return Pi(Du(n2, t, fn), n2 + "");
      }
      function $c(n2) {
        return Ms2(qt3(n2));
      }
      function Uc(n2, t) {
        var e = qt3(n2);
        return tr2(e, dt3(t, 0, e.length));
      }
      function fe(n2, t, e, r) {
        if (!z(n2))
          return n2;
        t = it3(t, n2);
        for (var s = -1, o = t.length, f3 = o - 1, c2 = n2; c2 != null && ++s < o; ) {
          var l = Wn(t[s]), v2 = e;
          if (l === "__proto__" || l === "constructor" || l === "prototype")
            return n2;
          if (s != f3) {
            var _3 = c2[l];
            v2 = r ? r(_3, l, c2) : i2, v2 === i2 && (v2 = z(_3) ? _3 : Zn(t[s + 1]) ? [] : {});
          }
          se(c2, l, v2), c2 = c2[l];
        }
        return n2;
      }
      var iu = Fe2 ? function(n2, t) {
        return Fe2.set(n2, t), n2;
      } : fn, Wc = $e2 ? function(n2, t) {
        return $e2(n2, "toString", { configurable: true, enumerable: false, value: bi(t), writable: true });
      } : fn;
      function Fc(n2) {
        return tr2(qt3(n2));
      }
      function Cn(n2, t, e) {
        var r = -1, s = n2.length;
        t < 0 && (t = -t > s ? 0 : s + t), e = e > s ? s : e, e < 0 && (e += s), s = t > e ? 0 : e - t >>> 0, t >>>= 0;
        for (var o = p4(s); ++r < s; )
          o[r] = n2[r + t];
        return o;
      }
      function Mc(n2, t) {
        var e;
        return et3(n2, function(r, s, o) {
          return e = t(r, s, o), !e;
        }), !!e;
      }
      function Ye3(n2, t, e) {
        var r = 0, s = n2 == null ? r : n2.length;
        if (typeof t == "number" && t === t && s <= Ma) {
          for (; r < s; ) {
            var o = r + s >>> 1, f3 = n2[o];
            f3 !== null && !pn(f3) && (e ? f3 <= t : f3 < t) ? r = o + 1 : s = o;
          }
          return s;
        }
        return ii(n2, t, fn, e);
      }
      function ii(n2, t, e, r) {
        var s = 0, o = n2 == null ? 0 : n2.length;
        if (o === 0)
          return 0;
        t = e(t);
        for (var f3 = t !== t, c2 = t === null, l = pn(t), v2 = t === i2; s < o; ) {
          var _3 = We2((s + o) / 2), m2 = e(n2[_3]), P3 = m2 !== i2, I2 = m2 === null, E4 = m2 === m2, b4 = pn(m2);
          if (f3)
            var y4 = r || E4;
          else
            v2 ? y4 = E4 && (r || P3) : c2 ? y4 = E4 && P3 && (r || !I2) : l ? y4 = E4 && P3 && !I2 && (r || !b4) : I2 || b4 ? y4 = false : y4 = r ? m2 <= t : m2 < t;
          y4 ? s = _3 + 1 : o = _3;
        }
        return nn(o, Fa);
      }
      function su(n2, t) {
        for (var e = -1, r = n2.length, s = 0, o = []; ++e < r; ) {
          var f3 = n2[e], c2 = t ? t(f3) : f3;
          if (!e || !bn(c2, l)) {
            var l = c2;
            o[s++] = f3 === 0 ? 0 : f3;
          }
        }
        return o;
      }
      function uu(n2) {
        return typeof n2 == "number" ? n2 : pn(n2) ? _e3 : +n2;
      }
      function ln(n2) {
        if (typeof n2 == "string")
          return n2;
        if (O3(n2))
          return G3(n2, ln) + "";
        if (pn(n2))
          return Ws2 ? Ws2.call(n2) : "";
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ft3 ? "-0" : t;
      }
      function rt2(n2, t, e) {
        var r = -1, s = Ee2, o = n2.length, f3 = true, c2 = [], l = c2;
        if (e)
          f3 = false, s = Dr2;
        else if (o >= w3) {
          var v2 = t ? null : Vc(n2);
          if (v2)
            return Se(v2);
          f3 = false, s = jt3, l = new pt3();
        } else
          l = t ? [] : c2;
        n:
          for (; ++r < o; ) {
            var _3 = n2[r], m2 = t ? t(_3) : _3;
            if (_3 = e || _3 !== 0 ? _3 : 0, f3 && m2 === m2) {
              for (var P3 = l.length; P3--; )
                if (l[P3] === m2)
                  continue n;
              t && l.push(m2), c2.push(_3);
            } else
              s(l, m2, e) || (l !== c2 && l.push(m2), c2.push(_3));
          }
        return c2;
      }
      function si(n2, t) {
        return t = it3(t, n2), n2 = Nu(n2, t), n2 == null || delete n2[Wn(In(t))];
      }
      function au(n2, t, e, r) {
        return fe(n2, t, e(gt2(n2, t)), r);
      }
      function Ze2(n2, t, e, r) {
        for (var s = n2.length, o = r ? s : -1; (r ? o-- : ++o < s) && t(n2[o], o, n2); )
          ;
        return e ? Cn(n2, r ? 0 : o, r ? o + 1 : s) : Cn(n2, r ? o + 1 : 0, r ? s : o);
      }
      function ou(n2, t) {
        var e = n2;
        return e instanceof N4 && (e = e.value()), Nr(t, function(r, s) {
          return s.func.apply(s.thisArg, jn2([r], s.args));
        }, e);
      }
      function ui(n2, t, e) {
        var r = n2.length;
        if (r < 2)
          return r ? rt2(n2[0]) : [];
        for (var s = -1, o = p4(r); ++s < r; )
          for (var f3 = n2[s], c2 = -1; ++c2 < r; )
            c2 != s && (o[s] = ue2(o[s] || f3, n2[c2], t, e));
        return rt2(j4(o, 1), t, e);
      }
      function fu(n2, t, e) {
        for (var r = -1, s = n2.length, o = t.length, f3 = {}; ++r < s; ) {
          var c2 = r < o ? t[r] : i2;
          e(f3, n2[r], c2);
        }
        return f3;
      }
      function ai(n2) {
        return Y(n2) ? n2 : [];
      }
      function oi(n2) {
        return typeof n2 == "function" ? n2 : fn;
      }
      function it3(n2, t) {
        return O3(n2) ? n2 : _i(n2, t) ? [n2] : Wu(W3(n2));
      }
      var qc = L3;
      function st3(n2, t, e) {
        var r = n2.length;
        return e = e === i2 ? r : e, !t && e >= r ? n2 : Cn(n2, t, e);
      }
      var cu = Of || function(n2) {
        return k.clearTimeout(n2);
      };
      function hu(n2, t) {
        if (t)
          return n2.slice();
        var e = n2.length, r = Ls2 ? Ls2(e) : new n2.constructor(e);
        return n2.copy(r), r;
      }
      function fi(n2) {
        var t = new n2.constructor(n2.byteLength);
        return new De2(t).set(new De2(n2)), t;
      }
      function Bc(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.byteLength);
      }
      function Gc(n2) {
        var t = new n2.constructor(n2.source, Ji2.exec(n2));
        return t.lastIndex = n2.lastIndex, t;
      }
      function zc(n2) {
        return ie2 ? M3(ie2.call(n2)) : {};
      }
      function lu(n2, t) {
        var e = t ? fi(n2.buffer) : n2.buffer;
        return new n2.constructor(e, n2.byteOffset, n2.length);
      }
      function pu(n2, t) {
        if (n2 !== t) {
          var e = n2 !== i2, r = n2 === null, s = n2 === n2, o = pn(n2), f3 = t !== i2, c2 = t === null, l = t === t, v2 = pn(t);
          if (!c2 && !v2 && !o && n2 > t || o && f3 && l && !c2 && !v2 || r && f3 && l || !e && l || !s)
            return 1;
          if (!r && !o && !v2 && n2 < t || v2 && e && s && !r && !o || c2 && e && s || !f3 && s || !l)
            return -1;
        }
        return 0;
      }
      function Kc(n2, t, e) {
        for (var r = -1, s = n2.criteria, o = t.criteria, f3 = s.length, c2 = e.length; ++r < f3; ) {
          var l = pu(s[r], o[r]);
          if (l) {
            if (r >= c2)
              return l;
            var v2 = e[r];
            return l * (v2 == "desc" ? -1 : 1);
          }
        }
        return n2.index - t.index;
      }
      function du(n2, t, e, r) {
        for (var s = -1, o = n2.length, f3 = e.length, c2 = -1, l = t.length, v2 = Q4(o - f3, 0), _3 = p4(l + v2), m2 = !r; ++c2 < l; )
          _3[c2] = t[c2];
        for (; ++s < f3; )
          (m2 || s < o) && (_3[e[s]] = n2[s]);
        for (; v2--; )
          _3[c2++] = n2[s++];
        return _3;
      }
      function gu(n2, t, e, r) {
        for (var s = -1, o = n2.length, f3 = -1, c2 = e.length, l = -1, v2 = t.length, _3 = Q4(o - c2, 0), m2 = p4(_3 + v2), P3 = !r; ++s < _3; )
          m2[s] = n2[s];
        for (var I2 = s; ++l < v2; )
          m2[I2 + l] = t[l];
        for (; ++f3 < c2; )
          (P3 || s < o) && (m2[I2 + e[f3]] = n2[s++]);
        return m2;
      }
      function un2(n2, t) {
        var e = -1, r = n2.length;
        for (t || (t = p4(r)); ++e < r; )
          t[e] = n2[e];
        return t;
      }
      function Un(n2, t, e, r) {
        var s = !e;
        e || (e = {});
        for (var o = -1, f3 = t.length; ++o < f3; ) {
          var c2 = t[o], l = r ? r(e[c2], n2[c2], c2, e, n2) : i2;
          l === i2 && (l = n2[c2]), s ? zn2(e, c2, l) : se(e, c2, l);
        }
        return e;
      }
      function Yc(n2, t) {
        return Un(n2, vi(n2), t);
      }
      function Zc(n2, t) {
        return Un(n2, Ou(n2), t);
      }
      function Je3(n2, t) {
        return function(e, r) {
          var s = O3(e) ? Vo : gc, o = t ? t() : {};
          return s(e, n2, x2(r, 2), o);
        };
      }
      function Ut2(n2) {
        return L3(function(t, e) {
          var r = -1, s = e.length, o = s > 1 ? e[s - 1] : i2, f3 = s > 2 ? e[2] : i2;
          for (o = n2.length > 3 && typeof o == "function" ? (s--, o) : i2, f3 && rn(e[0], e[1], f3) && (o = s < 3 ? i2 : o, s = 1), t = M3(t); ++r < s; ) {
            var c2 = e[r];
            c2 && n2(t, c2, r, o);
          }
          return t;
        });
      }
      function vu(n2, t) {
        return function(e, r) {
          if (e == null)
            return e;
          if (!an2(e))
            return n2(e, r);
          for (var s = e.length, o = t ? s : -1, f3 = M3(e); (t ? o-- : ++o < s) && r(f3[o], o, f3) !== false; )
            ;
          return e;
        };
      }
      function _u(n2) {
        return function(t, e, r) {
          for (var s = -1, o = M3(t), f3 = r(t), c2 = f3.length; c2--; ) {
            var l = f3[n2 ? c2 : ++s];
            if (e(o[l], l, o) === false)
              break;
          }
          return t;
        };
      }
      function Jc(n2, t, e) {
        var r = t & vn, s = ce3(n2);
        function o() {
          var f3 = this && this !== k && this instanceof o ? s : n2;
          return f3.apply(r ? e : this, arguments);
        }
        return o;
      }
      function mu(n2) {
        return function(t) {
          t = W3(t);
          var e = bt3(t) ? On(t) : i2, r = e ? e[0] : t.charAt(0), s = e ? st3(e, 1).join("") : t.slice(1);
          return r[n2]() + s;
        };
      }
      function Wt2(n2) {
        return function(t) {
          return Nr(va(ga(t).replace(Uo, "")), n2, "");
        };
      }
      function ce3(n2) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new n2();
            case 1:
              return new n2(t[0]);
            case 2:
              return new n2(t[0], t[1]);
            case 3:
              return new n2(t[0], t[1], t[2]);
            case 4:
              return new n2(t[0], t[1], t[2], t[3]);
            case 5:
              return new n2(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new n2(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var e = $t3(n2.prototype), r = n2.apply(e, t);
          return z(r) ? r : e;
        };
      }
      function Xc(n2, t, e) {
        var r = ce3(n2);
        function s() {
          for (var o = arguments.length, f3 = p4(o), c2 = o, l = Ft3(s); c2--; )
            f3[c2] = arguments[c2];
          var v2 = o < 3 && f3[0] !== l && f3[o - 1] !== l ? [] : nt3(f3, l);
          if (o -= v2.length, o < e)
            return Iu(n2, t, Xe3, s.placeholder, i2, f3, v2, i2, i2, e - o);
          var _3 = this && this !== k && this instanceof s ? r : n2;
          return cn2(_3, this, f3);
        }
        return s;
      }
      function wu(n2) {
        return function(t, e, r) {
          var s = M3(t);
          if (!an2(t)) {
            var o = x2(e, 3);
            t = V3(t), e = function(c2) {
              return o(s[c2], c2, s);
            };
          }
          var f3 = n2(t, e, r);
          return f3 > -1 ? s[o ? t[f3] : f3] : i2;
        };
      }
      function Pu(n2) {
        return Yn(function(t) {
          var e = t.length, r = e, s = Pn.prototype.thru;
          for (n2 && t.reverse(); r--; ) {
            var o = t[r];
            if (typeof o != "function")
              throw new wn(U5);
            if (s && !f3 && je3(o) == "wrapper")
              var f3 = new Pn([], true);
          }
          for (r = f3 ? r : e; ++r < e; ) {
            o = t[r];
            var c2 = je3(o), l = c2 == "wrapper" ? di(o) : i2;
            l && mi(l[0]) && l[1] == (Mn2 | Dn2 | Nn | Kt3) && !l[4].length && l[9] == 1 ? f3 = f3[je3(l[0])].apply(f3, l[3]) : f3 = o.length == 1 && mi(o) ? f3[c2]() : f3.thru(o);
          }
          return function() {
            var v2 = arguments, _3 = v2[0];
            if (f3 && v2.length == 1 && O3(_3))
              return f3.plant(_3).value();
            for (var m2 = 0, P3 = e ? t[m2].apply(this, v2) : _3; ++m2 < e; )
              P3 = t[m2].call(this, P3);
            return P3;
          };
        });
      }
      function Xe3(n2, t, e, r, s, o, f3, c2, l, v2) {
        var _3 = t & Mn2, m2 = t & vn, P3 = t & ot2, I2 = t & (Dn2 | xt3), E4 = t & dr, b4 = P3 ? i2 : ce3(n2);
        function y4() {
          for (var D3 = arguments.length, H3 = p4(D3), dn = D3; dn--; )
            H3[dn] = arguments[dn];
          if (I2)
            var sn = Ft3(y4), gn = af(H3, sn);
          if (r && (H3 = du(H3, r, s, I2)), o && (H3 = gu(H3, o, f3, I2)), D3 -= gn, I2 && D3 < v2) {
            var Z2 = nt3(H3, sn);
            return Iu(n2, t, Xe3, y4.placeholder, e, H3, Z2, c2, l, v2 - D3);
          }
          var Tn = m2 ? e : this, Qn = P3 ? Tn[n2] : n2;
          return D3 = H3.length, c2 ? H3 = gh(H3, c2) : E4 && D3 > 1 && H3.reverse(), _3 && l < D3 && (H3.length = l), this && this !== k && this instanceof y4 && (Qn = b4 || ce3(Qn)), Qn.apply(Tn, H3);
        }
        return y4;
      }
      function Au(n2, t) {
        return function(e, r) {
          return Ic(e, n2, t(r), {});
        };
      }
      function Qe2(n2, t) {
        return function(e, r) {
          var s;
          if (e === i2 && r === i2)
            return t;
          if (e !== i2 && (s = e), r !== i2) {
            if (s === i2)
              return r;
            typeof e == "string" || typeof r == "string" ? (e = ln(e), r = ln(r)) : (e = uu(e), r = uu(r)), s = n2(e, r);
          }
          return s;
        };
      }
      function ci(n2) {
        return Yn(function(t) {
          return t = G3(t, hn(x2())), L3(function(e) {
            var r = this;
            return n2(t, function(s) {
              return cn2(s, r, e);
            });
          });
        });
      }
      function Ve2(n2, t) {
        t = t === i2 ? " " : ln(t);
        var e = t.length;
        if (e < 2)
          return e ? ri(t, n2) : t;
        var r = ri(t, Ue2(n2 / Tt2(t)));
        return bt3(t) ? st3(On(r), 0, n2).join("") : r.slice(0, n2);
      }
      function Qc(n2, t, e, r) {
        var s = t & vn, o = ce3(n2);
        function f3() {
          for (var c2 = -1, l = arguments.length, v2 = -1, _3 = r.length, m2 = p4(_3 + l), P3 = this && this !== k && this instanceof f3 ? o : n2; ++v2 < _3; )
            m2[v2] = r[v2];
          for (; l--; )
            m2[v2++] = arguments[++c2];
          return cn2(P3, s ? e : this, m2);
        }
        return f3;
      }
      function Cu(n2) {
        return function(t, e, r) {
          return r && typeof r != "number" && rn(t, e, r) && (e = r = i2), t = Xn(t), e === i2 ? (e = t, t = 0) : e = Xn(e), r = r === i2 ? t < e ? 1 : -1 : Xn(r), Hc(t, e, r, n2);
        };
      }
      function ke2(n2) {
        return function(t, e) {
          return typeof t == "string" && typeof e == "string" || (t = xn2(t), e = xn2(e)), n2(t, e);
        };
      }
      function Iu(n2, t, e, r, s, o, f3, c2, l, v2) {
        var _3 = t & Dn2, m2 = _3 ? f3 : i2, P3 = _3 ? i2 : f3, I2 = _3 ? o : i2, E4 = _3 ? i2 : o;
        t |= _3 ? Nn : Et2, t &= ~(_3 ? Et2 : Nn), t & qi2 || (t &= ~(vn | ot2));
        var b4 = [n2, t, s, I2, m2, E4, P3, c2, l, v2], y4 = e.apply(i2, b4);
        return mi(n2) && Hu(y4, b4), y4.placeholder = r, $u(y4, n2, t);
      }
      function hi(n2) {
        var t = X3[n2];
        return function(e, r) {
          if (e = xn2(e), r = r == null ? 0 : nn(R2(r), 292), r && $s2(e)) {
            var s = (W3(e) + "e").split("e"), o = t(s[0] + "e" + (+s[1] + r));
            return s = (W3(o) + "e").split("e"), +(s[0] + "e" + (+s[1] - r));
          }
          return t(e);
        };
      }
      var Vc = Nt3 && 1 / Se(new Nt3([, -0]))[1] == ft3 ? function(n2) {
        return new Nt3(n2);
      } : Di;
      function xu(n2) {
        return function(t) {
          var e = tn(t);
          return e == yn ? qr(t) : e == Sn ? df(t) : uf(t, n2(t));
        };
      }
      function Kn2(n2, t, e, r, s, o, f3, c2) {
        var l = t & ot2;
        if (!l && typeof n2 != "function")
          throw new wn(U5);
        var v2 = r ? r.length : 0;
        if (v2 || (t &= ~(Nn | Et2), r = s = i2), f3 = f3 === i2 ? f3 : Q4(R2(f3), 0), c2 = c2 === i2 ? c2 : R2(c2), v2 -= s ? s.length : 0, t & Et2) {
          var _3 = r, m2 = s;
          r = s = i2;
        }
        var P3 = l ? i2 : di(n2), I2 = [n2, t, e, r, s, _3, m2, o, f3, c2];
        if (P3 && lh(I2, P3), n2 = I2[0], t = I2[1], e = I2[2], r = I2[3], s = I2[4], c2 = I2[9] = I2[9] === i2 ? l ? 0 : n2.length : Q4(I2[9] - v2, 0), !c2 && t & (Dn2 | xt3) && (t &= ~(Dn2 | xt3)), !t || t == vn)
          var E4 = Jc(n2, t, e);
        else
          t == Dn2 || t == xt3 ? E4 = Xc(n2, t, c2) : (t == Nn || t == (vn | Nn)) && !s.length ? E4 = Qc(n2, t, e, r) : E4 = Xe3.apply(i2, I2);
        var b4 = P3 ? iu : Hu;
        return $u(b4(E4, I2), n2, t);
      }
      function Eu(n2, t, e, r) {
        return n2 === i2 || bn(n2, Dt3[e]) && !F3.call(r, e) ? t : n2;
      }
      function yu(n2, t, e, r, s, o) {
        return z(n2) && z(t) && (o.set(t, n2), Ke2(n2, t, i2, yu, o), o.delete(t)), n2;
      }
      function kc(n2) {
        return pe3(n2) ? i2 : n2;
      }
      function Su(n2, t, e, r, s, o) {
        var f3 = e & It2, c2 = n2.length, l = t.length;
        if (c2 != l && !(f3 && l > c2))
          return false;
        var v2 = o.get(n2), _3 = o.get(t);
        if (v2 && _3)
          return v2 == t && _3 == n2;
        var m2 = -1, P3 = true, I2 = e & ve2 ? new pt3() : i2;
        for (o.set(n2, t), o.set(t, n2); ++m2 < c2; ) {
          var E4 = n2[m2], b4 = t[m2];
          if (r)
            var y4 = f3 ? r(b4, E4, m2, t, n2, o) : r(E4, b4, m2, n2, t, o);
          if (y4 !== i2) {
            if (y4)
              continue;
            P3 = false;
            break;
          }
          if (I2) {
            if (!Hr(t, function(D3, H3) {
              if (!jt3(I2, H3) && (E4 === D3 || s(E4, D3, e, r, o)))
                return I2.push(H3);
            })) {
              P3 = false;
              break;
            }
          } else if (!(E4 === b4 || s(E4, b4, e, r, o))) {
            P3 = false;
            break;
          }
        }
        return o.delete(n2), o.delete(t), P3;
      }
      function jc(n2, t, e, r, s, o, f3) {
        switch (e) {
          case St2:
            if (n2.byteLength != t.byteLength || n2.byteOffset != t.byteOffset)
              return false;
            n2 = n2.buffer, t = t.buffer;
          case kt3:
            return !(n2.byteLength != t.byteLength || !o(new De2(n2), new De2(t)));
          case Yt2:
          case Zt2:
          case Jt:
            return bn(+n2, +t);
          case we:
            return n2.name == t.name && n2.message == t.message;
          case Xt2:
          case Qt2:
            return n2 == t + "";
          case yn:
            var c2 = qr;
          case Sn:
            var l = r & It2;
            if (c2 || (c2 = Se), n2.size != t.size && !l)
              return false;
            var v2 = f3.get(n2);
            if (v2)
              return v2 == t;
            r |= ve2, f3.set(n2, t);
            var _3 = Su(c2(n2), c2(t), r, s, o, f3);
            return f3.delete(n2), _3;
          case Ae:
            if (ie2)
              return ie2.call(n2) == ie2.call(t);
        }
        return false;
      }
      function nh(n2, t, e, r, s, o) {
        var f3 = e & It2, c2 = li(n2), l = c2.length, v2 = li(t), _3 = v2.length;
        if (l != _3 && !f3)
          return false;
        for (var m2 = l; m2--; ) {
          var P3 = c2[m2];
          if (!(f3 ? P3 in t : F3.call(t, P3)))
            return false;
        }
        var I2 = o.get(n2), E4 = o.get(t);
        if (I2 && E4)
          return I2 == t && E4 == n2;
        var b4 = true;
        o.set(n2, t), o.set(t, n2);
        for (var y4 = f3; ++m2 < l; ) {
          P3 = c2[m2];
          var D3 = n2[P3], H3 = t[P3];
          if (r)
            var dn = f3 ? r(H3, D3, P3, t, n2, o) : r(D3, H3, P3, n2, t, o);
          if (!(dn === i2 ? D3 === H3 || s(D3, H3, e, r, o) : dn)) {
            b4 = false;
            break;
          }
          y4 || (y4 = P3 == "constructor");
        }
        if (b4 && !y4) {
          var sn = n2.constructor, gn = t.constructor;
          sn != gn && "constructor" in n2 && "constructor" in t && !(typeof sn == "function" && sn instanceof sn && typeof gn == "function" && gn instanceof gn) && (b4 = false);
        }
        return o.delete(n2), o.delete(t), b4;
      }
      function Yn(n2) {
        return Pi(Du(n2, i2, Bu), n2 + "");
      }
      function li(n2) {
        return Zs2(n2, V3, vi);
      }
      function pi(n2) {
        return Zs2(n2, on, Ou);
      }
      var di = Fe2 ? function(n2) {
        return Fe2.get(n2);
      } : Di;
      function je3(n2) {
        for (var t = n2.name + "", e = Ht2[t], r = F3.call(Ht2, t) ? e.length : 0; r--; ) {
          var s = e[r], o = s.func;
          if (o == null || o == n2)
            return s.name;
        }
        return t;
      }
      function Ft3(n2) {
        var t = F3.call(a2, "placeholder") ? a2 : n2;
        return t.placeholder;
      }
      function x2() {
        var n2 = a2.iteratee || Ti;
        return n2 = n2 === Ti ? Qs2 : n2, arguments.length ? n2(arguments[0], arguments[1]) : n2;
      }
      function nr2(n2, t) {
        var e = n2.__data__;
        return oh(t) ? e[typeof t == "string" ? "string" : "hash"] : e.map;
      }
      function gi(n2) {
        for (var t = V3(n2), e = t.length; e--; ) {
          var r = t[e], s = n2[r];
          t[e] = [r, s, Tu(s)];
        }
        return t;
      }
      function vt2(n2, t) {
        var e = hf(n2, t);
        return Xs2(e) ? e : i2;
      }
      function th(n2) {
        var t = F3.call(n2, ht2), e = n2[ht2];
        try {
          n2[ht2] = i2;
          var r = true;
        } catch {
        }
        var s = Te2.call(n2);
        return r && (t ? n2[ht2] = e : delete n2[ht2]), s;
      }
      var vi = Gr ? function(n2) {
        return n2 == null ? [] : (n2 = M3(n2), kn2(Gr(n2), function(t) {
          return Ns2.call(n2, t);
        }));
      } : Ni2, Ou = Gr ? function(n2) {
        for (var t = []; n2; )
          jn2(t, vi(n2)), n2 = Ne2(n2);
        return t;
      } : Ni2, tn = en;
      (zr && tn(new zr(new ArrayBuffer(1))) != St2 || te3 && tn(new te3()) != yn || Kr && tn(Kr.resolve()) != zi2 || Nt3 && tn(new Nt3()) != Sn || ee3 && tn(new ee3()) != Vt3) && (tn = function(n2) {
        var t = en(n2), e = t == qn ? n2.constructor : i2, r = e ? _t2(e) : "";
        if (r)
          switch (r) {
            case Uf:
              return St2;
            case Wf:
              return yn;
            case Ff:
              return zi2;
            case Mf:
              return Sn;
            case qf:
              return Vt3;
          }
        return t;
      });
      function eh(n2, t, e) {
        for (var r = -1, s = e.length; ++r < s; ) {
          var o = e[r], f3 = o.size;
          switch (o.type) {
            case "drop":
              n2 += f3;
              break;
            case "dropRight":
              t -= f3;
              break;
            case "take":
              t = nn(t, n2 + f3);
              break;
            case "takeRight":
              n2 = Q4(n2, t - f3);
              break;
          }
        }
        return { start: n2, end: t };
      }
      function rh(n2) {
        var t = n2.match(ao);
        return t ? t[1].split(oo) : [];
      }
      function Ru(n2, t, e) {
        t = it3(t, n2);
        for (var r = -1, s = t.length, o = false; ++r < s; ) {
          var f3 = Wn(t[r]);
          if (!(o = n2 != null && e(n2, f3)))
            break;
          n2 = n2[f3];
        }
        return o || ++r != s ? o : (s = n2 == null ? 0 : n2.length, !!s && ar2(s) && Zn(f3, s) && (O3(n2) || mt3(n2)));
      }
      function ih(n2) {
        var t = n2.length, e = new n2.constructor(t);
        return t && typeof n2[0] == "string" && F3.call(n2, "index") && (e.index = n2.index, e.input = n2.input), e;
      }
      function bu(n2) {
        return typeof n2.constructor == "function" && !he3(n2) ? $t3(Ne2(n2)) : {};
      }
      function sh(n2, t, e) {
        var r = n2.constructor;
        switch (t) {
          case kt3:
            return fi(n2);
          case Yt2:
          case Zt2:
            return new r(+n2);
          case St2:
            return Bc(n2, e);
          case gr:
          case vr2:
          case _r2:
          case mr2:
          case wr2:
          case Pr2:
          case Ar2:
          case Cr2:
          case Ir2:
            return lu(n2, e);
          case yn:
            return new r();
          case Jt:
          case Qt2:
            return new r(n2);
          case Xt2:
            return Gc(n2);
          case Sn:
            return new r();
          case Ae:
            return zc(n2);
        }
      }
      function uh(n2, t) {
        var e = t.length;
        if (!e)
          return n2;
        var r = e - 1;
        return t[r] = (e > 1 ? "& " : "") + t[r], t = t.join(e > 2 ? ", " : " "), n2.replace(uo, `{
/* [wrapped with ` + t + `] */
`);
      }
      function ah(n2) {
        return O3(n2) || mt3(n2) || !!(Hs2 && n2 && n2[Hs2]);
      }
      function Zn(n2, t) {
        var e = typeof n2;
        return t = t ?? Vn2, !!t && (e == "number" || e != "symbol" && mo.test(n2)) && n2 > -1 && n2 % 1 == 0 && n2 < t;
      }
      function rn(n2, t, e) {
        if (!z(e))
          return false;
        var r = typeof t;
        return (r == "number" ? an2(e) && Zn(t, e.length) : r == "string" && t in e) ? bn(e[t], n2) : false;
      }
      function _i(n2, t) {
        if (O3(n2))
          return false;
        var e = typeof n2;
        return e == "number" || e == "symbol" || e == "boolean" || n2 == null || pn(n2) ? true : eo.test(n2) || !to.test(n2) || t != null && n2 in M3(t);
      }
      function oh(n2) {
        var t = typeof n2;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? n2 !== "__proto__" : n2 === null;
      }
      function mi(n2) {
        var t = je3(n2), e = a2[t];
        if (typeof e != "function" || !(t in N4.prototype))
          return false;
        if (n2 === e)
          return true;
        var r = di(e);
        return !!r && n2 === r[0];
      }
      function fh(n2) {
        return !!Ts2 && Ts2 in n2;
      }
      var ch = Re4 ? Jn2 : Hi2;
      function he3(n2) {
        var t = n2 && n2.constructor, e = typeof t == "function" && t.prototype || Dt3;
        return n2 === e;
      }
      function Tu(n2) {
        return n2 === n2 && !z(n2);
      }
      function Lu(n2, t) {
        return function(e) {
          return e == null ? false : e[n2] === t && (t !== i2 || n2 in M3(e));
        };
      }
      function hh(n2) {
        var t = sr2(n2, function(r) {
          return e.size === pr && e.clear(), r;
        }), e = t.cache;
        return t;
      }
      function lh(n2, t) {
        var e = n2[1], r = t[1], s = e | r, o = s < (vn | ot2 | Mn2), f3 = r == Mn2 && e == Dn2 || r == Mn2 && e == Kt3 && n2[7].length <= t[8] || r == (Mn2 | Kt3) && t[7].length <= t[8] && e == Dn2;
        if (!(o || f3))
          return n2;
        r & vn && (n2[2] = t[2], s |= e & vn ? 0 : qi2);
        var c2 = t[3];
        if (c2) {
          var l = n2[3];
          n2[3] = l ? du(l, c2, t[4]) : c2, n2[4] = l ? nt3(n2[3], At3) : t[4];
        }
        return c2 = t[5], c2 && (l = n2[5], n2[5] = l ? gu(l, c2, t[6]) : c2, n2[6] = l ? nt3(n2[5], At3) : t[6]), c2 = t[7], c2 && (n2[7] = c2), r & Mn2 && (n2[8] = n2[8] == null ? t[8] : nn(n2[8], t[8])), n2[9] == null && (n2[9] = t[9]), n2[0] = t[0], n2[1] = s, n2;
      }
      function ph(n2) {
        var t = [];
        if (n2 != null)
          for (var e in M3(n2))
            t.push(e);
        return t;
      }
      function dh(n2) {
        return Te2.call(n2);
      }
      function Du(n2, t, e) {
        return t = Q4(t === i2 ? n2.length - 1 : t, 0), function() {
          for (var r = arguments, s = -1, o = Q4(r.length - t, 0), f3 = p4(o); ++s < o; )
            f3[s] = r[t + s];
          s = -1;
          for (var c2 = p4(t + 1); ++s < t; )
            c2[s] = r[s];
          return c2[t] = e(f3), cn2(n2, this, c2);
        };
      }
      function Nu(n2, t) {
        return t.length < 2 ? n2 : gt2(n2, Cn(t, 0, -1));
      }
      function gh(n2, t) {
        for (var e = n2.length, r = nn(t.length, e), s = un2(n2); r--; ) {
          var o = t[r];
          n2[r] = Zn(o, e) ? s[o] : i2;
        }
        return n2;
      }
      function wi(n2, t) {
        if (!(t === "constructor" && typeof n2[t] == "function") && t != "__proto__")
          return n2[t];
      }
      var Hu = Uu(iu), le3 = bf || function(n2, t) {
        return k.setTimeout(n2, t);
      }, Pi = Uu(Wc);
      function $u(n2, t, e) {
        var r = t + "";
        return Pi(n2, uh(r, vh(rh(r), e)));
      }
      function Uu(n2) {
        var t = 0, e = 0;
        return function() {
          var r = Nf(), s = Ha - (r - e);
          if (e = r, s > 0) {
            if (++t >= Na)
              return arguments[0];
          } else
            t = 0;
          return n2.apply(i2, arguments);
        };
      }
      function tr2(n2, t) {
        var e = -1, r = n2.length, s = r - 1;
        for (t = t === i2 ? r : t; ++e < t; ) {
          var o = ei(e, s), f3 = n2[o];
          n2[o] = n2[e], n2[e] = f3;
        }
        return n2.length = t, n2;
      }
      var Wu = hh(function(n2) {
        var t = [];
        return n2.charCodeAt(0) === 46 && t.push(""), n2.replace(ro, function(e, r, s, o) {
          t.push(s ? o.replace(ho, "$1") : r || e);
        }), t;
      });
      function Wn(n2) {
        if (typeof n2 == "string" || pn(n2))
          return n2;
        var t = n2 + "";
        return t == "0" && 1 / n2 == -ft3 ? "-0" : t;
      }
      function _t2(n2) {
        if (n2 != null) {
          try {
            return be2.call(n2);
          } catch {
          }
          try {
            return n2 + "";
          } catch {
          }
        }
        return "";
      }
      function vh(n2, t) {
        return mn(qa, function(e) {
          var r = "_." + e[0];
          t & e[1] && !Ee2(n2, r) && n2.push(r);
        }), n2.sort();
      }
      function Fu(n2) {
        if (n2 instanceof N4)
          return n2.clone();
        var t = new Pn(n2.__wrapped__, n2.__chain__);
        return t.__actions__ = un2(n2.__actions__), t.__index__ = n2.__index__, t.__values__ = n2.__values__, t;
      }
      function _h(n2, t, e) {
        (e ? rn(n2, t, e) : t === i2) ? t = 1 : t = Q4(R2(t), 0);
        var r = n2 == null ? 0 : n2.length;
        if (!r || t < 1)
          return [];
        for (var s = 0, o = 0, f3 = p4(Ue2(r / t)); s < r; )
          f3[o++] = Cn(n2, s, s += t);
        return f3;
      }
      function mh(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r = 0, s = []; ++t < e; ) {
          var o = n2[t];
          o && (s[r++] = o);
        }
        return s;
      }
      function wh() {
        var n2 = arguments.length;
        if (!n2)
          return [];
        for (var t = p4(n2 - 1), e = arguments[0], r = n2; r--; )
          t[r - 1] = arguments[r];
        return jn2(O3(e) ? un2(e) : [e], j4(t, 1));
      }
      var Ph = L3(function(n2, t) {
        return Y(n2) ? ue2(n2, j4(t, 1, Y, true)) : [];
      }), Ah = L3(function(n2, t) {
        var e = In(t);
        return Y(e) && (e = i2), Y(n2) ? ue2(n2, j4(t, 1, Y, true), x2(e, 2)) : [];
      }), Ch = L3(function(n2, t) {
        var e = In(t);
        return Y(e) && (e = i2), Y(n2) ? ue2(n2, j4(t, 1, Y, true), i2, e) : [];
      });
      function Ih(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i2 ? 1 : R2(t), Cn(n2, t < 0 ? 0 : t, r)) : [];
      }
      function xh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i2 ? 1 : R2(t), t = r - t, Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function Eh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3), true, true) : [];
      }
      function yh(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3), true) : [];
      }
      function Sh(n2, t, e, r) {
        var s = n2 == null ? 0 : n2.length;
        return s ? (e && typeof e != "number" && rn(n2, t, e) && (e = 0, r = s), wc(n2, t, e, r)) : [];
      }
      function Mu(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = e == null ? 0 : R2(e);
        return s < 0 && (s = Q4(r + s, 0)), ye2(n2, x2(t, 3), s);
      }
      function qu(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = r - 1;
        return e !== i2 && (s = R2(e), s = e < 0 ? Q4(r + s, 0) : nn(s, r - 1)), ye2(n2, x2(t, 3), s, true);
      }
      function Bu(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j4(n2, 1) : [];
      }
      function Oh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? j4(n2, ft3) : [];
      }
      function Rh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        return e ? (t = t === i2 ? 1 : R2(t), j4(n2, t)) : [];
      }
      function bh(n2) {
        for (var t = -1, e = n2 == null ? 0 : n2.length, r = {}; ++t < e; ) {
          var s = n2[t];
          r[s[0]] = s[1];
        }
        return r;
      }
      function Gu(n2) {
        return n2 && n2.length ? n2[0] : i2;
      }
      function Th(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = e == null ? 0 : R2(e);
        return s < 0 && (s = Q4(r + s, 0)), Rt2(n2, t, s);
      }
      function Lh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 0, -1) : [];
      }
      var Dh = L3(function(n2) {
        var t = G3(n2, ai);
        return t.length && t[0] === n2[0] ? Vr(t) : [];
      }), Nh = L3(function(n2) {
        var t = In(n2), e = G3(n2, ai);
        return t === In(e) ? t = i2 : e.pop(), e.length && e[0] === n2[0] ? Vr(e, x2(t, 2)) : [];
      }), Hh = L3(function(n2) {
        var t = In(n2), e = G3(n2, ai);
        return t = typeof t == "function" ? t : i2, t && e.pop(), e.length && e[0] === n2[0] ? Vr(e, i2, t) : [];
      });
      function $h(n2, t) {
        return n2 == null ? "" : Lf.call(n2, t);
      }
      function In(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? n2[t - 1] : i2;
      }
      function Uh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        if (!r)
          return -1;
        var s = r;
        return e !== i2 && (s = R2(e), s = s < 0 ? Q4(r + s, 0) : nn(s, r - 1)), t === t ? vf(n2, t, s) : ye2(n2, Is2, s, true);
      }
      function Wh(n2, t) {
        return n2 && n2.length ? nu(n2, R2(t)) : i2;
      }
      var Fh = L3(zu);
      function zu(n2, t) {
        return n2 && n2.length && t && t.length ? ti(n2, t) : n2;
      }
      function Mh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, x2(e, 2)) : n2;
      }
      function qh(n2, t, e) {
        return n2 && n2.length && t && t.length ? ti(n2, t, i2, e) : n2;
      }
      var Bh = Yn(function(n2, t) {
        var e = n2 == null ? 0 : n2.length, r = Zr(n2, t);
        return ru(n2, G3(t, function(s) {
          return Zn(s, e) ? +s : s;
        }).sort(pu)), r;
      });
      function Gh(n2, t) {
        var e = [];
        if (!(n2 && n2.length))
          return e;
        var r = -1, s = [], o = n2.length;
        for (t = x2(t, 3); ++r < o; ) {
          var f3 = n2[r];
          t(f3, r, n2) && (e.push(f3), s.push(r));
        }
        return ru(n2, s), e;
      }
      function Ai2(n2) {
        return n2 == null ? n2 : $f.call(n2);
      }
      function zh(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (e && typeof e != "number" && rn(n2, t, e) ? (t = 0, e = r) : (t = t == null ? 0 : R2(t), e = e === i2 ? r : R2(e)), Cn(n2, t, e)) : [];
      }
      function Kh(n2, t) {
        return Ye3(n2, t);
      }
      function Yh(n2, t, e) {
        return ii(n2, t, x2(e, 2));
      }
      function Zh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r = Ye3(n2, t);
          if (r < e && bn(n2[r], t))
            return r;
        }
        return -1;
      }
      function Jh(n2, t) {
        return Ye3(n2, t, true);
      }
      function Xh(n2, t, e) {
        return ii(n2, t, x2(e, 2), true);
      }
      function Qh(n2, t) {
        var e = n2 == null ? 0 : n2.length;
        if (e) {
          var r = Ye3(n2, t, true) - 1;
          if (bn(n2[r], t))
            return r;
        }
        return -1;
      }
      function Vh(n2) {
        return n2 && n2.length ? su(n2) : [];
      }
      function kh(n2, t) {
        return n2 && n2.length ? su(n2, x2(t, 2)) : [];
      }
      function jh(n2) {
        var t = n2 == null ? 0 : n2.length;
        return t ? Cn(n2, 1, t) : [];
      }
      function nl(n2, t, e) {
        return n2 && n2.length ? (t = e || t === i2 ? 1 : R2(t), Cn(n2, 0, t < 0 ? 0 : t)) : [];
      }
      function tl(n2, t, e) {
        var r = n2 == null ? 0 : n2.length;
        return r ? (t = e || t === i2 ? 1 : R2(t), t = r - t, Cn(n2, t < 0 ? 0 : t, r)) : [];
      }
      function el(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3), false, true) : [];
      }
      function rl(n2, t) {
        return n2 && n2.length ? Ze2(n2, x2(t, 3)) : [];
      }
      var il = L3(function(n2) {
        return rt2(j4(n2, 1, Y, true));
      }), sl = L3(function(n2) {
        var t = In(n2);
        return Y(t) && (t = i2), rt2(j4(n2, 1, Y, true), x2(t, 2));
      }), ul = L3(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i2, rt2(j4(n2, 1, Y, true), i2, t);
      });
      function al(n2) {
        return n2 && n2.length ? rt2(n2) : [];
      }
      function ol(n2, t) {
        return n2 && n2.length ? rt2(n2, x2(t, 2)) : [];
      }
      function fl(n2, t) {
        return t = typeof t == "function" ? t : i2, n2 && n2.length ? rt2(n2, i2, t) : [];
      }
      function Ci(n2) {
        if (!(n2 && n2.length))
          return [];
        var t = 0;
        return n2 = kn2(n2, function(e) {
          if (Y(e))
            return t = Q4(e.length, t), true;
        }), Fr(t, function(e) {
          return G3(n2, $r(e));
        });
      }
      function Ku(n2, t) {
        if (!(n2 && n2.length))
          return [];
        var e = Ci(n2);
        return t == null ? e : G3(e, function(r) {
          return cn2(t, i2, r);
        });
      }
      var cl = L3(function(n2, t) {
        return Y(n2) ? ue2(n2, t) : [];
      }), hl = L3(function(n2) {
        return ui(kn2(n2, Y));
      }), ll = L3(function(n2) {
        var t = In(n2);
        return Y(t) && (t = i2), ui(kn2(n2, Y), x2(t, 2));
      }), pl = L3(function(n2) {
        var t = In(n2);
        return t = typeof t == "function" ? t : i2, ui(kn2(n2, Y), i2, t);
      }), dl = L3(Ci);
      function gl(n2, t) {
        return fu(n2 || [], t || [], se);
      }
      function vl(n2, t) {
        return fu(n2 || [], t || [], fe);
      }
      var _l = L3(function(n2) {
        var t = n2.length, e = t > 1 ? n2[t - 1] : i2;
        return e = typeof e == "function" ? (n2.pop(), e) : i2, Ku(n2, e);
      });
      function Yu(n2) {
        var t = a2(n2);
        return t.__chain__ = true, t;
      }
      function ml(n2, t) {
        return t(n2), n2;
      }
      function er3(n2, t) {
        return t(n2);
      }
      var wl = Yn(function(n2) {
        var t = n2.length, e = t ? n2[0] : 0, r = this.__wrapped__, s = function(o) {
          return Zr(o, n2);
        };
        return t > 1 || this.__actions__.length || !(r instanceof N4) || !Zn(e) ? this.thru(s) : (r = r.slice(e, +e + (t ? 1 : 0)), r.__actions__.push({ func: er3, args: [s], thisArg: i2 }), new Pn(r, this.__chain__).thru(function(o) {
          return t && !o.length && o.push(i2), o;
        }));
      });
      function Pl() {
        return Yu(this);
      }
      function Al() {
        return new Pn(this.value(), this.__chain__);
      }
      function Cl() {
        this.__values__ === i2 && (this.__values__ = ua(this.value()));
        var n2 = this.__index__ >= this.__values__.length, t = n2 ? i2 : this.__values__[this.__index__++];
        return { done: n2, value: t };
      }
      function Il() {
        return this;
      }
      function xl(n2) {
        for (var t, e = this; e instanceof qe2; ) {
          var r = Fu(e);
          r.__index__ = 0, r.__values__ = i2, t ? s.__wrapped__ = r : t = r;
          var s = r;
          e = e.__wrapped__;
        }
        return s.__wrapped__ = n2, t;
      }
      function El() {
        var n2 = this.__wrapped__;
        if (n2 instanceof N4) {
          var t = n2;
          return this.__actions__.length && (t = new N4(this)), t = t.reverse(), t.__actions__.push({ func: er3, args: [Ai2], thisArg: i2 }), new Pn(t, this.__chain__);
        }
        return this.thru(Ai2);
      }
      function yl() {
        return ou(this.__wrapped__, this.__actions__);
      }
      var Sl = Je3(function(n2, t, e) {
        F3.call(n2, e) ? ++n2[e] : zn2(n2, e, 1);
      });
      function Ol(n2, t, e) {
        var r = O3(n2) ? As2 : mc;
        return e && rn(n2, t, e) && (t = i2), r(n2, x2(t, 3));
      }
      function Rl(n2, t) {
        var e = O3(n2) ? kn2 : Ks2;
        return e(n2, x2(t, 3));
      }
      var bl = wu(Mu), Tl = wu(qu);
      function Ll(n2, t) {
        return j4(rr2(n2, t), 1);
      }
      function Dl(n2, t) {
        return j4(rr2(n2, t), ft3);
      }
      function Nl(n2, t, e) {
        return e = e === i2 ? 1 : R2(e), j4(rr2(n2, t), e);
      }
      function Zu(n2, t) {
        var e = O3(n2) ? mn : et3;
        return e(n2, x2(t, 3));
      }
      function Ju(n2, t) {
        var e = O3(n2) ? ko : zs2;
        return e(n2, x2(t, 3));
      }
      var Hl = Je3(function(n2, t, e) {
        F3.call(n2, e) ? n2[e].push(t) : zn2(n2, e, [t]);
      });
      function $l(n2, t, e, r) {
        n2 = an2(n2) ? n2 : qt3(n2), e = e && !r ? R2(e) : 0;
        var s = n2.length;
        return e < 0 && (e = Q4(s + e, 0)), or2(n2) ? e <= s && n2.indexOf(t, e) > -1 : !!s && Rt2(n2, t, e) > -1;
      }
      var Ul = L3(function(n2, t, e) {
        var r = -1, s = typeof t == "function", o = an2(n2) ? p4(n2.length) : [];
        return et3(n2, function(f3) {
          o[++r] = s ? cn2(t, f3, e) : ae2(f3, t, e);
        }), o;
      }), Wl = Je3(function(n2, t, e) {
        zn2(n2, e, t);
      });
      function rr2(n2, t) {
        var e = O3(n2) ? G3 : Vs2;
        return e(n2, x2(t, 3));
      }
      function Fl(n2, t, e, r) {
        return n2 == null ? [] : (O3(t) || (t = t == null ? [] : [t]), e = r ? i2 : e, O3(e) || (e = e == null ? [] : [e]), tu(n2, t, e));
      }
      var Ml = Je3(function(n2, t, e) {
        n2[e ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function ql(n2, t, e) {
        var r = O3(n2) ? Nr : Es2, s = arguments.length < 3;
        return r(n2, x2(t, 4), e, s, et3);
      }
      function Bl(n2, t, e) {
        var r = O3(n2) ? jo : Es2, s = arguments.length < 3;
        return r(n2, x2(t, 4), e, s, zs2);
      }
      function Gl(n2, t) {
        var e = O3(n2) ? kn2 : Ks2;
        return e(n2, ur2(x2(t, 3)));
      }
      function zl(n2) {
        var t = O3(n2) ? Ms2 : $c;
        return t(n2);
      }
      function Kl(n2, t, e) {
        (e ? rn(n2, t, e) : t === i2) ? t = 1 : t = R2(t);
        var r = O3(n2) ? pc : Uc;
        return r(n2, t);
      }
      function Yl(n2) {
        var t = O3(n2) ? dc : Fc;
        return t(n2);
      }
      function Zl(n2) {
        if (n2 == null)
          return 0;
        if (an2(n2))
          return or2(n2) ? Tt2(n2) : n2.length;
        var t = tn(n2);
        return t == yn || t == Sn ? n2.size : jr(n2).length;
      }
      function Jl(n2, t, e) {
        var r = O3(n2) ? Hr : Mc;
        return e && rn(n2, t, e) && (t = i2), r(n2, x2(t, 3));
      }
      var Xl = L3(function(n2, t) {
        if (n2 == null)
          return [];
        var e = t.length;
        return e > 1 && rn(n2, t[0], t[1]) ? t = [] : e > 2 && rn(t[0], t[1], t[2]) && (t = [t[0]]), tu(n2, j4(t, 1), []);
      }), ir2 = Rf || function() {
        return k.Date.now();
      };
      function Ql(n2, t) {
        if (typeof t != "function")
          throw new wn(U5);
        return n2 = R2(n2), function() {
          if (--n2 < 1)
            return t.apply(this, arguments);
        };
      }
      function Xu(n2, t, e) {
        return t = e ? i2 : t, t = n2 && t == null ? n2.length : t, Kn2(n2, Mn2, i2, i2, i2, i2, t);
      }
      function Qu(n2, t) {
        var e;
        if (typeof t != "function")
          throw new wn(U5);
        return n2 = R2(n2), function() {
          return --n2 > 0 && (e = t.apply(this, arguments)), n2 <= 1 && (t = i2), e;
        };
      }
      var Ii = L3(function(n2, t, e) {
        var r = vn;
        if (e.length) {
          var s = nt3(e, Ft3(Ii));
          r |= Nn;
        }
        return Kn2(n2, r, t, e, s);
      }), Vu = L3(function(n2, t, e) {
        var r = vn | ot2;
        if (e.length) {
          var s = nt3(e, Ft3(Vu));
          r |= Nn;
        }
        return Kn2(t, r, n2, e, s);
      });
      function ku(n2, t, e) {
        t = e ? i2 : t;
        var r = Kn2(n2, Dn2, i2, i2, i2, i2, i2, t);
        return r.placeholder = ku.placeholder, r;
      }
      function ju(n2, t, e) {
        t = e ? i2 : t;
        var r = Kn2(n2, xt3, i2, i2, i2, i2, i2, t);
        return r.placeholder = ju.placeholder, r;
      }
      function na(n2, t, e) {
        var r, s, o, f3, c2, l, v2 = 0, _3 = false, m2 = false, P3 = true;
        if (typeof n2 != "function")
          throw new wn(U5);
        t = xn2(t) || 0, z(e) && (_3 = !!e.leading, m2 = "maxWait" in e, o = m2 ? Q4(xn2(e.maxWait) || 0, t) : o, P3 = "trailing" in e ? !!e.trailing : P3);
        function I2(Z2) {
          var Tn = r, Qn = s;
          return r = s = i2, v2 = Z2, f3 = n2.apply(Qn, Tn), f3;
        }
        function E4(Z2) {
          return v2 = Z2, c2 = le3(D3, t), _3 ? I2(Z2) : f3;
        }
        function b4(Z2) {
          var Tn = Z2 - l, Qn = Z2 - v2, wa = t - Tn;
          return m2 ? nn(wa, o - Qn) : wa;
        }
        function y4(Z2) {
          var Tn = Z2 - l, Qn = Z2 - v2;
          return l === i2 || Tn >= t || Tn < 0 || m2 && Qn >= o;
        }
        function D3() {
          var Z2 = ir2();
          if (y4(Z2))
            return H3(Z2);
          c2 = le3(D3, b4(Z2));
        }
        function H3(Z2) {
          return c2 = i2, P3 && r ? I2(Z2) : (r = s = i2, f3);
        }
        function dn() {
          c2 !== i2 && cu(c2), v2 = 0, r = l = s = c2 = i2;
        }
        function sn() {
          return c2 === i2 ? f3 : H3(ir2());
        }
        function gn() {
          var Z2 = ir2(), Tn = y4(Z2);
          if (r = arguments, s = this, l = Z2, Tn) {
            if (c2 === i2)
              return E4(l);
            if (m2)
              return cu(c2), c2 = le3(D3, t), I2(l);
          }
          return c2 === i2 && (c2 = le3(D3, t)), f3;
        }
        return gn.cancel = dn, gn.flush = sn, gn;
      }
      var Vl = L3(function(n2, t) {
        return Gs2(n2, 1, t);
      }), kl = L3(function(n2, t, e) {
        return Gs2(n2, xn2(t) || 0, e);
      });
      function jl(n2) {
        return Kn2(n2, dr);
      }
      function sr2(n2, t) {
        if (typeof n2 != "function" || t != null && typeof t != "function")
          throw new wn(U5);
        var e = function() {
          var r = arguments, s = t ? t.apply(this, r) : r[0], o = e.cache;
          if (o.has(s))
            return o.get(s);
          var f3 = n2.apply(this, r);
          return e.cache = o.set(s, f3) || o, f3;
        };
        return e.cache = new (sr2.Cache || Gn)(), e;
      }
      sr2.Cache = Gn;
      function ur2(n2) {
        if (typeof n2 != "function")
          throw new wn(U5);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !n2.call(this);
            case 1:
              return !n2.call(this, t[0]);
            case 2:
              return !n2.call(this, t[0], t[1]);
            case 3:
              return !n2.call(this, t[0], t[1], t[2]);
          }
          return !n2.apply(this, t);
        };
      }
      function np(n2) {
        return Qu(2, n2);
      }
      var tp = qc(function(n2, t) {
        t = t.length == 1 && O3(t[0]) ? G3(t[0], hn(x2())) : G3(j4(t, 1), hn(x2()));
        var e = t.length;
        return L3(function(r) {
          for (var s = -1, o = nn(r.length, e); ++s < o; )
            r[s] = t[s].call(this, r[s]);
          return cn2(n2, this, r);
        });
      }), xi = L3(function(n2, t) {
        var e = nt3(t, Ft3(xi));
        return Kn2(n2, Nn, i2, t, e);
      }), ta = L3(function(n2, t) {
        var e = nt3(t, Ft3(ta));
        return Kn2(n2, Et2, i2, t, e);
      }), ep = Yn(function(n2, t) {
        return Kn2(n2, Kt3, i2, i2, i2, t);
      });
      function rp(n2, t) {
        if (typeof n2 != "function")
          throw new wn(U5);
        return t = t === i2 ? t : R2(t), L3(n2, t);
      }
      function ip(n2, t) {
        if (typeof n2 != "function")
          throw new wn(U5);
        return t = t == null ? 0 : Q4(R2(t), 0), L3(function(e) {
          var r = e[t], s = st3(e, 0, t);
          return r && jn2(s, r), cn2(n2, this, s);
        });
      }
      function sp(n2, t, e) {
        var r = true, s = true;
        if (typeof n2 != "function")
          throw new wn(U5);
        return z(e) && (r = "leading" in e ? !!e.leading : r, s = "trailing" in e ? !!e.trailing : s), na(n2, t, { leading: r, maxWait: t, trailing: s });
      }
      function up(n2) {
        return Xu(n2, 1);
      }
      function ap(n2, t) {
        return xi(oi(t), n2);
      }
      function op() {
        if (!arguments.length)
          return [];
        var n2 = arguments[0];
        return O3(n2) ? n2 : [n2];
      }
      function fp(n2) {
        return An(n2, Ct2);
      }
      function cp(n2, t) {
        return t = typeof t == "function" ? t : i2, An(n2, Ct2, t);
      }
      function hp(n2) {
        return An(n2, Ln2 | Ct2);
      }
      function lp(n2, t) {
        return t = typeof t == "function" ? t : i2, An(n2, Ln2 | Ct2, t);
      }
      function pp(n2, t) {
        return t == null || Bs2(n2, t, V3(t));
      }
      function bn(n2, t) {
        return n2 === t || n2 !== n2 && t !== t;
      }
      var dp = ke2(Qr), gp = ke2(function(n2, t) {
        return n2 >= t;
      }), mt3 = Js2(function() {
        return arguments;
      }()) ? Js2 : function(n2) {
        return K2(n2) && F3.call(n2, "callee") && !Ns2.call(n2, "callee");
      }, O3 = p4.isArray, vp = gs2 ? hn(gs2) : xc;
      function an2(n2) {
        return n2 != null && ar2(n2.length) && !Jn2(n2);
      }
      function Y(n2) {
        return K2(n2) && an2(n2);
      }
      function _p(n2) {
        return n2 === true || n2 === false || K2(n2) && en(n2) == Yt2;
      }
      var ut3 = Tf || Hi2, mp = vs2 ? hn(vs2) : Ec;
      function wp(n2) {
        return K2(n2) && n2.nodeType === 1 && !pe3(n2);
      }
      function Pp(n2) {
        if (n2 == null)
          return true;
        if (an2(n2) && (O3(n2) || typeof n2 == "string" || typeof n2.splice == "function" || ut3(n2) || Mt3(n2) || mt3(n2)))
          return !n2.length;
        var t = tn(n2);
        if (t == yn || t == Sn)
          return !n2.size;
        if (he3(n2))
          return !jr(n2).length;
        for (var e in n2)
          if (F3.call(n2, e))
            return false;
        return true;
      }
      function Ap(n2, t) {
        return oe4(n2, t);
      }
      function Cp(n2, t, e) {
        e = typeof e == "function" ? e : i2;
        var r = e ? e(n2, t) : i2;
        return r === i2 ? oe4(n2, t, i2, e) : !!r;
      }
      function Ei(n2) {
        if (!K2(n2))
          return false;
        var t = en(n2);
        return t == we || t == Ga || typeof n2.message == "string" && typeof n2.name == "string" && !pe3(n2);
      }
      function Ip(n2) {
        return typeof n2 == "number" && $s2(n2);
      }
      function Jn2(n2) {
        if (!z(n2))
          return false;
        var t = en(n2);
        return t == Pe || t == Gi2 || t == Ba || t == Ka;
      }
      function ea(n2) {
        return typeof n2 == "number" && n2 == R2(n2);
      }
      function ar2(n2) {
        return typeof n2 == "number" && n2 > -1 && n2 % 1 == 0 && n2 <= Vn2;
      }
      function z(n2) {
        var t = typeof n2;
        return n2 != null && (t == "object" || t == "function");
      }
      function K2(n2) {
        return n2 != null && typeof n2 == "object";
      }
      var ra = _s2 ? hn(_s2) : Sc;
      function xp(n2, t) {
        return n2 === t || kr(n2, t, gi(t));
      }
      function Ep(n2, t, e) {
        return e = typeof e == "function" ? e : i2, kr(n2, t, gi(t), e);
      }
      function yp(n2) {
        return ia(n2) && n2 != +n2;
      }
      function Sp(n2) {
        if (ch(n2))
          throw new S4(T);
        return Xs2(n2);
      }
      function Op(n2) {
        return n2 === null;
      }
      function Rp(n2) {
        return n2 == null;
      }
      function ia(n2) {
        return typeof n2 == "number" || K2(n2) && en(n2) == Jt;
      }
      function pe3(n2) {
        if (!K2(n2) || en(n2) != qn)
          return false;
        var t = Ne2(n2);
        if (t === null)
          return true;
        var e = F3.call(t, "constructor") && t.constructor;
        return typeof e == "function" && e instanceof e && be2.call(e) == Ef;
      }
      var yi = ms2 ? hn(ms2) : Oc;
      function bp(n2) {
        return ea(n2) && n2 >= -Vn2 && n2 <= Vn2;
      }
      var sa = ws2 ? hn(ws2) : Rc;
      function or2(n2) {
        return typeof n2 == "string" || !O3(n2) && K2(n2) && en(n2) == Qt2;
      }
      function pn(n2) {
        return typeof n2 == "symbol" || K2(n2) && en(n2) == Ae;
      }
      var Mt3 = Ps2 ? hn(Ps2) : bc;
      function Tp(n2) {
        return n2 === i2;
      }
      function Lp(n2) {
        return K2(n2) && tn(n2) == Vt3;
      }
      function Dp(n2) {
        return K2(n2) && en(n2) == Za;
      }
      var Np = ke2(ni), Hp = ke2(function(n2, t) {
        return n2 <= t;
      });
      function ua(n2) {
        if (!n2)
          return [];
        if (an2(n2))
          return or2(n2) ? On(n2) : un2(n2);
        if (ne2 && n2[ne2])
          return pf(n2[ne2]());
        var t = tn(n2), e = t == yn ? qr : t == Sn ? Se : qt3;
        return e(n2);
      }
      function Xn(n2) {
        if (!n2)
          return n2 === 0 ? n2 : 0;
        if (n2 = xn2(n2), n2 === ft3 || n2 === -ft3) {
          var t = n2 < 0 ? -1 : 1;
          return t * Wa;
        }
        return n2 === n2 ? n2 : 0;
      }
      function R2(n2) {
        var t = Xn(n2), e = t % 1;
        return t === t ? e ? t - e : t : 0;
      }
      function aa(n2) {
        return n2 ? dt3(R2(n2), 0, Hn) : 0;
      }
      function xn2(n2) {
        if (typeof n2 == "number")
          return n2;
        if (pn(n2))
          return _e3;
        if (z(n2)) {
          var t = typeof n2.valueOf == "function" ? n2.valueOf() : n2;
          n2 = z(t) ? t + "" : t;
        }
        if (typeof n2 != "string")
          return n2 === 0 ? n2 : +n2;
        n2 = ys2(n2);
        var e = go.test(n2);
        return e || _o.test(n2) ? Xo(n2.slice(2), e ? 2 : 8) : po.test(n2) ? _e3 : +n2;
      }
      function oa(n2) {
        return Un(n2, on(n2));
      }
      function $p(n2) {
        return n2 ? dt3(R2(n2), -Vn2, Vn2) : n2 === 0 ? n2 : 0;
      }
      function W3(n2) {
        return n2 == null ? "" : ln(n2);
      }
      var Up = Ut2(function(n2, t) {
        if (he3(t) || an2(t)) {
          Un(t, V3(t), n2);
          return;
        }
        for (var e in t)
          F3.call(t, e) && se(n2, e, t[e]);
      }), fa = Ut2(function(n2, t) {
        Un(t, on(t), n2);
      }), fr2 = Ut2(function(n2, t, e, r) {
        Un(t, on(t), n2, r);
      }), Wp = Ut2(function(n2, t, e, r) {
        Un(t, V3(t), n2, r);
      }), Fp = Yn(Zr);
      function Mp(n2, t) {
        var e = $t3(n2);
        return t == null ? e : qs2(e, t);
      }
      var qp = L3(function(n2, t) {
        n2 = M3(n2);
        var e = -1, r = t.length, s = r > 2 ? t[2] : i2;
        for (s && rn(t[0], t[1], s) && (r = 1); ++e < r; )
          for (var o = t[e], f3 = on(o), c2 = -1, l = f3.length; ++c2 < l; ) {
            var v2 = f3[c2], _3 = n2[v2];
            (_3 === i2 || bn(_3, Dt3[v2]) && !F3.call(n2, v2)) && (n2[v2] = o[v2]);
          }
        return n2;
      }), Bp = L3(function(n2) {
        return n2.push(i2, yu), cn2(ca, i2, n2);
      });
      function Gp(n2, t) {
        return Cs2(n2, x2(t, 3), $n);
      }
      function zp(n2, t) {
        return Cs2(n2, x2(t, 3), Xr);
      }
      function Kp(n2, t) {
        return n2 == null ? n2 : Jr(n2, x2(t, 3), on);
      }
      function Yp(n2, t) {
        return n2 == null ? n2 : Ys2(n2, x2(t, 3), on);
      }
      function Zp(n2, t) {
        return n2 && $n(n2, x2(t, 3));
      }
      function Jp(n2, t) {
        return n2 && Xr(n2, x2(t, 3));
      }
      function Xp(n2) {
        return n2 == null ? [] : ze3(n2, V3(n2));
      }
      function Qp(n2) {
        return n2 == null ? [] : ze3(n2, on(n2));
      }
      function Si(n2, t, e) {
        var r = n2 == null ? i2 : gt2(n2, t);
        return r === i2 ? e : r;
      }
      function Vp(n2, t) {
        return n2 != null && Ru(n2, t, Pc);
      }
      function Oi(n2, t) {
        return n2 != null && Ru(n2, t, Ac);
      }
      var kp = Au(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te2.call(t)), n2[t] = e;
      }, bi(fn)), jp = Au(function(n2, t, e) {
        t != null && typeof t.toString != "function" && (t = Te2.call(t)), F3.call(n2, t) ? n2[t].push(e) : n2[t] = [e];
      }, x2), nd = L3(ae2);
      function V3(n2) {
        return an2(n2) ? Fs2(n2) : jr(n2);
      }
      function on(n2) {
        return an2(n2) ? Fs2(n2, true) : Tc(n2);
      }
      function td(n2, t) {
        var e = {};
        return t = x2(t, 3), $n(n2, function(r, s, o) {
          zn2(e, t(r, s, o), r);
        }), e;
      }
      function ed(n2, t) {
        var e = {};
        return t = x2(t, 3), $n(n2, function(r, s, o) {
          zn2(e, s, t(r, s, o));
        }), e;
      }
      var rd = Ut2(function(n2, t, e) {
        Ke2(n2, t, e);
      }), ca = Ut2(function(n2, t, e, r) {
        Ke2(n2, t, e, r);
      }), id = Yn(function(n2, t) {
        var e = {};
        if (n2 == null)
          return e;
        var r = false;
        t = G3(t, function(o) {
          return o = it3(o, n2), r || (r = o.length > 1), o;
        }), Un(n2, pi(n2), e), r && (e = An(e, Ln2 | Fn2 | Ct2, kc));
        for (var s = t.length; s--; )
          si(e, t[s]);
        return e;
      });
      function sd(n2, t) {
        return ha(n2, ur2(x2(t)));
      }
      var ud = Yn(function(n2, t) {
        return n2 == null ? {} : Dc(n2, t);
      });
      function ha(n2, t) {
        if (n2 == null)
          return {};
        var e = G3(pi(n2), function(r) {
          return [r];
        });
        return t = x2(t), eu(n2, e, function(r, s) {
          return t(r, s[0]);
        });
      }
      function ad(n2, t, e) {
        t = it3(t, n2);
        var r = -1, s = t.length;
        for (s || (s = 1, n2 = i2); ++r < s; ) {
          var o = n2 == null ? i2 : n2[Wn(t[r])];
          o === i2 && (r = s, o = e), n2 = Jn2(o) ? o.call(n2) : o;
        }
        return n2;
      }
      function od(n2, t, e) {
        return n2 == null ? n2 : fe(n2, t, e);
      }
      function fd(n2, t, e, r) {
        return r = typeof r == "function" ? r : i2, n2 == null ? n2 : fe(n2, t, e, r);
      }
      var la = xu(V3), pa = xu(on);
      function cd(n2, t, e) {
        var r = O3(n2), s = r || ut3(n2) || Mt3(n2);
        if (t = x2(t, 4), e == null) {
          var o = n2 && n2.constructor;
          s ? e = r ? new o() : [] : z(n2) ? e = Jn2(o) ? $t3(Ne2(n2)) : {} : e = {};
        }
        return (s ? mn : $n)(n2, function(f3, c2, l) {
          return t(e, f3, c2, l);
        }), e;
      }
      function hd(n2, t) {
        return n2 == null ? true : si(n2, t);
      }
      function ld(n2, t, e) {
        return n2 == null ? n2 : au(n2, t, oi(e));
      }
      function pd(n2, t, e, r) {
        return r = typeof r == "function" ? r : i2, n2 == null ? n2 : au(n2, t, oi(e), r);
      }
      function qt3(n2) {
        return n2 == null ? [] : Mr(n2, V3(n2));
      }
      function dd(n2) {
        return n2 == null ? [] : Mr(n2, on(n2));
      }
      function gd(n2, t, e) {
        return e === i2 && (e = t, t = i2), e !== i2 && (e = xn2(e), e = e === e ? e : 0), t !== i2 && (t = xn2(t), t = t === t ? t : 0), dt3(xn2(n2), t, e);
      }
      function vd(n2, t, e) {
        return t = Xn(t), e === i2 ? (e = t, t = 0) : e = Xn(e), n2 = xn2(n2), Cc(n2, t, e);
      }
      function _d(n2, t, e) {
        if (e && typeof e != "boolean" && rn(n2, t, e) && (t = e = i2), e === i2 && (typeof t == "boolean" ? (e = t, t = i2) : typeof n2 == "boolean" && (e = n2, n2 = i2)), n2 === i2 && t === i2 ? (n2 = 0, t = 1) : (n2 = Xn(n2), t === i2 ? (t = n2, n2 = 0) : t = Xn(t)), n2 > t) {
          var r = n2;
          n2 = t, t = r;
        }
        if (e || n2 % 1 || t % 1) {
          var s = Us2();
          return nn(n2 + s * (t - n2 + Jo("1e-" + ((s + "").length - 1))), t);
        }
        return ei(n2, t);
      }
      var md = Wt2(function(n2, t, e) {
        return t = t.toLowerCase(), n2 + (e ? da(t) : t);
      });
      function da(n2) {
        return Ri(W3(n2).toLowerCase());
      }
      function ga(n2) {
        return n2 = W3(n2), n2 && n2.replace(wo, of).replace(Wo, "");
      }
      function wd(n2, t, e) {
        n2 = W3(n2), t = ln(t);
        var r = n2.length;
        e = e === i2 ? r : dt3(R2(e), 0, r);
        var s = e;
        return e -= t.length, e >= 0 && n2.slice(e, s) == t;
      }
      function Pd(n2) {
        return n2 = W3(n2), n2 && ka.test(n2) ? n2.replace(Yi2, ff) : n2;
      }
      function Ad(n2) {
        return n2 = W3(n2), n2 && io.test(n2) ? n2.replace(xr2, "\\$&") : n2;
      }
      var Cd = Wt2(function(n2, t, e) {
        return n2 + (e ? "-" : "") + t.toLowerCase();
      }), Id = Wt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toLowerCase();
      }), xd = mu("toLowerCase");
      function Ed(n2, t, e) {
        n2 = W3(n2), t = R2(t);
        var r = t ? Tt2(n2) : 0;
        if (!t || r >= t)
          return n2;
        var s = (t - r) / 2;
        return Ve2(We2(s), e) + n2 + Ve2(Ue2(s), e);
      }
      function yd(n2, t, e) {
        n2 = W3(n2), t = R2(t);
        var r = t ? Tt2(n2) : 0;
        return t && r < t ? n2 + Ve2(t - r, e) : n2;
      }
      function Sd(n2, t, e) {
        n2 = W3(n2), t = R2(t);
        var r = t ? Tt2(n2) : 0;
        return t && r < t ? Ve2(t - r, e) + n2 : n2;
      }
      function Od(n2, t, e) {
        return e || t == null ? t = 0 : t && (t = +t), Hf(W3(n2).replace(Er2, ""), t || 0);
      }
      function Rd(n2, t, e) {
        return (e ? rn(n2, t, e) : t === i2) ? t = 1 : t = R2(t), ri(W3(n2), t);
      }
      function bd() {
        var n2 = arguments, t = W3(n2[0]);
        return n2.length < 3 ? t : t.replace(n2[1], n2[2]);
      }
      var Td = Wt2(function(n2, t, e) {
        return n2 + (e ? "_" : "") + t.toLowerCase();
      });
      function Ld(n2, t, e) {
        return e && typeof e != "number" && rn(n2, t, e) && (t = e = i2), e = e === i2 ? Hn : e >>> 0, e ? (n2 = W3(n2), n2 && (typeof t == "string" || t != null && !yi(t)) && (t = ln(t), !t && bt3(n2)) ? st3(On(n2), 0, e) : n2.split(t, e)) : [];
      }
      var Dd = Wt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + Ri(t);
      });
      function Nd(n2, t, e) {
        return n2 = W3(n2), e = e == null ? 0 : dt3(R2(e), 0, n2.length), t = ln(t), n2.slice(e, e + t.length) == t;
      }
      function Hd(n2, t, e) {
        var r = a2.templateSettings;
        e && rn(n2, t, e) && (t = i2), n2 = W3(n2), t = fr2({}, t, r, Eu);
        var s = fr2({}, t.imports, r.imports, Eu), o = V3(s), f3 = Mr(s, o), c2, l, v2 = 0, _3 = t.interpolate || Ce2, m2 = "__p += '", P3 = Br((t.escape || Ce2).source + "|" + _3.source + "|" + (_3 === Zi2 ? lo : Ce2).source + "|" + (t.evaluate || Ce2).source + "|$", "g"), I2 = "//# sourceURL=" + (F3.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Go + "]") + `
`;
        n2.replace(P3, function(y4, D3, H3, dn, sn, gn) {
          return H3 || (H3 = dn), m2 += n2.slice(v2, gn).replace(Po, cf), D3 && (c2 = true, m2 += `' +
__e(` + D3 + `) +
'`), sn && (l = true, m2 += `';
` + sn + `;
__p += '`), H3 && (m2 += `' +
((__t = (` + H3 + `)) == null ? '' : __t) +
'`), v2 = gn + y4.length, y4;
        }), m2 += `';
`;
        var E4 = F3.call(t, "variable") && t.variable;
        if (!E4)
          m2 = `with (obj) {
` + m2 + `
}
`;
        else if (co.test(E4))
          throw new S4(En);
        m2 = (l ? m2.replace(Ja, "") : m2).replace(Xa, "$1").replace(Qa, "$1;"), m2 = "function(" + (E4 || "obj") + `) {
` + (E4 ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (c2 ? ", __e = _.escape" : "") + (l ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m2 + `return __p
}`;
        var b4 = _a(function() {
          return $3(o, I2 + "return " + m2).apply(i2, f3);
        });
        if (b4.source = m2, Ei(b4))
          throw b4;
        return b4;
      }
      function $d(n2) {
        return W3(n2).toLowerCase();
      }
      function Ud(n2) {
        return W3(n2).toUpperCase();
      }
      function Wd(n2, t, e) {
        if (n2 = W3(n2), n2 && (e || t === i2))
          return ys2(n2);
        if (!n2 || !(t = ln(t)))
          return n2;
        var r = On(n2), s = On(t), o = Ss2(r, s), f3 = Os2(r, s) + 1;
        return st3(r, o, f3).join("");
      }
      function Fd(n2, t, e) {
        if (n2 = W3(n2), n2 && (e || t === i2))
          return n2.slice(0, bs2(n2) + 1);
        if (!n2 || !(t = ln(t)))
          return n2;
        var r = On(n2), s = Os2(r, On(t)) + 1;
        return st3(r, 0, s).join("");
      }
      function Md(n2, t, e) {
        if (n2 = W3(n2), n2 && (e || t === i2))
          return n2.replace(Er2, "");
        if (!n2 || !(t = ln(t)))
          return n2;
        var r = On(n2), s = Ss2(r, On(t));
        return st3(r, s).join("");
      }
      function qd(n2, t) {
        var e = La, r = Da;
        if (z(t)) {
          var s = "separator" in t ? t.separator : s;
          e = "length" in t ? R2(t.length) : e, r = "omission" in t ? ln(t.omission) : r;
        }
        n2 = W3(n2);
        var o = n2.length;
        if (bt3(n2)) {
          var f3 = On(n2);
          o = f3.length;
        }
        if (e >= o)
          return n2;
        var c2 = e - Tt2(r);
        if (c2 < 1)
          return r;
        var l = f3 ? st3(f3, 0, c2).join("") : n2.slice(0, c2);
        if (s === i2)
          return l + r;
        if (f3 && (c2 += l.length - c2), yi(s)) {
          if (n2.slice(c2).search(s)) {
            var v2, _3 = l;
            for (s.global || (s = Br(s.source, W3(Ji2.exec(s)) + "g")), s.lastIndex = 0; v2 = s.exec(_3); )
              var m2 = v2.index;
            l = l.slice(0, m2 === i2 ? c2 : m2);
          }
        } else if (n2.indexOf(ln(s), c2) != c2) {
          var P3 = l.lastIndexOf(s);
          P3 > -1 && (l = l.slice(0, P3));
        }
        return l + r;
      }
      function Bd(n2) {
        return n2 = W3(n2), n2 && Va.test(n2) ? n2.replace(Ki2, _f) : n2;
      }
      var Gd = Wt2(function(n2, t, e) {
        return n2 + (e ? " " : "") + t.toUpperCase();
      }), Ri = mu("toUpperCase");
      function va(n2, t, e) {
        return n2 = W3(n2), t = e ? i2 : t, t === i2 ? lf(n2) ? Pf(n2) : ef(n2) : n2.match(t) || [];
      }
      var _a = L3(function(n2, t) {
        try {
          return cn2(n2, i2, t);
        } catch (e) {
          return Ei(e) ? e : new S4(e);
        }
      }), zd = Yn(function(n2, t) {
        return mn(t, function(e) {
          e = Wn(e), zn2(n2, e, Ii(n2[e], n2));
        }), n2;
      });
      function Kd(n2) {
        var t = n2 == null ? 0 : n2.length, e = x2();
        return n2 = t ? G3(n2, function(r) {
          if (typeof r[1] != "function")
            throw new wn(U5);
          return [e(r[0]), r[1]];
        }) : [], L3(function(r) {
          for (var s = -1; ++s < t; ) {
            var o = n2[s];
            if (cn2(o[0], this, r))
              return cn2(o[1], this, r);
          }
        });
      }
      function Yd(n2) {
        return _c(An(n2, Ln2));
      }
      function bi(n2) {
        return function() {
          return n2;
        };
      }
      function Zd(n2, t) {
        return n2 == null || n2 !== n2 ? t : n2;
      }
      var Jd = Pu(), Xd = Pu(true);
      function fn(n2) {
        return n2;
      }
      function Ti(n2) {
        return Qs2(typeof n2 == "function" ? n2 : An(n2, Ln2));
      }
      function Qd(n2) {
        return ks2(An(n2, Ln2));
      }
      function Vd(n2, t) {
        return js2(n2, An(t, Ln2));
      }
      var kd = L3(function(n2, t) {
        return function(e) {
          return ae2(e, n2, t);
        };
      }), jd = L3(function(n2, t) {
        return function(e) {
          return ae2(n2, e, t);
        };
      });
      function Li(n2, t, e) {
        var r = V3(t), s = ze3(t, r);
        e == null && !(z(t) && (s.length || !r.length)) && (e = t, t = n2, n2 = this, s = ze3(t, V3(t)));
        var o = !(z(e) && "chain" in e) || !!e.chain, f3 = Jn2(n2);
        return mn(s, function(c2) {
          var l = t[c2];
          n2[c2] = l, f3 && (n2.prototype[c2] = function() {
            var v2 = this.__chain__;
            if (o || v2) {
              var _3 = n2(this.__wrapped__), m2 = _3.__actions__ = un2(this.__actions__);
              return m2.push({ func: l, args: arguments, thisArg: n2 }), _3.__chain__ = v2, _3;
            }
            return l.apply(n2, jn2([this.value()], arguments));
          });
        }), n2;
      }
      function ng() {
        return k._ === this && (k._ = yf), this;
      }
      function Di() {
      }
      function tg(n2) {
        return n2 = R2(n2), L3(function(t) {
          return nu(t, n2);
        });
      }
      var eg = ci(G3), rg = ci(As2), ig = ci(Hr);
      function ma(n2) {
        return _i(n2) ? $r(Wn(n2)) : Nc(n2);
      }
      function sg(n2) {
        return function(t) {
          return n2 == null ? i2 : gt2(n2, t);
        };
      }
      var ug = Cu(), ag = Cu(true);
      function Ni2() {
        return [];
      }
      function Hi2() {
        return false;
      }
      function og() {
        return {};
      }
      function fg() {
        return "";
      }
      function cg() {
        return true;
      }
      function hg(n2, t) {
        if (n2 = R2(n2), n2 < 1 || n2 > Vn2)
          return [];
        var e = Hn, r = nn(n2, Hn);
        t = x2(t), n2 -= Hn;
        for (var s = Fr(r, t); ++e < n2; )
          t(e);
        return s;
      }
      function lg(n2) {
        return O3(n2) ? G3(n2, Wn) : pn(n2) ? [n2] : un2(Wu(W3(n2)));
      }
      function pg(n2) {
        var t = ++xf;
        return W3(n2) + t;
      }
      var dg = Qe2(function(n2, t) {
        return n2 + t;
      }, 0), gg = hi("ceil"), vg = Qe2(function(n2, t) {
        return n2 / t;
      }, 1), _g = hi("floor");
      function mg(n2) {
        return n2 && n2.length ? Ge2(n2, fn, Qr) : i2;
      }
      function wg(n2, t) {
        return n2 && n2.length ? Ge2(n2, x2(t, 2), Qr) : i2;
      }
      function Pg(n2) {
        return xs2(n2, fn);
      }
      function Ag(n2, t) {
        return xs2(n2, x2(t, 2));
      }
      function Cg(n2) {
        return n2 && n2.length ? Ge2(n2, fn, ni) : i2;
      }
      function Ig(n2, t) {
        return n2 && n2.length ? Ge2(n2, x2(t, 2), ni) : i2;
      }
      var xg = Qe2(function(n2, t) {
        return n2 * t;
      }, 1), Eg = hi("round"), yg = Qe2(function(n2, t) {
        return n2 - t;
      }, 0);
      function Sg(n2) {
        return n2 && n2.length ? Wr(n2, fn) : 0;
      }
      function Og(n2, t) {
        return n2 && n2.length ? Wr(n2, x2(t, 2)) : 0;
      }
      return a2.after = Ql, a2.ary = Xu, a2.assign = Up, a2.assignIn = fa, a2.assignInWith = fr2, a2.assignWith = Wp, a2.at = Fp, a2.before = Qu, a2.bind = Ii, a2.bindAll = zd, a2.bindKey = Vu, a2.castArray = op, a2.chain = Yu, a2.chunk = _h, a2.compact = mh, a2.concat = wh, a2.cond = Kd, a2.conforms = Yd, a2.constant = bi, a2.countBy = Sl, a2.create = Mp, a2.curry = ku, a2.curryRight = ju, a2.debounce = na, a2.defaults = qp, a2.defaultsDeep = Bp, a2.defer = Vl, a2.delay = kl, a2.difference = Ph, a2.differenceBy = Ah, a2.differenceWith = Ch, a2.drop = Ih, a2.dropRight = xh, a2.dropRightWhile = Eh, a2.dropWhile = yh, a2.fill = Sh, a2.filter = Rl, a2.flatMap = Ll, a2.flatMapDeep = Dl, a2.flatMapDepth = Nl, a2.flatten = Bu, a2.flattenDeep = Oh, a2.flattenDepth = Rh, a2.flip = jl, a2.flow = Jd, a2.flowRight = Xd, a2.fromPairs = bh, a2.functions = Xp, a2.functionsIn = Qp, a2.groupBy = Hl, a2.initial = Lh, a2.intersection = Dh, a2.intersectionBy = Nh, a2.intersectionWith = Hh, a2.invert = kp, a2.invertBy = jp, a2.invokeMap = Ul, a2.iteratee = Ti, a2.keyBy = Wl, a2.keys = V3, a2.keysIn = on, a2.map = rr2, a2.mapKeys = td, a2.mapValues = ed, a2.matches = Qd, a2.matchesProperty = Vd, a2.memoize = sr2, a2.merge = rd, a2.mergeWith = ca, a2.method = kd, a2.methodOf = jd, a2.mixin = Li, a2.negate = ur2, a2.nthArg = tg, a2.omit = id, a2.omitBy = sd, a2.once = np, a2.orderBy = Fl, a2.over = eg, a2.overArgs = tp, a2.overEvery = rg, a2.overSome = ig, a2.partial = xi, a2.partialRight = ta, a2.partition = Ml, a2.pick = ud, a2.pickBy = ha, a2.property = ma, a2.propertyOf = sg, a2.pull = Fh, a2.pullAll = zu, a2.pullAllBy = Mh, a2.pullAllWith = qh, a2.pullAt = Bh, a2.range = ug, a2.rangeRight = ag, a2.rearg = ep, a2.reject = Gl, a2.remove = Gh, a2.rest = rp, a2.reverse = Ai2, a2.sampleSize = Kl, a2.set = od, a2.setWith = fd, a2.shuffle = Yl, a2.slice = zh, a2.sortBy = Xl, a2.sortedUniq = Vh, a2.sortedUniqBy = kh, a2.split = Ld, a2.spread = ip, a2.tail = jh, a2.take = nl, a2.takeRight = tl, a2.takeRightWhile = el, a2.takeWhile = rl, a2.tap = ml, a2.throttle = sp, a2.thru = er3, a2.toArray = ua, a2.toPairs = la, a2.toPairsIn = pa, a2.toPath = lg, a2.toPlainObject = oa, a2.transform = cd, a2.unary = up, a2.union = il, a2.unionBy = sl, a2.unionWith = ul, a2.uniq = al, a2.uniqBy = ol, a2.uniqWith = fl, a2.unset = hd, a2.unzip = Ci, a2.unzipWith = Ku, a2.update = ld, a2.updateWith = pd, a2.values = qt3, a2.valuesIn = dd, a2.without = cl, a2.words = va, a2.wrap = ap, a2.xor = hl, a2.xorBy = ll, a2.xorWith = pl, a2.zip = dl, a2.zipObject = gl, a2.zipObjectDeep = vl, a2.zipWith = _l, a2.entries = la, a2.entriesIn = pa, a2.extend = fa, a2.extendWith = fr2, Li(a2, a2), a2.add = dg, a2.attempt = _a, a2.camelCase = md, a2.capitalize = da, a2.ceil = gg, a2.clamp = gd, a2.clone = fp, a2.cloneDeep = hp, a2.cloneDeepWith = lp, a2.cloneWith = cp, a2.conformsTo = pp, a2.deburr = ga, a2.defaultTo = Zd, a2.divide = vg, a2.endsWith = wd, a2.eq = bn, a2.escape = Pd, a2.escapeRegExp = Ad, a2.every = Ol, a2.find = bl, a2.findIndex = Mu, a2.findKey = Gp, a2.findLast = Tl, a2.findLastIndex = qu, a2.findLastKey = zp, a2.floor = _g, a2.forEach = Zu, a2.forEachRight = Ju, a2.forIn = Kp, a2.forInRight = Yp, a2.forOwn = Zp, a2.forOwnRight = Jp, a2.get = Si, a2.gt = dp, a2.gte = gp, a2.has = Vp, a2.hasIn = Oi, a2.head = Gu, a2.identity = fn, a2.includes = $l, a2.indexOf = Th, a2.inRange = vd, a2.invoke = nd, a2.isArguments = mt3, a2.isArray = O3, a2.isArrayBuffer = vp, a2.isArrayLike = an2, a2.isArrayLikeObject = Y, a2.isBoolean = _p, a2.isBuffer = ut3, a2.isDate = mp, a2.isElement = wp, a2.isEmpty = Pp, a2.isEqual = Ap, a2.isEqualWith = Cp, a2.isError = Ei, a2.isFinite = Ip, a2.isFunction = Jn2, a2.isInteger = ea, a2.isLength = ar2, a2.isMap = ra, a2.isMatch = xp, a2.isMatchWith = Ep, a2.isNaN = yp, a2.isNative = Sp, a2.isNil = Rp, a2.isNull = Op, a2.isNumber = ia, a2.isObject = z, a2.isObjectLike = K2, a2.isPlainObject = pe3, a2.isRegExp = yi, a2.isSafeInteger = bp, a2.isSet = sa, a2.isString = or2, a2.isSymbol = pn, a2.isTypedArray = Mt3, a2.isUndefined = Tp, a2.isWeakMap = Lp, a2.isWeakSet = Dp, a2.join = $h, a2.kebabCase = Cd, a2.last = In, a2.lastIndexOf = Uh, a2.lowerCase = Id, a2.lowerFirst = xd, a2.lt = Np, a2.lte = Hp, a2.max = mg, a2.maxBy = wg, a2.mean = Pg, a2.meanBy = Ag, a2.min = Cg, a2.minBy = Ig, a2.stubArray = Ni2, a2.stubFalse = Hi2, a2.stubObject = og, a2.stubString = fg, a2.stubTrue = cg, a2.multiply = xg, a2.nth = Wh, a2.noConflict = ng, a2.noop = Di, a2.now = ir2, a2.pad = Ed, a2.padEnd = yd, a2.padStart = Sd, a2.parseInt = Od, a2.random = _d, a2.reduce = ql, a2.reduceRight = Bl, a2.repeat = Rd, a2.replace = bd, a2.result = ad, a2.round = Eg, a2.runInContext = h3, a2.sample = zl, a2.size = Zl, a2.snakeCase = Td, a2.some = Jl, a2.sortedIndex = Kh, a2.sortedIndexBy = Yh, a2.sortedIndexOf = Zh, a2.sortedLastIndex = Jh, a2.sortedLastIndexBy = Xh, a2.sortedLastIndexOf = Qh, a2.startCase = Dd, a2.startsWith = Nd, a2.subtract = yg, a2.sum = Sg, a2.sumBy = Og, a2.template = Hd, a2.times = hg, a2.toFinite = Xn, a2.toInteger = R2, a2.toLength = aa, a2.toLower = $d, a2.toNumber = xn2, a2.toSafeInteger = $p, a2.toString = W3, a2.toUpper = Ud, a2.trim = Wd, a2.trimEnd = Fd, a2.trimStart = Md, a2.truncate = qd, a2.unescape = Bd, a2.uniqueId = pg, a2.upperCase = Gd, a2.upperFirst = Ri, a2.each = Zu, a2.eachRight = Ju, a2.first = Gu, Li(a2, function() {
        var n2 = {};
        return $n(a2, function(t, e) {
          F3.call(a2.prototype, e) || (n2[e] = t);
        }), n2;
      }(), { chain: false }), a2.VERSION = d2, mn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n2) {
        a2[n2].placeholder = a2;
      }), mn(["drop", "take"], function(n2, t) {
        N4.prototype[n2] = function(e) {
          e = e === i2 ? 1 : Q4(R2(e), 0);
          var r = this.__filtered__ && !t ? new N4(this) : this.clone();
          return r.__filtered__ ? r.__takeCount__ = nn(e, r.__takeCount__) : r.__views__.push({ size: nn(e, Hn), type: n2 + (r.__dir__ < 0 ? "Right" : "") }), r;
        }, N4.prototype[n2 + "Right"] = function(e) {
          return this.reverse()[n2](e).reverse();
        };
      }), mn(["filter", "map", "takeWhile"], function(n2, t) {
        var e = t + 1, r = e == Bi2 || e == Ua;
        N4.prototype[n2] = function(s) {
          var o = this.clone();
          return o.__iteratees__.push({ iteratee: x2(s, 3), type: e }), o.__filtered__ = o.__filtered__ || r, o;
        };
      }), mn(["head", "last"], function(n2, t) {
        var e = "take" + (t ? "Right" : "");
        N4.prototype[n2] = function() {
          return this[e](1).value()[0];
        };
      }), mn(["initial", "tail"], function(n2, t) {
        var e = "drop" + (t ? "" : "Right");
        N4.prototype[n2] = function() {
          return this.__filtered__ ? new N4(this) : this[e](1);
        };
      }), N4.prototype.compact = function() {
        return this.filter(fn);
      }, N4.prototype.find = function(n2) {
        return this.filter(n2).head();
      }, N4.prototype.findLast = function(n2) {
        return this.reverse().find(n2);
      }, N4.prototype.invokeMap = L3(function(n2, t) {
        return typeof n2 == "function" ? new N4(this) : this.map(function(e) {
          return ae2(e, n2, t);
        });
      }), N4.prototype.reject = function(n2) {
        return this.filter(ur2(x2(n2)));
      }, N4.prototype.slice = function(n2, t) {
        n2 = R2(n2);
        var e = this;
        return e.__filtered__ && (n2 > 0 || t < 0) ? new N4(e) : (n2 < 0 ? e = e.takeRight(-n2) : n2 && (e = e.drop(n2)), t !== i2 && (t = R2(t), e = t < 0 ? e.dropRight(-t) : e.take(t - n2)), e);
      }, N4.prototype.takeRightWhile = function(n2) {
        return this.reverse().takeWhile(n2).reverse();
      }, N4.prototype.toArray = function() {
        return this.take(Hn);
      }, $n(N4.prototype, function(n2, t) {
        var e = /^(?:filter|find|map|reject)|While$/.test(t), r = /^(?:head|last)$/.test(t), s = a2[r ? "take" + (t == "last" ? "Right" : "") : t], o = r || /^find/.test(t);
        s && (a2.prototype[t] = function() {
          var f3 = this.__wrapped__, c2 = r ? [1] : arguments, l = f3 instanceof N4, v2 = c2[0], _3 = l || O3(f3), m2 = function(D3) {
            var H3 = s.apply(a2, jn2([D3], c2));
            return r && P3 ? H3[0] : H3;
          };
          _3 && e && typeof v2 == "function" && v2.length != 1 && (l = _3 = false);
          var P3 = this.__chain__, I2 = !!this.__actions__.length, E4 = o && !P3, b4 = l && !I2;
          if (!o && _3) {
            f3 = b4 ? f3 : new N4(this);
            var y4 = n2.apply(f3, c2);
            return y4.__actions__.push({ func: er3, args: [m2], thisArg: i2 }), new Pn(y4, P3);
          }
          return E4 && b4 ? n2.apply(this, c2) : (y4 = this.thru(m2), E4 ? r ? y4.value()[0] : y4.value() : y4);
        });
      }), mn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n2) {
        var t = Oe[n2], e = /^(?:push|sort|unshift)$/.test(n2) ? "tap" : "thru", r = /^(?:pop|shift)$/.test(n2);
        a2.prototype[n2] = function() {
          var s = arguments;
          if (r && !this.__chain__) {
            var o = this.value();
            return t.apply(O3(o) ? o : [], s);
          }
          return this[e](function(f3) {
            return t.apply(O3(f3) ? f3 : [], s);
          });
        };
      }), $n(N4.prototype, function(n2, t) {
        var e = a2[t];
        if (e) {
          var r = e.name + "";
          F3.call(Ht2, r) || (Ht2[r] = []), Ht2[r].push({ name: t, func: e });
        }
      }), Ht2[Xe3(i2, ot2).name] = [{ name: "wrapper", func: i2 }], N4.prototype.clone = Bf, N4.prototype.reverse = Gf, N4.prototype.value = zf, a2.prototype.at = wl, a2.prototype.chain = Pl, a2.prototype.commit = Al, a2.prototype.next = Cl, a2.prototype.plant = xl, a2.prototype.reverse = El, a2.prototype.toJSON = a2.prototype.valueOf = a2.prototype.value = yl, a2.prototype.first = a2.prototype.head, ne2 && (a2.prototype[ne2] = Il), a2;
    }, Lt3 = Af();
    ct3 ? ((ct3.exports = Lt3)._ = Lt3, Tr2._ = Lt3) : k._ = Lt3;
  }).call(ge2);
})(Ui, Ui.exports);
var qg = Object.defineProperty;
var Bg = Object.defineProperties;
var Gg = Object.getOwnPropertyDescriptors;
var Ea = Object.getOwnPropertySymbols;
var zg = Object.prototype.hasOwnProperty;
var Kg = Object.prototype.propertyIsEnumerable;
var ya = (C2, u3, i2) => u3 in C2 ? qg(C2, u3, { enumerable: true, configurable: true, writable: true, value: i2 }) : C2[u3] = i2;
var cr2 = (C2, u3) => {
  for (var i2 in u3 || (u3 = {}))
    zg.call(u3, i2) && ya(C2, i2, u3[i2]);
  if (Ea)
    for (var i2 of Ea(u3))
      Kg.call(u3, i2) && ya(C2, i2, u3[i2]);
  return C2;
};
var Yg = (C2, u3) => Bg(C2, Gg(u3));
function Gt3(C2, u3, i2) {
  var d2;
  const w3 = ve(C2);
  return ((d2 = u3.rpcMap) == null ? void 0 : d2[w3.reference]) || `${Mg}?chainId=${w3.namespace}:${w3.reference}&projectId=${i2}`;
}
function Pt2(C2) {
  return C2.includes(":") ? C2.split(":")[1] : C2;
}
function Sa(C2) {
  return C2.map((u3) => `${u3.split(":")[0]}:${u3.split(":")[1]}`);
}
function Zg(C2, u3) {
  const i2 = Object.keys(u3.namespaces).filter((w3) => w3.includes(C2));
  if (!i2.length)
    return [];
  const d2 = [];
  return i2.forEach((w3) => {
    const T = u3.namespaces[w3].accounts;
    d2.push(...T);
  }), d2;
}
function Jg(C2 = {}, u3 = {}) {
  const i2 = Oa(C2), d2 = Oa(u3);
  return Ui.exports.merge(i2, d2);
}
function Oa(C2) {
  var u3, i2, d2, w3;
  const T = {};
  if (!B(C2))
    return T;
  for (const [U5, En] of Object.entries(C2)) {
    const zt3 = oe(U5) ? [U5] : En.chains, pr = En.methods || [], At3 = En.events || [], Ln2 = En.rpcMap || {}, Fn2 = Xe(U5);
    T[Fn2] = Yg(cr2(cr2({}, T[Fn2]), En), { chains: S(zt3, (u3 = T[Fn2]) == null ? void 0 : u3.chains), methods: S(pr, (i2 = T[Fn2]) == null ? void 0 : i2.methods), events: S(At3, (d2 = T[Fn2]) == null ? void 0 : d2.events), rpcMap: cr2(cr2({}, Ln2), (w3 = T[Fn2]) == null ? void 0 : w3.rpcMap) });
  }
  return T;
}
function Xg(C2) {
  return C2.includes(":") ? C2.split(":")[2] : C2;
}
function Qg(C2) {
  const u3 = {};
  for (const [i2, d2] of Object.entries(C2)) {
    const w3 = d2.methods || [], T = d2.events || [], U5 = d2.accounts || [], En = oe(i2) ? [i2] : d2.chains ? d2.chains : Sa(d2.accounts);
    u3[i2] = { chains: En, methods: w3, events: T, accounts: U5 };
  }
  return u3;
}
function Wi2(C2) {
  return typeof C2 == "number" ? C2 : C2.includes("0x") ? parseInt(C2, 16) : C2.includes(":") ? Number(C2.split(":")[1]) : Number(C2);
}
var Ra = {};
var J2 = (C2) => Ra[C2];
var Fi = (C2, u3) => {
  Ra[C2] = u3;
};
var Vg = class {
  constructor(u3) {
    this.name = "polkadot", this.namespace = u3.namespace, this.events = J2("events"), this.client = J2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(at3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Pt2(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || Gt3(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new esm_default2(d2, J2("disableProviderPing")));
  }
};
var kg = class {
  constructor(u3) {
    this.name = "eip155", this.namespace = u3.namespace, this.events = J2("events"), this.client = J2("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(u3) {
    switch (u3.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(u3);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(u3.request.method) ? await this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(parseInt(u3), i2), this.chainId = parseInt(u3), this.events.emit(at3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || Gt3(`${this.name}:${u3}`, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new HttpConnection(d2, J2("disableProviderPing")));
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = parseInt(Pt2(i2));
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const u3 = this.chainId, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  async handleSwitchChain(u3) {
    var i2, d2;
    let w3 = u3.request.params ? (i2 = u3.request.params[0]) == null ? void 0 : i2.chainId : "0x0";
    w3 = w3.startsWith("0x") ? w3 : `0x${w3}`;
    const T = parseInt(w3, 16);
    if (this.isChainApproved(T))
      this.setDefaultChain(`${T}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: u3.topic, request: { method: u3.request.method, params: [{ chainId: w3 }] }, chainId: (d2 = this.namespace.chains) == null ? void 0 : d2[0] }), this.setDefaultChain(`${T}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${T}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(u3) {
    return this.namespace.chains.includes(`${this.name}:${u3}`);
  }
};
var jg = class {
  constructor(u3) {
    this.name = "solana", this.namespace = u3.namespace, this.events = J2("events"), this.client = J2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(at3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Pt2(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || Gt3(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new esm_default2(d2, J2("disableProviderPing")));
  }
};
var nv = class {
  constructor(u3) {
    this.name = "cosmos", this.namespace = u3.namespace, this.events = J2("events"), this.client = J2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(at3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Pt2(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || Gt3(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new esm_default2(d2, J2("disableProviderPing")));
  }
};
var tv = class {
  constructor(u3) {
    this.name = "cip34", this.namespace = u3.namespace, this.events = J2("events"), this.client = J2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(at3.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      const d2 = this.getCardanoRPCUrl(i2), w3 = Pt2(i2);
      u3[w3] = this.createHttpProvider(w3, d2);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  getCardanoRPCUrl(u3) {
    const i2 = this.namespace.rpcMap;
    if (i2)
      return i2[u3];
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || this.getCardanoRPCUrl(u3);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new esm_default2(d2, J2("disableProviderPing")));
  }
};
var ev = class {
  constructor(u3) {
    this.name = "elrond", this.namespace = u3.namespace, this.events = J2("events"), this.client = J2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(at3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Pt2(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || Gt3(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new esm_default2(d2, J2("disableProviderPing")));
  }
};
var rv = class {
  constructor(u3) {
    this.name = "multiversx", this.namespace = u3.namespace, this.events = J2("events"), this.client = J2("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(u3) {
    this.namespace = Object.assign(this.namespace, u3);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(u3) {
    return this.namespace.methods.includes(u3.request.method) ? this.client.request(u3) : this.getHttpProvider().request(u3.request);
  }
  setDefaultChain(u3, i2) {
    this.httpProviders[u3] || this.setHttpProvider(u3, i2), this.chainId = u3, this.events.emit(at3.DEFAULT_CHAIN_CHANGED, `${this.name}:${u3}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const u3 = this.namespace.chains[0];
    if (!u3)
      throw new Error("ChainId not found");
    return u3.split(":")[1];
  }
  getAccounts() {
    const u3 = this.namespace.accounts;
    return u3 ? [...new Set(u3.filter((i2) => i2.split(":")[1] === this.chainId.toString()).map((i2) => i2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const u3 = {};
    return this.namespace.chains.forEach((i2) => {
      var d2;
      const w3 = Pt2(i2);
      u3[w3] = this.createHttpProvider(w3, (d2 = this.namespace.rpcMap) == null ? void 0 : d2[i2]);
    }), u3;
  }
  getHttpProvider() {
    const u3 = `${this.name}:${this.chainId}`, i2 = this.httpProviders[u3];
    if (typeof i2 > "u")
      throw new Error(`JSON-RPC provider for ${u3} not found`);
    return i2;
  }
  setHttpProvider(u3, i2) {
    const d2 = this.createHttpProvider(u3, i2);
    d2 && (this.httpProviders[u3] = d2);
  }
  createHttpProvider(u3, i2) {
    const d2 = i2 || Gt3(u3, this.namespace, this.client.core.projectId);
    if (!d2)
      throw new Error(`No RPC url provided for chainId: ${u3}`);
    return new JsonRpcProvider(new esm_default2(d2, J2("disableProviderPing")));
  }
};
var iv = Object.defineProperty;
var sv = Object.defineProperties;
var uv = Object.getOwnPropertyDescriptors;
var ba = Object.getOwnPropertySymbols;
var av = Object.prototype.hasOwnProperty;
var ov = Object.prototype.propertyIsEnumerable;
var Ta = (C2, u3, i2) => u3 in C2 ? iv(C2, u3, { enumerable: true, configurable: true, writable: true, value: i2 }) : C2[u3] = i2;
var hr2 = (C2, u3) => {
  for (var i2 in u3 || (u3 = {}))
    av.call(u3, i2) && Ta(C2, i2, u3[i2]);
  if (ba)
    for (var i2 of ba(u3))
      ov.call(u3, i2) && Ta(C2, i2, u3[i2]);
  return C2;
};
var Mi = (C2, u3) => sv(C2, uv(u3));
var lr = class _lr {
  constructor(u3) {
    this.events = new import_events8.default(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = false, this.maxPairingAttempts = 10, this.disableProviderPing = false, this.providerOpts = u3, this.logger = typeof (u3 == null ? void 0 : u3.logger) < "u" && typeof (u3 == null ? void 0 : u3.logger) != "string" ? u3.logger : (0, import_logger3.pino)((0, import_logger3.getDefaultLoggerOptions)({ level: (u3 == null ? void 0 : u3.logger) || Ia })), this.disableProviderPing = (u3 == null ? void 0 : u3.disableProviderPing) || false;
  }
  static async init(u3) {
    const i2 = new _lr(u3);
    return await i2.initialize(), i2;
  }
  async request(u3, i2) {
    const [d2, w3] = this.validateChain(i2);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(d2).request({ request: hr2({}, u3), chainId: `${d2}:${w3}`, topic: this.session.topic });
  }
  sendAsync(u3, i2, d2) {
    this.request(u3, d2).then((w3) => i2(null, w3)).catch((w3) => i2(w3, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var u3;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (u3 = this.session) == null ? void 0 : u3.topic, reason: U("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(u3) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(u3), await this.cleanupPendingPairings(), !u3.skipPairing)
      return await this.pair(u3.pairingTopic);
  }
  on(u3, i2) {
    this.events.on(u3, i2);
  }
  once(u3, i2) {
    this.events.once(u3, i2);
  }
  removeListener(u3, i2) {
    this.events.removeListener(u3, i2);
  }
  off(u3, i2) {
    this.events.off(u3, i2);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(u3) {
    this.shouldAbortPairingAttempt = false;
    let i2 = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (i2 >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: d2, approval: w3 } = await this.client.connect({ pairingTopic: u3, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      d2 && (this.uri = d2, this.events.emit("display_uri", d2)), await w3().then((T) => {
        this.session = T, this.namespaces || (this.namespaces = Qg(T.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((T) => {
        if (T.message !== oe3)
          throw T;
        i2++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(u3, i2) {
    try {
      if (!this.session)
        return;
      const [d2, w3] = this.validateChain(u3);
      this.getProvider(d2).setDefaultChain(w3, i2);
    } catch (d2) {
      if (!/Please call connect/.test(d2.message))
        throw d2;
    }
  }
  async cleanupPendingPairings(u3 = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const i2 = this.client.pairing.getAll();
    if (j(i2)) {
      for (const d2 of i2)
        u3.deletePairings ? this.client.core.expirer.set(d2.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(d2.topic);
      this.logger.info(`Inactive pairings cleared: ${i2.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = true;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const u3 = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[u3]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await Q2.init({ logger: this.providerOpts.logger || Ia, relayUrl: this.providerOpts.relayUrl || Ug, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const u3 = [...new Set(Object.keys(this.session.namespaces).map((i2) => Xe(i2)))];
    Fi("client", this.client), Fi("events", this.events), Fi("disableProviderPing", this.disableProviderPing), u3.forEach((i2) => {
      if (!this.session)
        return;
      const d2 = Zg(i2, this.session), w3 = Sa(d2), T = Jg(this.namespaces, this.optionalNamespaces), U5 = Mi(hr2({}, T[i2]), { accounts: d2, chains: w3 });
      switch (i2) {
        case "eip155":
          this.rpcProviders[i2] = new kg({ namespace: U5 });
          break;
        case "solana":
          this.rpcProviders[i2] = new jg({ namespace: U5 });
          break;
        case "cosmos":
          this.rpcProviders[i2] = new nv({ namespace: U5 });
          break;
        case "polkadot":
          this.rpcProviders[i2] = new Vg({ namespace: U5 });
          break;
        case "cip34":
          this.rpcProviders[i2] = new tv({ namespace: U5 });
          break;
        case "elrond":
          this.rpcProviders[i2] = new ev({ namespace: U5 });
          break;
        case "multiversx":
          this.rpcProviders[i2] = new rv({ namespace: U5 });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (u3) => {
      this.events.emit("session_ping", u3);
    }), this.client.on("session_event", (u3) => {
      const { params: i2 } = u3, { event: d2 } = i2;
      if (d2.name === "accountsChanged") {
        const w3 = d2.data;
        w3 && j(w3) && this.events.emit("accountsChanged", w3.map(Xg));
      } else if (d2.name === "chainChanged") {
        const w3 = i2.chainId, T = i2.event.data, U5 = Xe(w3), En = Wi2(w3) !== Wi2(T) ? `${U5}:${Wi2(T)}` : w3;
        this.onChainChanged(En);
      } else
        this.events.emit(d2.name, d2.data);
      this.events.emit("session_event", u3);
    }), this.client.on("session_update", ({ topic: u3, params: i2 }) => {
      var d2;
      const { namespaces: w3 } = i2, T = (d2 = this.client) == null ? void 0 : d2.session.get(u3);
      this.session = Mi(hr2({}, T), { namespaces: w3 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: u3, params: i2 });
    }), this.client.on("session_delete", async (u3) => {
      await this.cleanup(), this.events.emit("session_delete", u3), this.events.emit("disconnect", Mi(hr2({}, U("USER_DISCONNECTED")), { data: u3.topic }));
    }), this.on(at3.DEFAULT_CHAIN_CHANGED, (u3) => {
      this.onChainChanged(u3, true);
    });
  }
  getProvider(u3) {
    if (!this.rpcProviders[u3])
      throw new Error(`Provider not found: ${u3}`);
    return this.rpcProviders[u3];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((u3) => {
      var i2;
      this.getProvider(u3).updateNamespace((i2 = this.session) == null ? void 0 : i2.namespaces[u3]);
    });
  }
  setNamespaces(u3) {
    const { namespaces: i2, optionalNamespaces: d2, sessionProperties: w3 } = u3;
    i2 && Object.keys(i2).length && (this.namespaces = i2), d2 && Object.keys(d2).length && (this.optionalNamespaces = d2), this.sessionProperties = w3, this.persist("namespaces", i2), this.persist("optionalNamespaces", d2);
  }
  validateChain(u3) {
    const [i2, d2] = (u3 == null ? void 0 : u3.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [i2, d2];
    if (i2 && !Object.keys(this.namespaces || {}).map((U5) => Xe(U5)).includes(i2))
      throw new Error(`Namespace '${i2}' is not configured. Please call connect() first with namespace config.`);
    if (i2 && d2)
      return [i2, d2];
    const w3 = Xe(Object.keys(this.namespaces)[0]), T = this.rpcProviders[w3].getDefaultChain();
    return [w3, T];
  }
  async requestAccounts() {
    const [u3] = this.validateChain();
    return await this.getProvider(u3).requestAccounts();
  }
  onChainChanged(u3, i2 = false) {
    var d2;
    if (!this.namespaces)
      return;
    const [w3, T] = this.validateChain(u3);
    i2 || this.getProvider(w3).setDefaultChain(T), ((d2 = this.namespaces[w3]) != null ? d2 : this.namespaces[`${w3}:${T}`]).defaultChain = T, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", T);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: true });
  }
  persist(u3, i2) {
    this.client.core.storage.setItem(`${xa}/${u3}`, i2);
  }
  async getFromStore(u3) {
    return await this.client.core.storage.getItem(`${xa}/${u3}`);
  }
};
var fv = lr;

// node_modules/@walletconnect/ethereum-provider/dist/index.es.js
var P2 = "wc";
var S3 = "ethereum_provider";
var $2 = `${P2}@2:${S3}:`;
var j3 = "https://rpc.walletconnect.com/v1/";
var u2 = ["eth_sendTransaction", "personal_sign"];
var E3 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"];
var m = ["chainChanged", "accountsChanged"];
var _2 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var N3 = Object.defineProperty;
var q2 = Object.defineProperties;
var D2 = Object.getOwnPropertyDescriptors;
var y3 = Object.getOwnPropertySymbols;
var U4 = Object.prototype.hasOwnProperty;
var Q3 = Object.prototype.propertyIsEnumerable;
var O2 = (a2, t, s) => t in a2 ? N3(a2, t, { enumerable: true, configurable: true, writable: true, value: s }) : a2[t] = s;
var p3 = (a2, t) => {
  for (var s in t || (t = {}))
    U4.call(t, s) && O2(a2, s, t[s]);
  if (y3)
    for (var s of y3(t))
      Q3.call(t, s) && O2(a2, s, t[s]);
  return a2;
};
var M2 = (a2, t) => q2(a2, D2(t));
function g4(a2) {
  return Number(a2[0].split(":")[1]);
}
function f2(a2) {
  return `0x${a2.toString(16)}`;
}
function L2(a2) {
  const { chains: t, optionalChains: s, methods: i2, optionalMethods: n2, events: e, optionalEvents: h3, rpcMap: c2 } = a2;
  if (!j(t))
    throw new Error("Invalid chains");
  const o = { chains: t, methods: i2 || u2, events: e || m, rpcMap: p3({}, t.length ? { [g4(t)]: c2[g4(t)] } : {}) }, r = e == null ? void 0 : e.filter((l) => !m.includes(l)), d2 = i2 == null ? void 0 : i2.filter((l) => !u2.includes(l));
  if (!s && !h3 && !n2 && !(r != null && r.length) && !(d2 != null && d2.length))
    return { required: t.length ? o : void 0 };
  const C2 = (r == null ? void 0 : r.length) && (d2 == null ? void 0 : d2.length) || !s, I2 = { chains: [...new Set(C2 ? o.chains.concat(s || []) : s)], methods: [...new Set(o.methods.concat(n2 != null && n2.length ? n2 : E3))], events: [...new Set(o.events.concat(h3 != null && h3.length ? h3 : _2))], rpcMap: c2 };
  return { required: t.length ? o : void 0, optional: s.length ? I2 : void 0 };
}
var v = class _v {
  constructor() {
    this.events = new import_events9.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = $2, this.on = (t, s) => (this.events.on(t, s), this), this.once = (t, s) => (this.events.once(t, s), this), this.removeListener = (t, s) => (this.events.removeListener(t, s), this), this.off = (t, s) => (this.events.off(t, s), this), this.parseAccount = (t) => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {};
  }
  static async init(t) {
    const s = new _v();
    return await s.initialize(t), s;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, s) {
    this.signer.sendAsync(t, s, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : false;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : false;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: s, optional: i2 } = L2(this.rpc);
    try {
      const n2 = await new Promise(async (h3, c2) => {
        var o;
        this.rpc.showQrModal && ((o = this.modal) == null || o.subscribeModal((r) => {
          !r.open && !this.signer.session && (this.signer.abortPairingAttempt(), c2(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(M2(p3({ namespaces: p3({}, s && { [this.namespace]: s }) }, i2 && { optionalNamespaces: { [this.namespace]: i2 } }), { pairingTopic: t == null ? void 0 : t.pairingTopic })).then((r) => {
          h3(r);
        }).catch((r) => {
          c2(new Error(r.message));
        });
      });
      if (!n2)
        return;
      const e = Rn(n2.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e), this.setAccounts(e), this.events.emit("connect", { chainId: f2(this.chainId) });
    } catch (n2) {
      throw this.signer.logger.error(n2), n2;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return true;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: s } = t, { event: i2 } = s;
      i2.name === "accountsChanged" ? (this.accounts = this.parseAccounts(i2.data), this.events.emit("accountsChanged", this.accounts)) : i2.name === "chainChanged" ? this.setChainId(this.formatChainId(i2.data)) : this.events.emit(i2.name, i2.data), this.events.emit("session_event", t);
    }), this.signer.on("chainChanged", (t) => {
      const s = parseInt(t);
      this.chainId = s, this.events.emit("chainChanged", f2(this.chainId)), this.persist();
    }), this.signer.on("session_update", (t) => {
      this.events.emit("session_update", t);
    }), this.signer.on("session_delete", (t) => {
      this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", M2(p3({}, U("USER_DISCONNECTED")), { data: t.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (t) => {
      var s, i2;
      this.rpc.showQrModal && ((s = this.modal) == null || s.closeModal(), (i2 = this.modal) == null || i2.openModal({ uri: t })), this.events.emit("display_uri", t);
    });
  }
  switchEthereumChain(t) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : false;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const s = t.filter((i2) => this.isCompatibleChainId(i2)).map((i2) => this.parseChainId(i2));
    s.length && (this.chainId = s[0], this.events.emit("chainChanged", f2(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const s = this.parseChainId(t);
      this.chainId = s, this.switchEthereumChain(s);
    }
  }
  parseAccountId(t) {
    const [s, i2, n2] = t.split(":");
    return { chainId: `${s}:${i2}`, address: n2 };
  }
  setAccounts(t) {
    this.accounts = t.filter((s) => this.parseChainId(this.parseAccountId(s).chainId) === this.chainId).map((s) => this.parseAccountId(s).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var s, i2;
    const n2 = (s = t == null ? void 0 : t.chains) != null ? s : [], e = (i2 = t == null ? void 0 : t.optionalChains) != null ? i2 : [], h3 = n2.concat(e);
    if (!h3.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const c2 = n2.length ? (t == null ? void 0 : t.methods) || u2 : [], o = n2.length ? (t == null ? void 0 : t.events) || m : [], r = (t == null ? void 0 : t.optionalMethods) || [], d2 = (t == null ? void 0 : t.optionalEvents) || [], C2 = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(h3, t.projectId), I2 = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return { chains: n2 == null ? void 0 : n2.map((l) => this.formatChainId(l)), optionalChains: e.map((l) => this.formatChainId(l)), methods: c2, events: o, optionalMethods: r, optionalEvents: d2, rpcMap: C2, showQrModal: !!(t != null && t.showQrModal), qrModalOptions: I2, projectId: t.projectId, metadata: t.metadata };
  }
  buildRpcMap(t, s) {
    const i2 = {};
    return t.forEach((n2) => {
      i2[n2] = this.getRpcUrl(n2, s);
    }), i2;
  }
  async initialize(t) {
    if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? g4(this.rpc.chains) : g4(this.rpc.optionalChains), this.signer = await fv.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: t.disableProviderPing, relayUrl: t.relayUrl, storageOptions: t.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let s;
      try {
        const { WalletConnectModal: i2 } = await import("./dist-XJJII5VI.js");
        s = i2;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (s)
        try {
          this.modal = new s(p3({ walletConnectVersion: 2, projectId: this.rpc.projectId, standaloneChains: this.rpc.chains }, this.rpc.qrModalOptions));
        } catch (i2) {
          throw this.signer.logger.error(i2), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(t) {
    if (!t)
      return;
    const { chains: s, optionalChains: i2, rpcMap: n2 } = t;
    s && j(s) && (this.rpc.chains = s.map((e) => this.formatChainId(e)), s.forEach((e) => {
      this.rpc.rpcMap[e] = (n2 == null ? void 0 : n2[e]) || this.getRpcUrl(e);
    })), i2 && j(i2) && (this.rpc.optionalChains = [], this.rpc.optionalChains = i2 == null ? void 0 : i2.map((e) => this.formatChainId(e)), i2.forEach((e) => {
      this.rpc.rpcMap[e] = (n2 == null ? void 0 : n2[e]) || this.getRpcUrl(e);
    }));
  }
  getRpcUrl(t, s) {
    var i2;
    return ((i2 = this.rpc.rpcMap) == null ? void 0 : i2[t]) || `${j3}?chainId=eip155:${t}&projectId=${s || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), s = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : s == null ? void 0 : s.accounts), this.setAccounts(s == null ? void 0 : s.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map((s) => this.parseAccount(s));
  }
};
var G2 = v;
export {
  G2 as EthereumProvider,
  _2 as OPTIONAL_EVENTS,
  E3 as OPTIONAL_METHODS,
  m as REQUIRED_EVENTS,
  u2 as REQUIRED_METHODS,
  v as default
};
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@walletconnect/universal-provider/dist/index.es.js:
  (**
  * @license
  * Lodash <https://lodash.com/>
  * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
  * Released under MIT license <https://lodash.com/license>
  * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
  * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  *)
*/
//# sourceMappingURL=index.es-E6UK33MU.js.map
