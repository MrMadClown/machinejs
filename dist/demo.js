/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/LandScape.ts":
/*!***************************!*\
  !*** ./demo/LandScape.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LandScape = exports.LandScapeStates = void 0;
var LandScapeStates;
(function (LandScapeStates) {
    LandScapeStates["idle"] = "idle";
    LandScapeStates["shine"] = "shine";
    LandScapeStates["rain"] = "rain";
})(LandScapeStates = exports.LandScapeStates || (exports.LandScapeStates = {}));
var LandScape = (function () {
    function LandScape() {
        this.state = null;
        this.groundwater = 0;
        this.oxygen = 0;
        this.shine = new ShineAction(this);
        this.rain = new RainAction(this);
    }
    LandScape.prototype.isShining = function () {
        return this.state.identifier == "shine";
    };
    LandScape.prototype.hasWater = function () {
        return this.groundwater > 0;
    };
    LandScape.prototype.giveWater = function () {
        this.groundwater -= 1;
        return 1;
    };
    LandScape.prototype.oxygenate = function () {
        this.oxygen += 1;
    };
    return LandScape;
}());
exports.LandScape = LandScape;
LandScapeStates.idle, LandScapeStates.shine, LandScapeStates.rain;
var RainAction = (function () {
    function RainAction(landScape) {
        this.landScape = landScape;
    }
    RainAction.prototype.can = function () {
        return Math.random() > 0.5;
    };
    RainAction.prototype.run = function () {
        this.landScape.groundwater += 1;
    };
    return RainAction;
}());
var ShineAction = (function () {
    function ShineAction(landScape) {
        this.landScape = landScape;
    }
    ShineAction.prototype.can = function () {
        return Math.random() > 0.1;
    };
    ShineAction.prototype.run = function () {
    };
    return ShineAction;
}());


/***/ }),

/***/ "./demo/Oak.ts":
/*!*********************!*\
  !*** ./demo/Oak.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Oak = exports.OakStates = void 0;
var OakStates;
(function (OakStates) {
    OakStates["idle"] = "idle";
    OakStates["grow"] = "grow";
    OakStates["makeEnergy"] = "makeEnergy";
    OakStates["photosynthesise"] = "photosynthesise";
    OakStates["emitOxygen"] = "emitOxygen";
    OakStates["gatherSun"] = "gatherSun";
    OakStates["gatherWater"] = "gatherWater";
})(OakStates = exports.OakStates || (exports.OakStates = {}));
var Oak = (function () {
    function Oak(landscape) {
        this.state = null;
        this.landscape = landscape;
        this.height = 1;
        this.energy = false;
        this.oxygen = false;
        this.water = 0;
        this.sun = 0;
        this.grow = new GrowAction(this);
        this.makeEnergy = new MakeEnergyAction(this);
        this.photosynthesise = new PhotosynthesiseAction(this);
        this.emitOxygen = new EmitOxygenAction(this);
        this.gatherSun = new GatherSunAction(this);
        this.gatherWater = new GatherWaterAction(this);
    }
    Oak.prototype.hasSun = function () {
        return this.sun > 0;
    };
    Oak.prototype.hasWater = function () {
        return this.water > 0;
    };
    return Oak;
}());
exports.Oak = Oak;
OakStates.idle, OakStates.grow, OakStates.makeEnergy, OakStates.photosynthesise, OakStates.emitOxygen, OakStates.gatherSun, OakStates.gatherWater;
var MakeEnergyAction = (function () {
    function MakeEnergyAction(oak) {
        this.oak = oak;
    }
    MakeEnergyAction.prototype.can = function () {
        return this.oak.hasSun() && this.oak.hasWater();
    };
    MakeEnergyAction.prototype.run = function () {
        this.oak.sun -= 1;
        this.oak.water -= 1;
        this.oak.energy = true;
    };
    return MakeEnergyAction;
}());
var GrowAction = (function () {
    function GrowAction(oak) {
        this.oak = oak;
    }
    GrowAction.prototype.can = function () {
        return this.oak.energy;
    };
    GrowAction.prototype.run = function () {
        this.oak.energy = false;
        this.oak.height += 1;
    };
    return GrowAction;
}());
var PhotosynthesiseAction = (function () {
    function PhotosynthesiseAction(oak) {
        this.oak = oak;
    }
    PhotosynthesiseAction.prototype.can = function () {
        return this.oak.hasSun() && this.oak.hasWater();
    };
    PhotosynthesiseAction.prototype.run = function () {
    };
    return PhotosynthesiseAction;
}());
var EmitOxygenAction = (function () {
    function EmitOxygenAction(oak) {
        this.oak = oak;
    }
    EmitOxygenAction.prototype.can = function () {
        return this.oak.oxygen;
    };
    EmitOxygenAction.prototype.run = function () {
        this.oak.oxygen = false;
        this.oak.landscape.oxygenate();
    };
    return EmitOxygenAction;
}());
var GatherSunAction = (function () {
    function GatherSunAction(oak) {
        this.oak = oak;
    }
    GatherSunAction.prototype.can = function () {
        return this.oak.landscape.isShining();
    };
    GatherSunAction.prototype.run = function () {
        this.oak.sun += 1;
    };
    return GatherSunAction;
}());
var GatherWaterAction = (function () {
    function GatherWaterAction(oak) {
        this.oak = oak;
    }
    GatherWaterAction.prototype.can = function () {
        return this.oak.landscape.hasWater();
    };
    GatherWaterAction.prototype.run = function () {
        this.oak.water += this.oak.landscape.giveWater();
    };
    return GatherWaterAction;
}());


/***/ }),

/***/ "./demo/index.ts":
/*!***********************!*\
  !*** ./demo/index.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LandScape_1 = __webpack_require__(/*! ./LandScape */ "./demo/LandScape.ts");
var Oak_1 = __webpack_require__(/*! ./Oak */ "./demo/Oak.ts");
var Machine_1 = __webpack_require__(/*! ../src/Machine */ "./src/Machine.ts");
var BaseNode_1 = __webpack_require__(/*! ../src/Node/BaseNode */ "./src/Node/BaseNode.ts");
var oakJson = {
    identifier: Oak_1.OakStates.idle, strategy: BaseNode_1.Strategy.prioritised,
    children: [
        {
            identifier: Oak_1.OakStates.photosynthesise, strategy: BaseNode_1.Strategy.sequential,
            children: [
                { identifier: Oak_1.OakStates.makeEnergy },
                { identifier: Oak_1.OakStates.grow },
                { identifier: Oak_1.OakStates.emitOxygen },
            ]
        },
        { identifier: Oak_1.OakStates.gatherSun },
        { identifier: Oak_1.OakStates.gatherWater },
    ]
};
var landscapeJson = {
    identifier: LandScape_1.LandScapeStates.idle, strategy: BaseNode_1.Strategy.sequential,
    children: [
        { identifier: LandScape_1.LandScapeStates.shine },
        { identifier: LandScape_1.LandScapeStates.rain },
    ]
};
var landscape = new LandScape_1.LandScape();
var oak = new Oak_1.Oak(landscape);
var machine = new Machine_1.Machine();
oak.state = machine.generateTree(oakJson, oak);
landscape.state = machine.generateTree(landscapeJson, landscape);
var step = function () {
    console.log("Oak:       ", oak.state.identifier, "|", oak.height, "m tall |", oak.water, "water |", oak.sun, "sun");
    console.log("Landscape: ", landscape.state.identifier, "|", landscape.groundwater, "groundwater");
    console.log();
    oak.state = oak.state.tick();
    landscape.state = landscape.state.tick();
};
setInterval(function () { return step(); }, 1000);


/***/ }),

/***/ "./src/Actor.ts":
/*!**********************!*\
  !*** ./src/Actor.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isGuard = void 0;
function isGuard(action) {
    return action && typeof action.can === 'function';
}
exports.isGuard = isGuard;


/***/ }),

/***/ "./src/Machine.ts":
/*!************************!*\
  !*** ./src/Machine.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Machine = void 0;
var Pointer_1 = __webpack_require__(/*! ./Node/Pointer */ "./src/Node/Pointer.ts");
var State_1 = __webpack_require__(/*! ./Node/State */ "./src/Node/State.ts");
var Definition_1 = __webpack_require__(/*! ./Node/Definition */ "./src/Node/Definition.ts");
var ActionState_1 = __webpack_require__(/*! ./Node/ActionState */ "./src/Node/ActionState.ts");
var Machine = (function () {
    function Machine() {
    }
    Machine.prototype.generateTree = function (treeJson, actor) {
        return this.read(treeJson, null, actor);
    };
    Machine.prototype.read = function (subTreeJson, parent, actor) {
        if (Definition_1.isPointerNodeDefinition(subTreeJson)) {
            return new Pointer_1.Pointer(subTreeJson.identifier.toString(), actor[subTreeJson.identifier], parent, subTreeJson.strategy);
        }
        if (Definition_1.isTransitionNodeDefinition(subTreeJson)) {
            var node = new State_1.State(subTreeJson.identifier.toString(), actor[subTreeJson.identifier], parent, subTreeJson.strategy);
            for (var i = 0; i < subTreeJson.children.length; i++) {
                node.addChild(this.read(subTreeJson.children[i], node, actor));
            }
            return node;
        }
        return new ActionState_1.ActionState(subTreeJson.identifier.toString(), actor[subTreeJson.identifier], parent);
    };
    return Machine;
}());
exports.Machine = Machine;


/***/ }),

/***/ "./src/Node/ActionState.ts":
/*!*********************************!*\
  !*** ./src/Node/ActionState.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionState = void 0;
var BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./src/Node/BaseNode.ts");
var ActionState = (function (_super) {
    __extends(ActionState, _super);
    function ActionState(identifier, action, parent) {
        return _super.call(this, identifier, action, parent) || this;
    }
    ActionState.prototype.tick = function () {
        this.run();
        return _super.prototype.tick.call(this);
    };
    ActionState.prototype.run = function () {
        this.action.run();
    };
    ActionState.prototype[BaseNode_1.Strategy.sequential] = function () {
        var foundThis = false;
        var siblings = this.parent.getChildren();
        for (var i = 0; i < siblings.length; i++) {
            var sibling = siblings[i];
            if (this.identifier == sibling.identifier) {
                foundThis = true;
            }
            else if (foundThis && sibling.can()) {
                return sibling;
            }
        }
        return this.nearestRunnableAncestor();
    };
    return ActionState;
}(BaseNode_1.BaseNode));
exports.ActionState = ActionState;


/***/ }),

/***/ "./src/Node/BaseNode.ts":
/*!******************************!*\
  !*** ./src/Node/BaseNode.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseNode = exports.Strategy = void 0;
var Actor_1 = __webpack_require__(/*! ../Actor */ "./src/Actor.ts");
var Transition_1 = __webpack_require__(/*! ./Transition */ "./src/Node/Transition.ts");
var StrategyNode_1 = __webpack_require__(/*! ./StrategyNode */ "./src/Node/StrategyNode.ts");
var Strategy;
(function (Strategy) {
    Strategy["hereditary"] = "hereditary";
    Strategy["prioritised"] = "prioritised";
    Strategy["sequential"] = "sequential";
})(Strategy = exports.Strategy || (exports.Strategy = {}));
var BaseNode = (function () {
    function BaseNode(identifier, action, parent) {
        this.identifier = identifier;
        this.action = action;
        this.parent = parent;
    }
    BaseNode.prototype.getStrategyFromNearestAncestor = function () {
        var ancestor = this.nearestAncestorWithStrategy();
        if (ancestor !== null) {
            return ancestor._strategy;
        }
        return null;
    };
    Object.defineProperty(BaseNode.prototype, "strategy", {
        get: function () {
            return this.getStrategyFromNearestAncestor();
        },
        enumerable: false,
        configurable: true
    });
    BaseNode.prototype.tick = function () {
        var potentialNextState = this.nextState();
        if (potentialNextState !== null) {
            return Transition_1.transition(potentialNextState);
        }
        if (this.can()) {
            return this;
        }
        return Transition_1.transition(this.nearestRunnableAncestor());
    };
    BaseNode.prototype.nextState = function () {
        if (this.strategy !== null) {
            return this[this.strategy]();
        }
        else {
            return null;
        }
    };
    BaseNode.prototype.can = function () {
        return Actor_1.isGuard(this.action) ? this.action.can() : true;
    };
    BaseNode.prototype.warp = function (identifier) {
        var rootNodeChildren = this.getRootNode().getChildren();
        for (var i = 0; i < rootNodeChildren.length; i++) {
            if (rootNodeChildren[i].identifier == identifier) {
                return rootNodeChildren[i];
            }
        }
        return this;
    };
    BaseNode.prototype[Strategy.prioritised] = function () {
        return this.nextRunnable(this.parent.getChildren());
    };
    BaseNode.prototype[Strategy.sequential] = function () {
        return this.nearestRunnableAncestor();
    };
    BaseNode.prototype[Strategy.hereditary] = function () {
        return this.nearestNamesakeAncestor(this.identifier);
    };
    BaseNode.prototype.nextRunnable = function (nodes) {
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].can()) {
                return nodes[i];
            }
        }
        return null;
    };
    BaseNode.prototype.nearestAncestor = function (test) {
        if (this.parent === null) {
            return null;
        }
        if (test(this.parent) === true) {
            return this.parent;
        }
        return this.parent.nearestAncestor(test);
    };
    BaseNode.prototype.getRootNode = function () {
        return this.parent.getRootNode();
    };
    BaseNode.prototype.nearestAncestorWithStrategy = function () {
        return this.nearestAncestor(StrategyNode_1.isNodeWithStrategy);
    };
    BaseNode.prototype.nearestRunnableAncestor = function () {
        return this.nearestAncestor(function (node) { return node.can(); });
    };
    BaseNode.prototype.nearestNamesakeAncestor = function (identifier) {
        return this.nearestAncestor(function (node) { return node.identifier === identifier; });
    };
    return BaseNode;
}());
exports.BaseNode = BaseNode;


/***/ }),

/***/ "./src/Node/Definition.ts":
/*!********************************!*\
  !*** ./src/Node/Definition.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isTransitionNodeDefinition = exports.isPointerNodeDefinition = void 0;
function isPointerNodeDefinition(node) {
    return node.pointer === true;
}
exports.isPointerNodeDefinition = isPointerNodeDefinition;
function isTransitionNodeDefinition(node) {
    return Array.isArray(node.children);
}
exports.isTransitionNodeDefinition = isTransitionNodeDefinition;


/***/ }),

/***/ "./src/Node/Pointer.ts":
/*!*****************************!*\
  !*** ./src/Node/Pointer.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pointer = void 0;
var StrategyNode_1 = __webpack_require__(/*! ./StrategyNode */ "./src/Node/StrategyNode.ts");
var Pointer = (function (_super) {
    __extends(Pointer, _super);
    function Pointer(identifier, action, parent, strategy) {
        return _super.call(this, identifier, action, parent, strategy) || this;
    }
    Object.defineProperty(Pointer.prototype, "strategy", {
        get: function () {
            if (this._strategy) {
                return this._strategy;
            }
            return this.getStrategyFromNearestAncestor();
        },
        enumerable: false,
        configurable: true
    });
    Pointer.prototype.transition = function () {
        return this[this.strategy]();
    };
    return Pointer;
}(StrategyNode_1.StrategyNode));
exports.Pointer = Pointer;


/***/ }),

/***/ "./src/Node/State.ts":
/*!***************************!*\
  !*** ./src/Node/State.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
var BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./src/Node/BaseNode.ts");
var StrategyNode_1 = __webpack_require__(/*! ./StrategyNode */ "./src/Node/StrategyNode.ts");
var State = (function (_super) {
    __extends(State, _super);
    function State(identifier, action, parent, strategy) {
        var _this = _super.call(this, identifier, action, parent, strategy) || this;
        _this.children = [];
        return _this;
    }
    State.prototype.addChild = function (node) {
        this.children.push(node);
    };
    State.prototype.getChildren = function () {
        return this.children;
    };
    State.prototype[BaseNode_1.Strategy.prioritised] = function () {
        return this.nextRunnable(this.children);
    };
    State.prototype[BaseNode_1.Strategy.sequential] = function () {
        var firstRunnableChild = this.nextRunnable(this.children);
        if (firstRunnableChild !== null)
            return firstRunnableChild;
        return this.nearestRunnableAncestor();
    };
    State.prototype.getRootNode = function () {
        return this.parent
            ? this.parent.getRootNode()
            : this;
    };
    return State;
}(StrategyNode_1.StrategyNode));
exports.State = State;


/***/ }),

/***/ "./src/Node/StrategyNode.ts":
/*!**********************************!*\
  !*** ./src/Node/StrategyNode.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrategyNode = exports.isNodeWithStrategy = void 0;
var BaseNode_1 = __webpack_require__(/*! ./BaseNode */ "./src/Node/BaseNode.ts");
function isNodeWithStrategy(node) {
    return !!node._strategy;
}
exports.isNodeWithStrategy = isNodeWithStrategy;
var StrategyNode = (function (_super) {
    __extends(StrategyNode, _super);
    function StrategyNode(identifier, action, parent, strategy) {
        var _this = _super.call(this, identifier, action, parent) || this;
        _this._strategy = strategy;
        return _this;
    }
    Object.defineProperty(StrategyNode.prototype, "strategy", {
        get: function () {
            if (this._strategy) {
                return this._strategy;
            }
            return this.getStrategyFromNearestAncestor();
        },
        enumerable: false,
        configurable: true
    });
    return StrategyNode;
}(BaseNode_1.BaseNode));
exports.StrategyNode = StrategyNode;


/***/ }),

/***/ "./src/Node/Transition.ts":
/*!********************************!*\
  !*** ./src/Node/Transition.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.transition = exports.isTransition = void 0;
function isTransition(node) {
    return typeof node.transition === 'function';
}
exports.isTransition = isTransition;
function transition(node) {
    return isTransition(node)
        ? node.transition()
        : node;
}
exports.transition = transition;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9MYW5kU2NhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9PYWsudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01hY2hpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGUvQWN0aW9uU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGUvQmFzZU5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGUvRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm9kZS9Qb2ludGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Ob2RlL1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9Ob2RlL1N0cmF0ZWd5Tm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm9kZS9UcmFuc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FB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QUFFRDtJQUFrQyxnQ0FBUTtJQUd4QyxzQkFBbUIsVUFBa0IsRUFBRSxNQUFzQixFQUFFLE1BQWUsRUFBRSxRQUFtQjtRQUFuRyxZQUNFLGtCQUFNLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLFNBRWxDO1FBREMsS0FBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7O0lBQzVCLENBQUM7SUFFRCxzQkFBYyxrQ0FBUTthQUF0QjtZQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ3ZCO1lBQ0QsT0FBTyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUNILG1CQUFDO0FBQUQsQ0FBQyxDQWRpQyxtQkFBUSxHQWN6QztBQWRZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnpCLFNBQWdCLFlBQVksQ0FBQyxJQUFTO0lBQ3BDLE9BQU8sT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQztBQUMvQyxDQUFDO0FBRkQsb0NBRUM7QUFFRCxTQUFnQixVQUFVLENBQUMsSUFBVTtJQUNuQyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7UUFDbkIsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNYLENBQUM7QUFKRCxnQ0FJQyIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZW1vL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vc3JjL05vZGUvQmFzZU5vZGVcIjtcbmltcG9ydCB7QWN0aW9uLCBHdWFyZGVkQWN0aW9ufSBmcm9tIFwiLi4vc3JjL0FjdG9yXCI7XG5cbmV4cG9ydCBlbnVtIExhbmRTY2FwZVN0YXRlcyB7XG4gIGlkbGUgPSAnaWRsZScsXG4gIHNoaW5lID0gJ3NoaW5lJyxcbiAgcmFpbiA9ICdyYWluJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5kU2NhcGVBY3RvciB7XG4gIFtMYW5kU2NhcGVTdGF0ZXMuaWRsZV06IG51bGw7XG4gIFtMYW5kU2NhcGVTdGF0ZXMuc2hpbmVdOiBTaGluZUFjdGlvbjtcbiAgW0xhbmRTY2FwZVN0YXRlcy5yYWluXTogUmFpbkFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIExhbmRTY2FwZSBpbXBsZW1lbnRzIExhbmRTY2FwZUFjdG9yIHtcbiAgcHVibGljIHN0YXRlOiBOb2RlIHwgbnVsbDtcbiAgcHVibGljIGdyb3VuZHdhdGVyOiBudW1iZXI7XG4gIHB1YmxpYyBveHlnZW46IG51bWJlcjtcblxuICBwdWJsaWMgW0xhbmRTY2FwZVN0YXRlcy5pZGxlXTogbnVsbDtcbiAgcHVibGljIFtMYW5kU2NhcGVTdGF0ZXMuc2hpbmVdOiBTaGluZUFjdGlvbjtcbiAgcHVibGljIFtMYW5kU2NhcGVTdGF0ZXMucmFpbl06IFJhaW5BY3Rpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5ncm91bmR3YXRlciA9IDA7XG4gICAgdGhpcy5veHlnZW4gPSAwO1xuXG4gICAgdGhpcy5zaGluZSA9IG5ldyBTaGluZUFjdGlvbih0aGlzKTtcbiAgICB0aGlzLnJhaW4gPSBuZXcgUmFpbkFjdGlvbih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NoaW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaWRlbnRpZmllciA9PSBcInNoaW5lXCI7XG4gIH1cblxuICBwdWJsaWMgaGFzV2F0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdW5kd2F0ZXIgPiAwO1xuICB9XG5cbiAgcHVibGljIGdpdmVXYXRlcigpIHtcbiAgICB0aGlzLmdyb3VuZHdhdGVyIC09IDE7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBwdWJsaWMgb3h5Z2VuYXRlKCkge1xuICAgIHRoaXMub3h5Z2VuICs9IDE7XG4gIH1cbn1cblxuY2xhc3MgUmFpbkFjdGlvbiBpbXBsZW1lbnRzIEd1YXJkZWRBY3Rpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsYW5kU2NhcGU6IExhbmRTY2FwZSkge1xuICB9XG5cbiAgcHVibGljIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5sYW5kU2NhcGUuZ3JvdW5kd2F0ZXIgKz0gMTtcbiAgfVxufVxuXG5jbGFzcyBTaGluZUFjdGlvbiBpbXBsZW1lbnRzIEd1YXJkZWRBY3Rpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsYW5kU2NhcGU6IExhbmRTY2FwZSkge1xuICB9XG5cbiAgcHVibGljIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuMTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gIH1cbn1cbiIsImltcG9ydCB7R3VhcmRlZEFjdGlvbiwgQWN0aW9uLCBBY3Rvcn0gZnJvbSBcIi4uL3NyYy9BY3RvclwiO1xuaW1wb3J0IHtMYW5kU2NhcGV9IGZyb20gXCIuL0xhbmRTY2FwZVwiO1xuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vc3JjL05vZGUvQmFzZU5vZGVcIjtcblxuZXhwb3J0IGVudW0gT2FrU3RhdGVzIHtcbiAgaWRsZSA9ICdpZGxlJyxcbiAgZ3JvdyA9ICdncm93JyxcbiAgbWFrZUVuZXJneSA9ICdtYWtlRW5lcmd5JyxcbiAgcGhvdG9zeW50aGVzaXNlID0gJ3Bob3Rvc3ludGhlc2lzZScsXG4gIGVtaXRPeHlnZW4gPSAnZW1pdE94eWdlbicsXG4gIGdhdGhlclN1biA9ICdnYXRoZXJTdW4nLFxuICBnYXRoZXJXYXRlciA9ICdnYXRoZXJXYXRlcicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2FrQWN0b3Ige1xuICBbT2FrU3RhdGVzLmlkbGVdOiBudWxsO1xuICBbT2FrU3RhdGVzLmdyb3ddOiBHcm93QWN0aW9uO1xuICBbT2FrU3RhdGVzLm1ha2VFbmVyZ3ldOiBNYWtlRW5lcmd5QWN0aW9uO1xuICBbT2FrU3RhdGVzLnBob3Rvc3ludGhlc2lzZV06IFBob3Rvc3ludGhlc2lzZUFjdGlvbjtcbiAgW09ha1N0YXRlcy5lbWl0T3h5Z2VuXTogRW1pdE94eWdlbkFjdGlvbjtcbiAgW09ha1N0YXRlcy5nYXRoZXJTdW5dOiBHYXRoZXJTdW5BY3Rpb247XG4gIFtPYWtTdGF0ZXMuZ2F0aGVyV2F0ZXJdOiBHYXRoZXJXYXRlckFjdGlvbjtcbn1cblxuLy8gdGhlIG9hayBvYmplY3QgLSBzdWNrcyB1cCB3YXRlciwgcGhvdG9zeW50aGVzaXNlcywgZ3Jvd3NcbmV4cG9ydCBjbGFzcyBPYWsgaW1wbGVtZW50cyBPYWtBY3RvciB7XG4gIHB1YmxpYyBzdGF0ZTogTm9kZSB8IG51bGw7XG4gIHB1YmxpYyBsYW5kc2NhcGU6IExhbmRTY2FwZTtcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuXG4gIHB1YmxpYyBlbmVyZ3k6IGJvb2xlYW47XG4gIHB1YmxpYyBveHlnZW46IGJvb2xlYW47XG4gIHB1YmxpYyB3YXRlcjogbnVtYmVyO1xuICBwdWJsaWMgc3VuOiBudW1iZXI7XG5cbiAgcHVibGljIFtPYWtTdGF0ZXMuaWRsZV06IG51bGw7XG4gIHB1YmxpYyBbT2FrU3RhdGVzLmdyb3ddOiBHcm93QWN0aW9uO1xuICBwdWJsaWMgW09ha1N0YXRlcy5tYWtlRW5lcmd5XTogTWFrZUVuZXJneUFjdGlvbjtcbiAgcHVibGljIFtPYWtTdGF0ZXMucGhvdG9zeW50aGVzaXNlXTogUGhvdG9zeW50aGVzaXNlQWN0aW9uO1xuICBwdWJsaWMgW09ha1N0YXRlcy5lbWl0T3h5Z2VuXTogRW1pdE94eWdlbkFjdGlvbjtcbiAgcHVibGljIFtPYWtTdGF0ZXMuZ2F0aGVyU3VuXTogR2F0aGVyU3VuQWN0aW9uO1xuICBwdWJsaWMgW09ha1N0YXRlcy5nYXRoZXJXYXRlcl06IEdhdGhlcldhdGVyQWN0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGxhbmRzY2FwZTogTGFuZFNjYXBlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5sYW5kc2NhcGUgPSBsYW5kc2NhcGU7XG5cbiAgICB0aGlzLmhlaWdodCA9IDE7XG5cbiAgICB0aGlzLmVuZXJneSA9IGZhbHNlO1xuICAgIHRoaXMub3h5Z2VuID0gZmFsc2U7XG4gICAgdGhpcy53YXRlciA9IDA7XG4gICAgdGhpcy5zdW4gPSAwO1xuXG4gICAgdGhpcy5ncm93ID0gbmV3IEdyb3dBY3Rpb24odGhpcyk7XG4gICAgdGhpcy5tYWtlRW5lcmd5ID0gbmV3IE1ha2VFbmVyZ3lBY3Rpb24odGhpcyk7XG4gICAgdGhpcy5waG90b3N5bnRoZXNpc2UgPSBuZXcgUGhvdG9zeW50aGVzaXNlQWN0aW9uKHRoaXMpO1xuICAgIHRoaXMuZW1pdE94eWdlbiA9IG5ldyBFbWl0T3h5Z2VuQWN0aW9uKHRoaXMpO1xuICAgIHRoaXMuZ2F0aGVyU3VuID0gbmV3IEdhdGhlclN1bkFjdGlvbih0aGlzKTtcbiAgICB0aGlzLmdhdGhlcldhdGVyID0gbmV3IEdhdGhlcldhdGVyQWN0aW9uKHRoaXMpO1xuICB9XG5cbiAgcHVibGljIGhhc1N1bigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zdW4gPiAwO1xuICB9XG5cbiAgcHVibGljIGhhc1dhdGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLndhdGVyID4gMDtcbiAgfVxufVxuXG5jbGFzcyBNYWtlRW5lcmd5QWN0aW9uIGltcGxlbWVudHMgR3VhcmRlZEFjdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG9hazogT2FrKSB7XG4gIH1cblxuICBwdWJsaWMgY2FuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9hay5oYXNTdW4oKSAmJiB0aGlzLm9hay5oYXNXYXRlcigpO1xuICB9XG5cbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLm9hay5zdW4gLT0gMTtcbiAgICB0aGlzLm9hay53YXRlciAtPSAxO1xuICAgIHRoaXMub2FrLmVuZXJneSA9IHRydWU7XG4gIH1cbn1cblxuY2xhc3MgR3Jvd0FjdGlvbiBpbXBsZW1lbnRzIEd1YXJkZWRBY3Rpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBvYWs6IE9haykge1xuICB9XG5cbiAgcHVibGljIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vYWsuZW5lcmd5O1xuICB9XG5cbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLm9hay5lbmVyZ3kgPSBmYWxzZTtcbiAgICB0aGlzLm9hay5oZWlnaHQgKz0gMTtcbiAgfVxufVxuXG5jbGFzcyBQaG90b3N5bnRoZXNpc2VBY3Rpb24gaW1wbGVtZW50cyBHdWFyZGVkQWN0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgb2FrOiBPYWspIHtcbiAgfVxuXG4gIHB1YmxpYyBjYW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2FrLmhhc1N1bigpICYmIHRoaXMub2FrLmhhc1dhdGVyKCk7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gIH1cbn1cblxuY2xhc3MgRW1pdE94eWdlbkFjdGlvbiBpbXBsZW1lbnRzIEd1YXJkZWRBY3Rpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBvYWs6IE9haykge1xuICB9XG5cbiAgcHVibGljIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vYWsub3h5Z2VuO1xuICB9XG5cbiAgcHVibGljIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLm9hay5veHlnZW4gPSBmYWxzZTtcbiAgICB0aGlzLm9hay5sYW5kc2NhcGUub3h5Z2VuYXRlKCk7XG4gIH1cbn1cblxuY2xhc3MgR2F0aGVyU3VuQWN0aW9uIGltcGxlbWVudHMgR3VhcmRlZEFjdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG9hazogT2FrKSB7XG4gIH1cblxuICBwdWJsaWMgY2FuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9hay5sYW5kc2NhcGUuaXNTaGluaW5nKCk7XG4gIH1cblxuICBwdWJsaWMgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMub2FrLnN1biArPSAxO1xuICB9XG59XG5cbmNsYXNzIEdhdGhlcldhdGVyQWN0aW9uIGltcGxlbWVudHMgR3VhcmRlZEFjdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG9hazogT2FrKSB7XG4gIH1cblxuICBjYW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2FrLmxhbmRzY2FwZS5oYXNXYXRlcigpO1xuICB9XG5cbiAgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMub2FrLndhdGVyICs9IHRoaXMub2FrLmxhbmRzY2FwZS5naXZlV2F0ZXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtMYW5kU2NhcGUsIExhbmRTY2FwZUFjdG9yLCBMYW5kU2NhcGVTdGF0ZXN9IGZyb20gXCIuL0xhbmRTY2FwZVwiO1xuaW1wb3J0IHtPYWssIE9ha0FjdG9yLCBPYWtTdGF0ZXN9IGZyb20gXCIuL09ha1wiO1xuaW1wb3J0IHtNYWNoaW5lfSBmcm9tIFwiLi4vc3JjL01hY2hpbmVcIjtcbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gXCIuLi9zcmMvTm9kZS9CYXNlTm9kZVwiO1xuXG4vLyB0aGUganNvbiB0aGF0IGRlZmluZXMgdGhlIHRyZWVzIHRoYXQgY29udHJvbCB0aGUgYWN0b3JzXG5jb25zdCBvYWtKc29uID0ge1xuICBpZGVudGlmaWVyOiBPYWtTdGF0ZXMuaWRsZSwgc3RyYXRlZ3k6IFN0cmF0ZWd5LnByaW9yaXRpc2VkLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIGlkZW50aWZpZXI6IE9ha1N0YXRlcy5waG90b3N5bnRoZXNpc2UsIHN0cmF0ZWd5OiBTdHJhdGVneS5zZXF1ZW50aWFsLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge2lkZW50aWZpZXI6IE9ha1N0YXRlcy5tYWtlRW5lcmd5fSxcbiAgICAgICAge2lkZW50aWZpZXI6IE9ha1N0YXRlcy5ncm93fSxcbiAgICAgICAge2lkZW50aWZpZXI6IE9ha1N0YXRlcy5lbWl0T3h5Z2VufSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtpZGVudGlmaWVyOiBPYWtTdGF0ZXMuZ2F0aGVyU3VufSxcbiAgICB7aWRlbnRpZmllcjogT2FrU3RhdGVzLmdhdGhlcldhdGVyfSxcbiAgXVxufTtcblxuY29uc3QgbGFuZHNjYXBlSnNvbiA9IHtcbiAgaWRlbnRpZmllcjogTGFuZFNjYXBlU3RhdGVzLmlkbGUsIHN0cmF0ZWd5OiBTdHJhdGVneS5zZXF1ZW50aWFsLFxuICBjaGlsZHJlbjogW1xuICAgIHtpZGVudGlmaWVyOiBMYW5kU2NhcGVTdGF0ZXMuc2hpbmV9LFxuICAgIHtpZGVudGlmaWVyOiBMYW5kU2NhcGVTdGF0ZXMucmFpbn0sXG4gIF1cbn07XG5cbi8vIHNldCB1cCB0aGUgYWN0b3JzXG5jb25zdCBsYW5kc2NhcGUgPSBuZXcgTGFuZFNjYXBlKCk7IC8vIG9uZSBhY3RvclxuY29uc3Qgb2FrID0gbmV3IE9hayhsYW5kc2NhcGUpOyAvLyB0aGUgb3RoZXIgYWN0b3IgaW4gdGhpcyBkcmFtYVxuXG4vLyBtYWtlIGluc3RhbmNlIG9mIE1hY2hpbmUgYW5kIGdldCB0aGUgcm9vdCBub2RlcyBmb3IgZWFjaCBhY3RvclxuY29uc3QgbWFjaGluZSA9IG5ldyBNYWNoaW5lKCk7XG5vYWsuc3RhdGUgPSBtYWNoaW5lLmdlbmVyYXRlVHJlZTxPYWtBY3Rvcj4ob2FrSnNvbiwgb2FrKTtcbmxhbmRzY2FwZS5zdGF0ZSA9IG1hY2hpbmUuZ2VuZXJhdGVUcmVlPExhbmRTY2FwZUFjdG9yPihsYW5kc2NhcGVKc29uLCBsYW5kc2NhcGUpO1xuXG5jb25zdCBzdGVwID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcIk9hazogICAgICAgXCIsIG9hay5zdGF0ZS5pZGVudGlmaWVyLCBcInxcIiwgb2FrLmhlaWdodCwgXCJtIHRhbGwgfFwiLCBvYWsud2F0ZXIsIFwid2F0ZXIgfFwiLCBvYWsuc3VuLCBcInN1blwiKTtcbiAgY29uc29sZS5sb2coXCJMYW5kc2NhcGU6IFwiLCBsYW5kc2NhcGUuc3RhdGUuaWRlbnRpZmllciwgXCJ8XCIsIGxhbmRzY2FwZS5ncm91bmR3YXRlciwgXCJncm91bmR3YXRlclwiKTtcbiAgY29uc29sZS5sb2coKTtcblxuICAvLyB0cmlnZ2VyIHRoZSBuZXh0IHN0YXRlIHRyYW5zaXRpb25zXG4gIG9hay5zdGF0ZSA9IG9hay5zdGF0ZS50aWNrKCk7XG4gIGxhbmRzY2FwZS5zdGF0ZSA9IGxhbmRzY2FwZS5zdGF0ZS50aWNrKCk7XG59XG4vLyBldmVyeSBzZWNvbmQsIHNvbWV0aGluZyBoYXBwZW5zIGluIHRoZSBlY29zeXN0ZW1cbnNldEludGVydmFsKCgpID0+IHN0ZXAoKSwgMTAwMClcbiIsImV4cG9ydCB0eXBlIEFjdG9yPEludGVyZmFjZT4gPSB7XG4gIFtrZXkgaW4ga2V5b2YgSW50ZXJmYWNlXTogQWN0aW9uIHwgR3VhcmRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb24ge1xuICBydW4oKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWFyZCB7XG4gIGNhbigpOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1YXJkZWRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sIEd1YXJkIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzR3VhcmQoYWN0aW9uOiBhbnkpOiBhY3Rpb24gaXMgR3VhcmQge1xuICByZXR1cm4gYWN0aW9uICYmIHR5cGVvZiBhY3Rpb24uY2FuID09PSAnZnVuY3Rpb24nO1xufVxuIiwiaW1wb3J0IHtQb2ludGVyfSBmcm9tIFwiLi9Ob2RlL1BvaW50ZXJcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuL05vZGUvU3RhdGVcIjtcbmltcG9ydCB7QWN0aW9uLCBBY3RvciwgR3VhcmR9IGZyb20gXCIuL0FjdG9yXCI7XG5pbXBvcnQge05vZGVEZWZpbml0aW9uLCBpc1BvaW50ZXJOb2RlRGVmaW5pdGlvbiwgaXNUcmFuc2l0aW9uTm9kZURlZmluaXRpb259IGZyb20gXCIuL05vZGUvRGVmaW5pdGlvblwiO1xuaW1wb3J0IHtCYXNlTm9kZX0gZnJvbSBcIi4vTm9kZS9CYXNlTm9kZVwiO1xuaW1wb3J0IHtBY3Rpb25TdGF0ZX0gZnJvbSBcIi4vTm9kZS9BY3Rpb25TdGF0ZVwiO1xuaW1wb3J0IHtQYXJlbnR9IGZyb20gXCIuL05vZGUvUGFyZW50XCI7XG5cbi8qKlxuICogVGhlIHRyZWUgZ2VuZXJhdG9yLiAgSW5zdGFudGlhdGUgYW5kIHRoZW4gY2FsbCBnZW5lcmF0ZVRyZWUoKSxcbiAqIHBhc3NpbmcgdGhlIEpTT04gZGVmaW5pdGlvbiBvZiB0aGUgdHJlZSBhbmQgdGhlIG9iamVjdCB0aGUgdHJlZSBjb250cm9scy5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hY2hpbmUge1xuICBwdWJsaWMgZ2VuZXJhdGVUcmVlPEFjdG9ySW50ZXJmYWNlPih0cmVlSnNvbjogTm9kZURlZmluaXRpb248a2V5b2YgQWN0b3JJbnRlcmZhY2U+LCBhY3RvcjogQWN0b3I8QWN0b3JJbnRlcmZhY2U+KSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZDxBY3RvckludGVyZmFjZT4odHJlZUpzb24sIG51bGwsIGFjdG9yKTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZWFkPEFjdG9ySW50ZXJmYWNlPihzdWJUcmVlSnNvbjogTm9kZURlZmluaXRpb248a2V5b2YgQWN0b3JJbnRlcmZhY2U+LCBwYXJlbnQ6IFBhcmVudCB8IG51bGwsIGFjdG9yOiBBY3RvcjxBY3RvckludGVyZmFjZT4pOiBCYXNlTm9kZSB7XG4gICAgaWYgKGlzUG9pbnRlck5vZGVEZWZpbml0aW9uKHN1YlRyZWVKc29uKSkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludGVyKFxuICAgICAgICBzdWJUcmVlSnNvbi5pZGVudGlmaWVyLnRvU3RyaW5nKCksXG4gICAgICAgIGFjdG9yW3N1YlRyZWVKc29uLmlkZW50aWZpZXJdIGFzIEd1YXJkLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIHN1YlRyZWVKc29uLnN0cmF0ZWd5LFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaXNUcmFuc2l0aW9uTm9kZURlZmluaXRpb248a2V5b2YgQWN0b3JJbnRlcmZhY2U+KHN1YlRyZWVKc29uKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBTdGF0ZShcbiAgICAgICAgc3ViVHJlZUpzb24uaWRlbnRpZmllci50b1N0cmluZygpLFxuICAgICAgICBhY3RvcltzdWJUcmVlSnNvbi5pZGVudGlmaWVyXSBhcyBHdWFyZCxcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBzdWJUcmVlSnNvbi5zdHJhdGVneSxcbiAgICAgICk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlRyZWVKc29uLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5vZGUuYWRkQ2hpbGQodGhpcy5yZWFkPEFjdG9ySW50ZXJmYWNlPihzdWJUcmVlSnNvbi5jaGlsZHJlbltpXSwgbm9kZSwgYWN0b3IpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQWN0aW9uU3RhdGUoXG4gICAgICBzdWJUcmVlSnNvbi5pZGVudGlmaWVyLnRvU3RyaW5nKCksXG4gICAgICBhY3RvcltzdWJUcmVlSnNvbi5pZGVudGlmaWVyXSBhcyBBY3Rpb24sXG4gICAgICBwYXJlbnQsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtCYXNlTm9kZSwgU3RyYXRlZ3ksIE5vZGV9IGZyb20gXCIuL0Jhc2VOb2RlXCI7XG5pbXBvcnQge0FjdGlvbn0gZnJvbSBcIi4uL0FjdG9yXCI7XG5pbXBvcnQge1BhcmVudH0gZnJvbSBcIi4vUGFyZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25TdGF0ZSBleHRlbmRzIEJhc2VOb2RlIHtcbiAgcHJvdGVjdGVkIGFjdGlvbjogQWN0aW9uO1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyZW50OiBQYXJlbnQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IHN0cmluZywgYWN0aW9uOiBBY3Rpb24sIHBhcmVudDogUGFyZW50KSB7XG4gICAgc3VwZXIoaWRlbnRpZmllciwgYWN0aW9uLCBwYXJlbnQpO1xuICB9XG5cbiAgcHVibGljIHRpY2soKTogTm9kZSB7XG4gICAgdGhpcy5ydW4oKTtcbiAgICByZXR1cm4gc3VwZXIudGljaygpO1xuICB9XG5cbiAgLy8gcnVuIHRoZSBiZWhhdmlvdXIgYXNzb2NpYXRlZCB3aXRoIHRoaXMgc3RhdGVcbiAgcHJvdGVjdGVkIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGlvbi5ydW4oKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBbU3RyYXRlZ3kuc2VxdWVudGlhbF0oKTogTm9kZSB8IG51bGwge1xuICAgIGxldCBmb3VuZFRoaXMgPSBmYWxzZTtcbiAgICBjb25zdCBzaWJsaW5ncyA9IHRoaXMucGFyZW50LmdldENoaWxkcmVuKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWJsaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgc2libGluZyA9IHNpYmxpbmdzW2ldO1xuICAgICAgaWYgKHRoaXMuaWRlbnRpZmllciA9PSBzaWJsaW5nLmlkZW50aWZpZXIpIHtcbiAgICAgICAgZm91bmRUaGlzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZm91bmRUaGlzICYmIHNpYmxpbmcuY2FuKCkpIHtcbiAgICAgICAgcmV0dXJuIHNpYmxpbmc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5lYXJlc3RSdW5uYWJsZUFuY2VzdG9yKCk7IC8vIG5vIG1vcmUgcnVubmFibGUgY2hpbGRyZW4gaW4gdGhlIHNlcXVlbmNlIHNvIHJldHVybiBmaXJzdCBydW5uYWJsZSBhbmNlc3RvclxuICB9XG59XG4iLCJpbXBvcnQge0FjdGlvbiwgR3VhcmQsIGlzR3VhcmR9IGZyb20gXCIuLi9BY3RvclwiO1xuaW1wb3J0IHt0cmFuc2l0aW9ufSBmcm9tIFwiLi9UcmFuc2l0aW9uXCI7XG5pbXBvcnQge1BhcmVudH0gZnJvbSBcIi4vUGFyZW50XCI7XG5pbXBvcnQge2lzTm9kZVdpdGhTdHJhdGVneSwgTm9kZVdpdGhTdHJhdGVneX0gZnJvbSBcIi4vU3RyYXRlZ3lOb2RlXCI7XG5cbmV4cG9ydCBlbnVtIFN0cmF0ZWd5IHtcbiAgaGVyZWRpdGFyeSA9ICdoZXJlZGl0YXJ5JyxcbiAgcHJpb3JpdGlzZWQgPSAncHJpb3JpdGlzZWQnLFxuICBzZXF1ZW50aWFsID0gJ3NlcXVlbnRpYWwnLFxufVxuXG50eXBlIFRlc3RGTiA9IChub2RlOiBOb2RlKSA9PiBib29sZWFuO1xudHlwZSBBc3NlcnRGTjxOIGV4dGVuZHMgTm9kZT4gPSAobm9kZTogTm9kZSkgPT4gbm9kZSBpcyBOO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGUge1xuICByZWFkb25seSBpZGVudGlmaWVyOiBzdHJpbmc7XG5cbiAgdGljaygpOiBOb2RlO1xuXG4gIGNhbigpOiBib29sZWFuO1xuXG4gIGdldFJvb3ROb2RlKCk6IFBhcmVudDtcblxuICBuZWFyZXN0QW5jZXN0b3I8TiBleHRlbmRzIE5vZGU+KHRlc3Q6IFRlc3RGTiB8IEFzc2VydEZOPE4+KTogTiB8IG51bGxcbn1cblxuLyoqXG4gKiBUaGUgb2JqZWN0IGZvciBub2RlcyBpbiB0aGUgdHJlZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VOb2RlIGltcGxlbWVudHMgTm9kZSB7XG4gIHB1YmxpYyByZWFkb25seSBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhY3Rpb246IEFjdGlvbiB8IEd1YXJkIHwgbnVsbDtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyZW50OiBQYXJlbnQgfCB1bmRlZmluZWQ7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IHN0cmluZywgYWN0aW9uOiBBY3Rpb24gfCBHdWFyZCB8IG51bGwsIHBhcmVudD86IFBhcmVudCkge1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdHJhdGVneUZyb21OZWFyZXN0QW5jZXN0b3IoKTogU3RyYXRlZ3kgfCBudWxsIHtcbiAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMubmVhcmVzdEFuY2VzdG9yV2l0aFN0cmF0ZWd5KCk7XG4gICAgaWYgKGFuY2VzdG9yICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYW5jZXN0b3IuX3N0cmF0ZWd5O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBzdHJhdGVneSgpOiBTdHJhdGVneSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmF0ZWd5RnJvbU5lYXJlc3RBbmNlc3RvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgdGljayBvZiB0aGUgY2xvY2suICBSZXR1cm5zIHRoZSBuZXh0IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHRpY2soKTogTm9kZSB7XG4gICAgY29uc3QgcG90ZW50aWFsTmV4dFN0YXRlID0gdGhpcy5uZXh0U3RhdGUoKTtcblxuICAgIGlmIChwb3RlbnRpYWxOZXh0U3RhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uKHBvdGVudGlhbE5leHRTdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FuKCkpIHtcbiAgICAgIC8vIG5vIGNoaWxkIHN0YXRlLCB0cnkgYW5kIHN0YXkgaW4gdGhpcyBvbmVcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIGNhbid0IHN0YXkgaW4gdGhpcyBvbmUsIHNvIGJhY2sgdXAgdGhlIHRyZWVcbiAgICByZXR1cm4gdHJhbnNpdGlvbih0aGlzLm5lYXJlc3RSdW5uYWJsZUFuY2VzdG9yKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgbmV4dCBzdGF0ZSB0aGF0IHdvdWxkIGJlIG1vdmVkIHRvIGZyb20gY3VycmVudCBzdGF0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIG5leHRTdGF0ZSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW3RoaXMuc3RyYXRlZ3ldKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgYWN0b3IgYWxsb3dlZCB0byBlbnRlciB0aGlzIHN0YXRlXG4gICAqL1xuICBwdWJsaWMgY2FuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0d1YXJkKHRoaXMuYWN0aW9uKSA/IHRoaXMuYWN0aW9uLmNhbigpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzd2l0Y2hlcyBzdGF0ZSB0byBkaXJlY3QgY2hpbGQgb2Ygcm9vdCBzdGF0ZSB3aXRoIHBhc3NlZCBpZGVudGlmaWVyXG4gICAqIHVzZSB2ZXJ5IHNwYXJpbmdseSAtIHJlYWxseSBvbmx5IGZvciBpbXBvcnRhbnQgZXZlbnRzIHRoYXRcbiAgICogcmVxdWlyZSBtYWNoaW5lIHRvIHRlbXBvcmFyaWx5IHJlbGlucXVpc2ggY29udHJvbCBvdmVyIGFjdG9yXG4gICAqIGUuZy4gYSBzb2xkaWVyIHdobyBpcyBtb3N0bHkgYXV0b25vbW91cywgYnV0IG9jY2FzaW9uYWxseSByZWNlaXZlcyBvcmRlcnNcbiAgICovXG4gIHB1YmxpYyB3YXJwKGlkZW50aWZpZXI6IHN0cmluZyk6IE5vZGUge1xuICAgIGNvbnN0IHJvb3ROb2RlQ2hpbGRyZW4gPSB0aGlzLmdldFJvb3ROb2RlKCkuZ2V0Q2hpbGRyZW4oKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3ROb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyb290Tm9kZUNoaWxkcmVuW2ldLmlkZW50aWZpZXIgPT0gaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGVDaGlsZHJlbltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7IC8vIGNvdWxkbid0IGZpbmQgbm9kZSAtIHN0YXkgaW4gY3VycmVudCBzdGF0ZVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgZmlyc3QgY2hpbGQgdGhhdCBjYW4gcnVuXG4gICAqL1xuICBwcm90ZWN0ZWQgW1N0cmF0ZWd5LnByaW9yaXRpc2VkXSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFJ1bm5hYmxlKHRoaXMucGFyZW50LmdldENoaWxkcmVuKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJ1bnMgYWxsIHJ1bm5hYmxlIGNoaWxkcmVuIGluIG9yZGVyLCB0aGVuIGtpY2tzIHVwIHRvIGNoaWxkcmVuJ3MgY2xvc2VzdCBydW5uYWJsZSBhbmNlc3RvclxuICAgKi9cbiAgcHJvdGVjdGVkIFtTdHJhdGVneS5zZXF1ZW50aWFsXSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmVhcmVzdFJ1bm5hYmxlQW5jZXN0b3IoKTtcbiAgfVxuXG4gIC8vIGEgc3RyYXRlZ3kgdGhhdCBtb3ZlcyB0byB0aGUgZmlyc3Qgc3lub255bW91cyBhbmNlc3RvclxuICBwdWJsaWMgW1N0cmF0ZWd5LmhlcmVkaXRhcnldKCk6IE5vZGUge1xuICAgIHJldHVybiB0aGlzLm5lYXJlc3ROYW1lc2FrZUFuY2VzdG9yKHRoaXMuaWRlbnRpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyBuZXh0IHJ1bm5hYmxlIG5vZGUgaW4gcGFzc2VkIGxpc3RcbiAgICovXG4gIHByb3RlY3RlZCBuZXh0UnVubmFibGUobm9kZXM6IEFycmF5PE5vZGU+KTogTm9kZSB8IG51bGwge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChub2Rlc1tpXS5jYW4oKSkge1xuICAgICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBmaXJzdCBuYW1lc2FrZSBmb3JlYmVhciBlbmNvdW50ZXJlZCB3aGVuIGdvaW5nIGRpcmVjdGx5IHVwIHRyZWVcbiAgICovXG4gIHB1YmxpYyBuZWFyZXN0QW5jZXN0b3I8TiBleHRlbmRzIE5vZGU+KHRlc3Q6IFRlc3RGTiB8IEFzc2VydEZOPE4+KTogTiB8IG51bGwge1xuICAgIGlmICh0aGlzLnBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRlc3QodGhpcy5wYXJlbnQpID09PSB0cnVlKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5lYXJlc3RBbmNlc3RvcjxOPih0ZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHJvb3Qgbm9kZSBvZiB3aG9sZSB0cmVlXG4gICAqL1xuICBwdWJsaWMgZ2V0Um9vdE5vZGUoKTogUGFyZW50IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0Um9vdE5vZGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBuZWFyZXN0QW5jZXN0b3JXaXRoU3RyYXRlZ3koKTogTm9kZVdpdGhTdHJhdGVneSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm5lYXJlc3RBbmNlc3Rvcihpc05vZGVXaXRoU3RyYXRlZ3kpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgbmVhcmVzdCBhbmNlc3RvciB0aGF0IGNhbiBydW5cbiAgICovXG4gIHByb3RlY3RlZCBuZWFyZXN0UnVubmFibGVBbmNlc3RvcigpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmVhcmVzdEFuY2VzdG9yKChub2RlOiBOb2RlKSA9PiBub2RlLmNhbigpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBuZWFyZXN0TmFtZXNha2VBbmNlc3RvcihpZGVudGlmaWVyOiBzdHJpbmcpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmVhcmVzdEFuY2VzdG9yKChub2RlOiBOb2RlKSA9PiBub2RlLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuICB9XG59XG4iLCJpbXBvcnQge1N0cmF0ZWd5fSBmcm9tIFwiLi9CYXNlTm9kZVwiO1xuXG5leHBvcnQgdHlwZSBOb2RlRGVmaW5pdGlvbjxTdGF0ZXM+ID0ge1xuICByZWFkb25seSBpZGVudGlmaWVyOiBTdGF0ZXM7XG59XG5cbmV4cG9ydCB0eXBlIFRyYW5zaXRpb25Ob2RlRGVmaW5pdGlvbjxTdGF0ZXM+ID0gTm9kZURlZmluaXRpb248U3RhdGVzPiAmIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IEFycmF5PE5vZGVEZWZpbml0aW9uPFN0YXRlcz4+O1xuICByZWFkb25seSBzdHJhdGVneTogU3RyYXRlZ3k7XG59XG5leHBvcnQgdHlwZSBQb2ludGVyTm9kZURlZmluaXRpb248U3RhdGVzPiA9IE5vZGVEZWZpbml0aW9uPFN0YXRlcz4gJiB7XG4gIHJlYWRvbmx5IHBvaW50ZXI6IGJvb2xlYW47XG4gIHJlYWRvbmx5IHN0cmF0ZWd5OiBTdHJhdGVneTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9pbnRlck5vZGVEZWZpbml0aW9uPFN0YXRlcz4obm9kZTogYW55KTogbm9kZSBpcyBQb2ludGVyTm9kZURlZmluaXRpb248U3RhdGVzPiB7XG4gIHJldHVybiBub2RlLnBvaW50ZXIgPT09IHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RyYW5zaXRpb25Ob2RlRGVmaW5pdGlvbjxTdGF0ZXM+KG5vZGU6IGFueSk6IG5vZGUgaXMgVHJhbnNpdGlvbk5vZGVEZWZpbml0aW9uPFN0YXRlcz4ge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShub2RlLmNoaWxkcmVuKTtcbn1cbiIsImltcG9ydCB7Tm9kZSwgU3RyYXRlZ3l9IGZyb20gXCIuL0Jhc2VOb2RlXCI7XG5pbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL1RyYW5zaXRpb25cIjtcbmltcG9ydCB7UGFyZW50fSBmcm9tIFwiLi9QYXJlbnRcIjtcbmltcG9ydCB7U3RyYXRlZ3lOb2RlfSBmcm9tIFwiLi9TdHJhdGVneU5vZGVcIjtcbmltcG9ydCB7R3VhcmR9IGZyb20gXCIuLi9BY3RvclwiO1xuXG4vKipcbiAqIEEgcG9pbnRlciBzdGF0ZSBpbiB0aGUgdHJlZS4gIERpcmVjdHMgdGhlIGFjdG9yIHRvIGEgc3lub255bW91cyBzdGF0ZVxuICogZnVydGhlciB1cCB0aGUgdHJlZS4gIFdoaWNoIHN5bm9ueW1vdXMgc3RhdGUgdGhlIGFjdG9yIHRyYW5zaXRpb25zIHRvXG4gKiBpcyBkZXBlbmRlbnQgb24gdGhlIHBvaW50ZXIncyBzdHJhdGVneS5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvaW50ZXIgZXh0ZW5kcyBTdHJhdGVneU5vZGUgaW1wbGVtZW50cyBUcmFuc2l0aW9uIHtcbiAgcHJvdGVjdGVkIGFjdGlvbjogR3VhcmQgfCBudWxsO1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyZW50OiBQYXJlbnQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IHN0cmluZywgYWN0aW9uOiBHdWFyZCB8IG51bGwsIHBhcmVudD86IFBhcmVudCwgc3RyYXRlZ3k/OiBTdHJhdGVneSkge1xuICAgIHN1cGVyKGlkZW50aWZpZXIsIGFjdGlvbiwgcGFyZW50LCBzdHJhdGVneSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHN0cmF0ZWd5KCk6IFN0cmF0ZWd5IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuX3N0cmF0ZWd5KSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RyYXRlZ3k7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmdldFN0cmF0ZWd5RnJvbU5lYXJlc3RBbmNlc3RvcigpO1xuICB9XG5cbiAgLy8gdHJhbnNpdGlvbiBvdXQgb2YgdGhpcyBzdGF0ZSB1c2luZyB0aGUgc3RhdGUncyBzdHJhdGVneVxuICBwdWJsaWMgdHJhbnNpdGlvbigpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXNbdGhpcy5zdHJhdGVneV0oKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtCYXNlTm9kZSwgTm9kZSwgU3RyYXRlZ3l9IGZyb20gXCIuL0Jhc2VOb2RlXCI7XG5pbXBvcnQge0d1YXJkfSBmcm9tIFwiLi4vQWN0b3JcIjtcbmltcG9ydCB7UGFyZW50fSBmcm9tIFwiLi9QYXJlbnRcIjtcbmltcG9ydCB7U3RyYXRlZ3lOb2RlfSBmcm9tIFwiLi9TdHJhdGVneU5vZGVcIjtcblxuLyoqXG4gKiAgQSBub3JtYWwgc3RhdGUgaW4gdGhlIHRyZWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGF0ZSBleHRlbmRzIFN0cmF0ZWd5Tm9kZSBpbXBsZW1lbnRzIFBhcmVudCB7XG4gIHByb3RlY3RlZCBhY3Rpb246IEd1YXJkIHwgbnVsbDtcbiAgcHJvdGVjdGVkIGNoaWxkcmVuOiBBcnJheTxCYXNlTm9kZT47XG4gIHB1YmxpYyByZWFkb25seSBwYXJlbnQ6IFBhcmVudCB8IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoaWRlbnRpZmllcjogc3RyaW5nLCBhY3Rpb246IEd1YXJkIHwgbnVsbCwgcGFyZW50PzogUGFyZW50LCBzdHJhdGVneT86IFN0cmF0ZWd5KSB7XG4gICAgc3VwZXIoaWRlbnRpZmllciwgYWN0aW9uLCBwYXJlbnQsIHN0cmF0ZWd5KTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gIH1cblxuICBwdWJsaWMgYWRkQ2hpbGQobm9kZTogQmFzZU5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hpbGRyZW4oKTogQXJyYXk8QmFzZU5vZGU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGZpcnN0IGNoaWxkIHRoYXQgY2FuIHJ1blxuICAgKi9cbiAgcHJvdGVjdGVkIFtTdHJhdGVneS5wcmlvcml0aXNlZF0oKTogTm9kZSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm5leHRSdW5uYWJsZSh0aGlzLmNoaWxkcmVuKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBbU3RyYXRlZ3kuc2VxdWVudGlhbF0oKTogTm9kZSB8IG51bGwge1xuICAgIGNvbnN0IGZpcnN0UnVubmFibGVDaGlsZCA9IHRoaXMubmV4dFJ1bm5hYmxlKHRoaXMuY2hpbGRyZW4pO1xuICAgIGlmIChmaXJzdFJ1bm5hYmxlQ2hpbGQgIT09IG51bGwpIHJldHVybiBmaXJzdFJ1bm5hYmxlQ2hpbGQ7XG5cbiAgICByZXR1cm4gdGhpcy5uZWFyZXN0UnVubmFibGVBbmNlc3RvcigpOyAvLyBubyBtb3JlIHJ1bm5hYmxlIGNoaWxkcmVuIGluIHRoZSBzZXF1ZW5jZSBzbyByZXR1cm4gZmlyc3QgcnVubmFibGUgYW5jZXN0b3JcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHJvb3Qgbm9kZSBvZiB3aG9sZSB0cmVlXG4gICAqL1xuICBwdWJsaWMgZ2V0Um9vdE5vZGUoKTogUGFyZW50IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnRcbiAgICAgID8gdGhpcy5wYXJlbnQuZ2V0Um9vdE5vZGUoKVxuICAgICAgOiB0aGlzO1xuICB9XG59XG5cbiIsImltcG9ydCB7QmFzZU5vZGUsIE5vZGUsIFN0cmF0ZWd5fSBmcm9tIFwiLi9CYXNlTm9kZVwiO1xuaW1wb3J0IHtBY3Rpb24sIEd1YXJkfSBmcm9tIFwiLi4vQWN0b3JcIjtcbmltcG9ydCB7UGFyZW50fSBmcm9tIFwiLi9QYXJlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBOb2RlV2l0aFN0cmF0ZWd5IGV4dGVuZHMgTm9kZSB7XG4gIHJlYWRvbmx5IF9zdHJhdGVneTogU3RyYXRlZ3k7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVXaXRoU3RyYXRlZ3kobm9kZTogYW55KTogbm9kZSBpcyBOb2RlV2l0aFN0cmF0ZWd5IHtcbiAgcmV0dXJuICEhbm9kZS5fc3RyYXRlZ3k7XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJhdGVneU5vZGUgZXh0ZW5kcyBCYXNlTm9kZSB7XG4gIHB1YmxpYyByZWFkb25seSBfc3RyYXRlZ3k6IFN0cmF0ZWd5IHwgdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZGVudGlmaWVyOiBzdHJpbmcsIGFjdGlvbjogQWN0aW9uIHwgR3VhcmQsIHBhcmVudD86IFBhcmVudCwgc3RyYXRlZ3k/OiBTdHJhdGVneSkge1xuICAgIHN1cGVyKGlkZW50aWZpZXIsIGFjdGlvbiwgcGFyZW50KTtcbiAgICB0aGlzLl9zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBzdHJhdGVneSgpOiBTdHJhdGVneSB8IG51bGwge1xuICAgIGlmICh0aGlzLl9zdHJhdGVneSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0cmF0ZWd5O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRTdHJhdGVneUZyb21OZWFyZXN0QW5jZXN0b3IoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi9CYXNlTm9kZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRpb24gZXh0ZW5kcyBOb2RlIHtcbiAgdHJhbnNpdGlvbigpOiBOb2RlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhbnNpdGlvbihub2RlOiBhbnkpOiBub2RlIGlzIFRyYW5zaXRpb24ge1xuICByZXR1cm4gdHlwZW9mIG5vZGUudHJhbnNpdGlvbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb24obm9kZTogTm9kZSk6IE5vZGUgfCBudWxsIHtcbiAgcmV0dXJuIGlzVHJhbnNpdGlvbihub2RlKVxuICAgID8gbm9kZS50cmFuc2l0aW9uKClcbiAgICA6IG5vZGU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9