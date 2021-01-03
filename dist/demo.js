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
var Strategy_1 = __webpack_require__(/*! ../src/Strategy */ "./src/Strategy.ts");
var oakJson = {
    identifier: Oak_1.OakStates.idle, strategy: Strategy_1.Strategy.prioritised,
    children: [
        {
            identifier: Oak_1.OakStates.photosynthesise, strategy: Strategy_1.Strategy.sequential,
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
    identifier: LandScape_1.LandScapeStates.idle, strategy: Strategy_1.Strategy.sequential,
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
        return new ActionState_1.ActionState(subTreeJson.identifier.toString(), actor[subTreeJson.identifier], parent, subTreeJson.strategy);
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
var StrategyNode_1 = __webpack_require__(/*! ./StrategyNode */ "./src/Node/StrategyNode.ts");
var Strategy_1 = __webpack_require__(/*! ../Strategy */ "./src/Strategy.ts");
var ActionState = (function (_super) {
    __extends(ActionState, _super);
    function ActionState(identifier, action, parent, strategy) {
        return _super.call(this, identifier, action, parent, strategy) || this;
    }
    ActionState.prototype.tick = function () {
        this.run();
        return _super.prototype.tick.call(this);
    };
    ActionState.prototype.run = function () {
        this.action.run();
    };
    ActionState.prototype[Strategy_1.Strategy.sequential] = function () {
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
}(StrategyNode_1.StrategyNode));
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
exports.BaseNode = void 0;
var Actor_1 = __webpack_require__(/*! ../Actor */ "./src/Actor.ts");
var Transition_1 = __webpack_require__(/*! ./Transition */ "./src/Node/Transition.ts");
var StrategyNode_1 = __webpack_require__(/*! ./StrategyNode */ "./src/Node/StrategyNode.ts");
var Strategy_1 = __webpack_require__(/*! ../Strategy */ "./src/Strategy.ts");
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
    BaseNode.prototype[Strategy_1.Strategy.prioritised] = function () {
        return this.nextRunnable(this.parent.getChildren());
    };
    BaseNode.prototype[Strategy_1.Strategy.sequential] = function () {
        return this.nearestRunnableAncestor();
    };
    BaseNode.prototype[Strategy_1.Strategy.hereditary] = function () {
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
var StrategyNode_1 = __webpack_require__(/*! ./StrategyNode */ "./src/Node/StrategyNode.ts");
var Strategy_1 = __webpack_require__(/*! ../Strategy */ "./src/Strategy.ts");
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
    State.prototype[Strategy_1.Strategy.prioritised] = function () {
        return this.nextRunnable(this.children);
    };
    State.prototype[Strategy_1.Strategy.sequential] = function () {
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
            if (this._strategy !== undefined) {
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


/***/ }),

/***/ "./src/Strategy.ts":
/*!*************************!*\
  !*** ./src/Strategy.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Strategy = void 0;
var Strategy;
(function (Strategy) {
    Strategy["hereditary"] = "hereditary";
    Strategy["prioritised"] = "prioritised";
    Strategy["sequential"] = "sequential";
})(Strategy = exports.Strategy || (exports.Strategy = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGVtby9MYW5kU2NhcGUudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9PYWsudHMiLCJ3ZWJwYWNrOi8vLy4vZGVtby9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01hY2hpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGUvQWN0aW9uU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGUvQmFzZU5vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL05vZGUvRGVmaW5pdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm9kZS9Qb2ludGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9Ob2RlL1N0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9Ob2RlL1N0cmF0ZWd5Tm9kZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTm9kZS9UcmFuc2l0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9TdHJhdGVneS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiww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SUFHeEMsc0JBQW1CLFVBQWtCLEVBQUUsTUFBc0IsRUFBRSxNQUFlLEVBQUUsUUFBMEI7UUFBMUcsWUFDRSxrQkFBTSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxTQUVsQztRQURDLEtBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDOztJQUM1QixDQUFDO0lBRUQsc0JBQWMsa0NBQVE7YUFBdEI7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUNoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDdkI7WUFDRCxPQUFPLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLENBZGlDLG1CQUFRLEdBY3pDO0FBZFksb0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSekIsU0FBZ0IsWUFBWSxDQUFDLElBQVM7SUFDcEMsT0FBTyxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDO0FBQy9DLENBQUM7QUFGRCxvQ0FFQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxJQUFVO0lBQ25DLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtRQUNuQixDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ1gsQ0FBQztBQUpELGdDQUlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsSUFBWSxRQUlYO0FBSkQsV0FBWSxRQUFRO0lBQ2xCLHFDQUF5QjtJQUN6Qix1Q0FBMkI7SUFDM0IscUNBQXlCO0FBQzNCLENBQUMsRUFKVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUluQiIsImZpbGUiOiJkZW1vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9kZW1vL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vc3JjL05vZGUvTm9kZVwiO1xuaW1wb3J0IHtHdWFyZGVkQWN0aW9ufSBmcm9tIFwiLi4vc3JjL0FjdG9yXCI7XG5cbmV4cG9ydCBlbnVtIExhbmRTY2FwZVN0YXRlcyB7XG4gIGlkbGUgPSAnaWRsZScsXG4gIHNoaW5lID0gJ3NoaW5lJyxcbiAgcmFpbiA9ICdyYWluJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMYW5kU2NhcGVBY3RvciB7XG4gIFtMYW5kU2NhcGVTdGF0ZXMuaWRsZV06IG51bGw7XG4gIFtMYW5kU2NhcGVTdGF0ZXMuc2hpbmVdOiBTaGluZUFjdGlvbjtcbiAgW0xhbmRTY2FwZVN0YXRlcy5yYWluXTogUmFpbkFjdGlvbjtcbn1cblxuZXhwb3J0IGNsYXNzIExhbmRTY2FwZSBpbXBsZW1lbnRzIExhbmRTY2FwZUFjdG9yIHtcbiAgcHVibGljIHN0YXRlOiBOb2RlIHwgbnVsbDtcbiAgcHVibGljIGdyb3VuZHdhdGVyOiBudW1iZXI7XG4gIHB1YmxpYyBveHlnZW46IG51bWJlcjtcblxuICBwdWJsaWMgW0xhbmRTY2FwZVN0YXRlcy5pZGxlXTogbnVsbDtcbiAgcHVibGljIFtMYW5kU2NhcGVTdGF0ZXMuc2hpbmVdOiBTaGluZUFjdGlvbjtcbiAgcHVibGljIFtMYW5kU2NhcGVTdGF0ZXMucmFpbl06IFJhaW5BY3Rpb247XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5zdGF0ZSA9IG51bGw7XG4gICAgdGhpcy5ncm91bmR3YXRlciA9IDA7XG4gICAgdGhpcy5veHlnZW4gPSAwO1xuXG4gICAgdGhpcy5zaGluZSA9IG5ldyBTaGluZUFjdGlvbih0aGlzKTtcbiAgICB0aGlzLnJhaW4gPSBuZXcgUmFpbkFjdGlvbih0aGlzKTtcbiAgfVxuXG4gIHB1YmxpYyBpc1NoaW5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuaWRlbnRpZmllciA9PSBcInNoaW5lXCI7XG4gIH1cblxuICBwdWJsaWMgaGFzV2F0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdW5kd2F0ZXIgPiAwO1xuICB9XG5cbiAgcHVibGljIGdpdmVXYXRlcigpIHtcbiAgICB0aGlzLmdyb3VuZHdhdGVyIC09IDE7XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICBwdWJsaWMgb3h5Z2VuYXRlKCkge1xuICAgIHRoaXMub3h5Z2VuICs9IDE7XG4gIH1cbn1cblxuY2xhc3MgUmFpbkFjdGlvbiBpbXBsZW1lbnRzIEd1YXJkZWRBY3Rpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsYW5kU2NhcGU6IExhbmRTY2FwZSkge1xuICB9XG5cbiAgcHVibGljIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5sYW5kU2NhcGUuZ3JvdW5kd2F0ZXIgKz0gMTtcbiAgfVxufVxuXG5jbGFzcyBTaGluZUFjdGlvbiBpbXBsZW1lbnRzIEd1YXJkZWRBY3Rpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsYW5kU2NhcGU6IExhbmRTY2FwZSkge1xuICB9XG5cbiAgcHVibGljIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuMTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gIH1cbn1cbiIsImltcG9ydCB7R3VhcmRlZEFjdGlvbn0gZnJvbSBcIi4uL3NyYy9BY3RvclwiO1xuaW1wb3J0IHtMYW5kU2NhcGV9IGZyb20gXCIuL0xhbmRTY2FwZVwiO1xuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vc3JjL05vZGUvTm9kZVwiO1xuXG5leHBvcnQgZW51bSBPYWtTdGF0ZXMge1xuICBpZGxlID0gJ2lkbGUnLFxuICBncm93ID0gJ2dyb3cnLFxuICBtYWtlRW5lcmd5ID0gJ21ha2VFbmVyZ3knLFxuICBwaG90b3N5bnRoZXNpc2UgPSAncGhvdG9zeW50aGVzaXNlJyxcbiAgZW1pdE94eWdlbiA9ICdlbWl0T3h5Z2VuJyxcbiAgZ2F0aGVyU3VuID0gJ2dhdGhlclN1bicsXG4gIGdhdGhlcldhdGVyID0gJ2dhdGhlcldhdGVyJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYWtBY3RvciB7XG4gIFtPYWtTdGF0ZXMuaWRsZV06IG51bGw7XG4gIFtPYWtTdGF0ZXMuZ3Jvd106IEdyb3dBY3Rpb247XG4gIFtPYWtTdGF0ZXMubWFrZUVuZXJneV06IE1ha2VFbmVyZ3lBY3Rpb247XG4gIFtPYWtTdGF0ZXMucGhvdG9zeW50aGVzaXNlXTogUGhvdG9zeW50aGVzaXNlQWN0aW9uO1xuICBbT2FrU3RhdGVzLmVtaXRPeHlnZW5dOiBFbWl0T3h5Z2VuQWN0aW9uO1xuICBbT2FrU3RhdGVzLmdhdGhlclN1bl06IEdhdGhlclN1bkFjdGlvbjtcbiAgW09ha1N0YXRlcy5nYXRoZXJXYXRlcl06IEdhdGhlcldhdGVyQWN0aW9uO1xufVxuXG4vLyB0aGUgb2FrIG9iamVjdCAtIHN1Y2tzIHVwIHdhdGVyLCBwaG90b3N5bnRoZXNpc2VzLCBncm93c1xuZXhwb3J0IGNsYXNzIE9hayBpbXBsZW1lbnRzIE9ha0FjdG9yIHtcbiAgcHVibGljIHN0YXRlOiBOb2RlIHwgbnVsbDtcbiAgcHVibGljIGxhbmRzY2FwZTogTGFuZFNjYXBlO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIGVuZXJneTogYm9vbGVhbjtcbiAgcHVibGljIG94eWdlbjogYm9vbGVhbjtcbiAgcHVibGljIHdhdGVyOiBudW1iZXI7XG4gIHB1YmxpYyBzdW46IG51bWJlcjtcblxuICBwdWJsaWMgW09ha1N0YXRlcy5pZGxlXTogbnVsbDtcbiAgcHVibGljIFtPYWtTdGF0ZXMuZ3Jvd106IEdyb3dBY3Rpb247XG4gIHB1YmxpYyBbT2FrU3RhdGVzLm1ha2VFbmVyZ3ldOiBNYWtlRW5lcmd5QWN0aW9uO1xuICBwdWJsaWMgW09ha1N0YXRlcy5waG90b3N5bnRoZXNpc2VdOiBQaG90b3N5bnRoZXNpc2VBY3Rpb247XG4gIHB1YmxpYyBbT2FrU3RhdGVzLmVtaXRPeHlnZW5dOiBFbWl0T3h5Z2VuQWN0aW9uO1xuICBwdWJsaWMgW09ha1N0YXRlcy5nYXRoZXJTdW5dOiBHYXRoZXJTdW5BY3Rpb247XG4gIHB1YmxpYyBbT2FrU3RhdGVzLmdhdGhlcldhdGVyXTogR2F0aGVyV2F0ZXJBY3Rpb247XG5cbiAgY29uc3RydWN0b3IobGFuZHNjYXBlOiBMYW5kU2NhcGUpIHtcbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLmxhbmRzY2FwZSA9IGxhbmRzY2FwZTtcblxuICAgIHRoaXMuaGVpZ2h0ID0gMTtcblxuICAgIHRoaXMuZW5lcmd5ID0gZmFsc2U7XG4gICAgdGhpcy5veHlnZW4gPSBmYWxzZTtcbiAgICB0aGlzLndhdGVyID0gMDtcbiAgICB0aGlzLnN1biA9IDA7XG5cbiAgICB0aGlzLmdyb3cgPSBuZXcgR3Jvd0FjdGlvbih0aGlzKTtcbiAgICB0aGlzLm1ha2VFbmVyZ3kgPSBuZXcgTWFrZUVuZXJneUFjdGlvbih0aGlzKTtcbiAgICB0aGlzLnBob3Rvc3ludGhlc2lzZSA9IG5ldyBQaG90b3N5bnRoZXNpc2VBY3Rpb24odGhpcyk7XG4gICAgdGhpcy5lbWl0T3h5Z2VuID0gbmV3IEVtaXRPeHlnZW5BY3Rpb24odGhpcyk7XG4gICAgdGhpcy5nYXRoZXJTdW4gPSBuZXcgR2F0aGVyU3VuQWN0aW9uKHRoaXMpO1xuICAgIHRoaXMuZ2F0aGVyV2F0ZXIgPSBuZXcgR2F0aGVyV2F0ZXJBY3Rpb24odGhpcyk7XG4gIH1cblxuICBwdWJsaWMgaGFzU3VuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN1biA+IDA7XG4gIH1cblxuICBwdWJsaWMgaGFzV2F0ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMud2F0ZXIgPiAwO1xuICB9XG59XG5cbmNsYXNzIE1ha2VFbmVyZ3lBY3Rpb24gaW1wbGVtZW50cyBHdWFyZGVkQWN0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgb2FrOiBPYWspIHtcbiAgfVxuXG4gIHB1YmxpYyBjYW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2FrLmhhc1N1bigpICYmIHRoaXMub2FrLmhhc1dhdGVyKCk7XG4gIH1cblxuICBwdWJsaWMgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMub2FrLnN1biAtPSAxO1xuICAgIHRoaXMub2FrLndhdGVyIC09IDE7XG4gICAgdGhpcy5vYWsuZW5lcmd5ID0gdHJ1ZTtcbiAgfVxufVxuXG5jbGFzcyBHcm93QWN0aW9uIGltcGxlbWVudHMgR3VhcmRlZEFjdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG9hazogT2FrKSB7XG4gIH1cblxuICBwdWJsaWMgY2FuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9hay5lbmVyZ3k7XG4gIH1cblxuICBwdWJsaWMgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMub2FrLmVuZXJneSA9IGZhbHNlO1xuICAgIHRoaXMub2FrLmhlaWdodCArPSAxO1xuICB9XG59XG5cbmNsYXNzIFBob3Rvc3ludGhlc2lzZUFjdGlvbiBpbXBsZW1lbnRzIEd1YXJkZWRBY3Rpb24ge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBvYWs6IE9haykge1xuICB9XG5cbiAgcHVibGljIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vYWsuaGFzU3VuKCkgJiYgdGhpcy5vYWsuaGFzV2F0ZXIoKTtcbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgfVxufVxuXG5jbGFzcyBFbWl0T3h5Z2VuQWN0aW9uIGltcGxlbWVudHMgR3VhcmRlZEFjdGlvbiB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIG9hazogT2FrKSB7XG4gIH1cblxuICBwdWJsaWMgY2FuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9hay5veHlnZW47XG4gIH1cblxuICBwdWJsaWMgcnVuKCk6IHZvaWQge1xuICAgIHRoaXMub2FrLm94eWdlbiA9IGZhbHNlO1xuICAgIHRoaXMub2FrLmxhbmRzY2FwZS5veHlnZW5hdGUoKTtcbiAgfVxufVxuXG5jbGFzcyBHYXRoZXJTdW5BY3Rpb24gaW1wbGVtZW50cyBHdWFyZGVkQWN0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgb2FrOiBPYWspIHtcbiAgfVxuXG4gIHB1YmxpYyBjYW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2FrLmxhbmRzY2FwZS5pc1NoaW5pbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5vYWsuc3VuICs9IDE7XG4gIH1cbn1cblxuY2xhc3MgR2F0aGVyV2F0ZXJBY3Rpb24gaW1wbGVtZW50cyBHdWFyZGVkQWN0aW9uIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgb2FrOiBPYWspIHtcbiAgfVxuXG4gIGNhbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vYWsubGFuZHNjYXBlLmhhc1dhdGVyKCk7XG4gIH1cblxuICBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5vYWsud2F0ZXIgKz0gdGhpcy5vYWsubGFuZHNjYXBlLmdpdmVXYXRlcigpO1xuICB9XG59XG4iLCJpbXBvcnQge0xhbmRTY2FwZSwgTGFuZFNjYXBlQWN0b3IsIExhbmRTY2FwZVN0YXRlc30gZnJvbSBcIi4vTGFuZFNjYXBlXCI7XG5pbXBvcnQge09haywgT2FrQWN0b3IsIE9ha1N0YXRlc30gZnJvbSBcIi4vT2FrXCI7XG5pbXBvcnQge01hY2hpbmV9IGZyb20gXCIuLi9zcmMvTWFjaGluZVwiO1xuaW1wb3J0IHtTdHJhdGVneX0gZnJvbSBcIi4uL3NyYy9TdHJhdGVneVwiO1xuXG4vLyB0aGUganNvbiB0aGF0IGRlZmluZXMgdGhlIHRyZWVzIHRoYXQgY29udHJvbCB0aGUgYWN0b3JzXG5jb25zdCBvYWtKc29uID0ge1xuICBpZGVudGlmaWVyOiBPYWtTdGF0ZXMuaWRsZSwgc3RyYXRlZ3k6IFN0cmF0ZWd5LnByaW9yaXRpc2VkLFxuICBjaGlsZHJlbjogW1xuICAgIHtcbiAgICAgIGlkZW50aWZpZXI6IE9ha1N0YXRlcy5waG90b3N5bnRoZXNpc2UsIHN0cmF0ZWd5OiBTdHJhdGVneS5zZXF1ZW50aWFsLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge2lkZW50aWZpZXI6IE9ha1N0YXRlcy5tYWtlRW5lcmd5fSxcbiAgICAgICAge2lkZW50aWZpZXI6IE9ha1N0YXRlcy5ncm93fSxcbiAgICAgICAge2lkZW50aWZpZXI6IE9ha1N0YXRlcy5lbWl0T3h5Z2VufSxcbiAgICAgIF1cbiAgICB9LFxuICAgIHtpZGVudGlmaWVyOiBPYWtTdGF0ZXMuZ2F0aGVyU3VufSxcbiAgICB7aWRlbnRpZmllcjogT2FrU3RhdGVzLmdhdGhlcldhdGVyfSxcbiAgXVxufTtcblxuY29uc3QgbGFuZHNjYXBlSnNvbiA9IHtcbiAgaWRlbnRpZmllcjogTGFuZFNjYXBlU3RhdGVzLmlkbGUsIHN0cmF0ZWd5OiBTdHJhdGVneS5zZXF1ZW50aWFsLFxuICBjaGlsZHJlbjogW1xuICAgIHtpZGVudGlmaWVyOiBMYW5kU2NhcGVTdGF0ZXMuc2hpbmV9LFxuICAgIHtpZGVudGlmaWVyOiBMYW5kU2NhcGVTdGF0ZXMucmFpbn0sXG4gIF1cbn07XG5cbi8vIHNldCB1cCB0aGUgYWN0b3JzXG5jb25zdCBsYW5kc2NhcGUgPSBuZXcgTGFuZFNjYXBlKCk7IC8vIG9uZSBhY3RvclxuY29uc3Qgb2FrID0gbmV3IE9hayhsYW5kc2NhcGUpOyAvLyB0aGUgb3RoZXIgYWN0b3IgaW4gdGhpcyBkcmFtYVxuXG4vLyBtYWtlIGluc3RhbmNlIG9mIE1hY2hpbmUgYW5kIGdldCB0aGUgcm9vdCBub2RlcyBmb3IgZWFjaCBhY3RvclxuY29uc3QgbWFjaGluZSA9IG5ldyBNYWNoaW5lKCk7XG5vYWsuc3RhdGUgPSBtYWNoaW5lLmdlbmVyYXRlVHJlZTxPYWtBY3Rvcj4ob2FrSnNvbiwgb2FrKTtcbmxhbmRzY2FwZS5zdGF0ZSA9IG1hY2hpbmUuZ2VuZXJhdGVUcmVlPExhbmRTY2FwZUFjdG9yPihsYW5kc2NhcGVKc29uLCBsYW5kc2NhcGUpO1xuXG5jb25zdCBzdGVwID0gZnVuY3Rpb24gKCkge1xuICBjb25zb2xlLmxvZyhcIk9hazogICAgICAgXCIsIG9hay5zdGF0ZS5pZGVudGlmaWVyLCBcInxcIiwgb2FrLmhlaWdodCwgXCJtIHRhbGwgfFwiLCBvYWsud2F0ZXIsIFwid2F0ZXIgfFwiLCBvYWsuc3VuLCBcInN1blwiKTtcbiAgY29uc29sZS5sb2coXCJMYW5kc2NhcGU6IFwiLCBsYW5kc2NhcGUuc3RhdGUuaWRlbnRpZmllciwgXCJ8XCIsIGxhbmRzY2FwZS5ncm91bmR3YXRlciwgXCJncm91bmR3YXRlclwiKTtcbiAgY29uc29sZS5sb2coKTtcblxuICAvLyB0cmlnZ2VyIHRoZSBuZXh0IHN0YXRlIHRyYW5zaXRpb25zXG4gIG9hay5zdGF0ZSA9IG9hay5zdGF0ZS50aWNrKCk7XG4gIGxhbmRzY2FwZS5zdGF0ZSA9IGxhbmRzY2FwZS5zdGF0ZS50aWNrKCk7XG59XG4vLyBldmVyeSBzZWNvbmQsIHNvbWV0aGluZyBoYXBwZW5zIGluIHRoZSBlY29zeXN0ZW1cbnNldEludGVydmFsKCgpID0+IHN0ZXAoKSwgMTAwMClcbiIsImV4cG9ydCB0eXBlIEFjdG9yPEludGVyZmFjZT4gPSB7XG4gIFtrZXkgaW4ga2V5b2YgSW50ZXJmYWNlXTogQWN0aW9uIHwgR3VhcmRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb24ge1xuICBydW4oKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHdWFyZCB7XG4gIGNhbigpOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEd1YXJkZWRBY3Rpb24gZXh0ZW5kcyBBY3Rpb24sIEd1YXJkIHtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzR3VhcmQoYWN0aW9uOiBhbnkpOiBhY3Rpb24gaXMgR3VhcmQge1xuICByZXR1cm4gYWN0aW9uICYmIHR5cGVvZiBhY3Rpb24uY2FuID09PSAnZnVuY3Rpb24nO1xufVxuIiwiaW1wb3J0IHtQb2ludGVyfSBmcm9tIFwiLi9Ob2RlL1BvaW50ZXJcIjtcbmltcG9ydCB7U3RhdGV9IGZyb20gXCIuL05vZGUvU3RhdGVcIjtcbmltcG9ydCB7QWN0aW9uLCBBY3RvciwgR3VhcmR9IGZyb20gXCIuL0FjdG9yXCI7XG5pbXBvcnQge05vZGVEZWZpbml0aW9uLCBpc1BvaW50ZXJOb2RlRGVmaW5pdGlvbiwgaXNUcmFuc2l0aW9uTm9kZURlZmluaXRpb259IGZyb20gXCIuL05vZGUvRGVmaW5pdGlvblwiO1xuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi9Ob2RlL05vZGVcIjtcbmltcG9ydCB7QWN0aW9uU3RhdGV9IGZyb20gXCIuL05vZGUvQWN0aW9uU3RhdGVcIjtcbmltcG9ydCB7UGFyZW50fSBmcm9tIFwiLi9Ob2RlL1BhcmVudFwiO1xuXG4vKipcbiAqIFRoZSB0cmVlIGdlbmVyYXRvci4gIEluc3RhbnRpYXRlIGFuZCB0aGVuIGNhbGwgZ2VuZXJhdGVUcmVlKCksXG4gKiBwYXNzaW5nIHRoZSBKU09OIGRlZmluaXRpb24gb2YgdGhlIHRyZWUgYW5kIHRoZSBvYmplY3QgdGhlIHRyZWUgY29udHJvbHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYWNoaW5lIHtcbiAgcHVibGljIGdlbmVyYXRlVHJlZTxBY3RvckludGVyZmFjZT4odHJlZUpzb246IE5vZGVEZWZpbml0aW9uPGtleW9mIEFjdG9ySW50ZXJmYWNlPiwgYWN0b3I6IEFjdG9yPEFjdG9ySW50ZXJmYWNlPikge1xuICAgIHJldHVybiB0aGlzLnJlYWQ8QWN0b3JJbnRlcmZhY2U+KHRyZWVKc29uLCBudWxsLCBhY3Rvcik7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVhZDxBY3RvckludGVyZmFjZT4oc3ViVHJlZUpzb246IE5vZGVEZWZpbml0aW9uPGtleW9mIEFjdG9ySW50ZXJmYWNlPiwgcGFyZW50OiBQYXJlbnQgfCBudWxsLCBhY3RvcjogQWN0b3I8QWN0b3JJbnRlcmZhY2U+KTogTm9kZSB7XG4gICAgaWYgKGlzUG9pbnRlck5vZGVEZWZpbml0aW9uKHN1YlRyZWVKc29uKSkge1xuICAgICAgcmV0dXJuIG5ldyBQb2ludGVyKFxuICAgICAgICBzdWJUcmVlSnNvbi5pZGVudGlmaWVyLnRvU3RyaW5nKCksXG4gICAgICAgIGFjdG9yW3N1YlRyZWVKc29uLmlkZW50aWZpZXJdIGFzIEd1YXJkLFxuICAgICAgICBwYXJlbnQsXG4gICAgICAgIHN1YlRyZWVKc29uLnN0cmF0ZWd5LFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoaXNUcmFuc2l0aW9uTm9kZURlZmluaXRpb248a2V5b2YgQWN0b3JJbnRlcmZhY2U+KHN1YlRyZWVKc29uKSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBTdGF0ZShcbiAgICAgICAgc3ViVHJlZUpzb24uaWRlbnRpZmllci50b1N0cmluZygpLFxuICAgICAgICBhY3RvcltzdWJUcmVlSnNvbi5pZGVudGlmaWVyXSBhcyBHdWFyZCxcbiAgICAgICAgcGFyZW50LFxuICAgICAgICBzdWJUcmVlSnNvbi5zdHJhdGVneSxcbiAgICAgICk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN1YlRyZWVKc29uLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5vZGUuYWRkQ2hpbGQodGhpcy5yZWFkPEFjdG9ySW50ZXJmYWNlPihzdWJUcmVlSnNvbi5jaGlsZHJlbltpXSwgbm9kZSwgYWN0b3IpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgQWN0aW9uU3RhdGUoXG4gICAgICBzdWJUcmVlSnNvbi5pZGVudGlmaWVyLnRvU3RyaW5nKCksXG4gICAgICBhY3RvcltzdWJUcmVlSnNvbi5pZGVudGlmaWVyXSBhcyBBY3Rpb24sXG4gICAgICBwYXJlbnQsXG4gICAgICBzdWJUcmVlSnNvbi5zdHJhdGVneSxcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQge0FjdGlvbn0gZnJvbSBcIi4uL0FjdG9yXCI7XG5pbXBvcnQge1BhcmVudH0gZnJvbSBcIi4vUGFyZW50XCI7XG5pbXBvcnQge1N0cmF0ZWd5Tm9kZX0gZnJvbSBcIi4vU3RyYXRlZ3lOb2RlXCI7XG5pbXBvcnQge1N0cmF0ZWd5fSBmcm9tIFwiLi4vU3RyYXRlZ3lcIjtcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4vTm9kZVwiO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uU3RhdGUgZXh0ZW5kcyBTdHJhdGVneU5vZGUge1xuICBwcm90ZWN0ZWQgYWN0aW9uOiBBY3Rpb247XG4gIHB1YmxpYyByZWFkb25seSBwYXJlbnQ6IFBhcmVudDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoaWRlbnRpZmllcjogc3RyaW5nLCBhY3Rpb246IEFjdGlvbiwgcGFyZW50OiBQYXJlbnQsIHN0cmF0ZWd5PzogU3RyYXRlZ3kgfCBudWxsKSB7XG4gICAgc3VwZXIoaWRlbnRpZmllciwgYWN0aW9uLCBwYXJlbnQsIHN0cmF0ZWd5KTtcbiAgfVxuXG4gIHB1YmxpYyB0aWNrKCk6IE5vZGUge1xuICAgIHRoaXMucnVuKCk7XG4gICAgcmV0dXJuIHN1cGVyLnRpY2soKTtcbiAgfVxuXG4gIC8vIHJ1biB0aGUgYmVoYXZpb3VyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHN0YXRlXG4gIHByb3RlY3RlZCBydW4oKTogdm9pZCB7XG4gICAgdGhpcy5hY3Rpb24ucnVuKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgW1N0cmF0ZWd5LnNlcXVlbnRpYWxdKCk6IE5vZGUgfCBudWxsIHtcbiAgICBsZXQgZm91bmRUaGlzID0gZmFsc2U7XG4gICAgY29uc3Qgc2libGluZ3MgPSB0aGlzLnBhcmVudC5nZXRDaGlsZHJlbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2libGluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNpYmxpbmcgPSBzaWJsaW5nc1tpXTtcbiAgICAgIGlmICh0aGlzLmlkZW50aWZpZXIgPT0gc2libGluZy5pZGVudGlmaWVyKSB7XG4gICAgICAgIGZvdW5kVGhpcyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKGZvdW5kVGhpcyAmJiBzaWJsaW5nLmNhbigpKSB7XG4gICAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uZWFyZXN0UnVubmFibGVBbmNlc3RvcigpOyAvLyBubyBtb3JlIHJ1bm5hYmxlIGNoaWxkcmVuIGluIHRoZSBzZXF1ZW5jZSBzbyByZXR1cm4gZmlyc3QgcnVubmFibGUgYW5jZXN0b3JcbiAgfVxufVxuIiwiaW1wb3J0IHtBY3Rpb24sIEd1YXJkLCBpc0d1YXJkfSBmcm9tIFwiLi4vQWN0b3JcIjtcbmltcG9ydCB7dHJhbnNpdGlvbn0gZnJvbSBcIi4vVHJhbnNpdGlvblwiO1xuaW1wb3J0IHtQYXJlbnR9IGZyb20gXCIuL1BhcmVudFwiO1xuaW1wb3J0IHtpc05vZGVXaXRoU3RyYXRlZ3ksIE5vZGVXaXRoU3RyYXRlZ3l9IGZyb20gXCIuL1N0cmF0ZWd5Tm9kZVwiO1xuaW1wb3J0IHtTdHJhdGVneX0gZnJvbSBcIi4uL1N0cmF0ZWd5XCI7XG5pbXBvcnQge0Fzc2VydEZOLCBOb2RlLCBUZXN0Rk59IGZyb20gXCIuL05vZGVcIjtcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGZvciBub2RlcyBpbiB0aGUgdHJlZS5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VOb2RlIGltcGxlbWVudHMgTm9kZSB7XG4gIHB1YmxpYyByZWFkb25seSBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhY3Rpb246IEFjdGlvbiB8IEd1YXJkIHwgbnVsbDtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFyZW50OiBQYXJlbnQgfCB1bmRlZmluZWQ7XG5cbiAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGlkZW50aWZpZXI6IHN0cmluZywgYWN0aW9uOiBBY3Rpb24gfCBHdWFyZCB8IG51bGwsIHBhcmVudD86IFBhcmVudCkge1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG5cbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdHJhdGVneUZyb21OZWFyZXN0QW5jZXN0b3IoKTogU3RyYXRlZ3kgfCBudWxsIHtcbiAgICBjb25zdCBhbmNlc3RvciA9IHRoaXMubmVhcmVzdEFuY2VzdG9yV2l0aFN0cmF0ZWd5KCk7XG4gICAgaWYgKGFuY2VzdG9yICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gYW5jZXN0b3IuX3N0cmF0ZWd5O1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldCBzdHJhdGVneSgpOiBTdHJhdGVneSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmF0ZWd5RnJvbU5lYXJlc3RBbmNlc3RvcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgdGljayBvZiB0aGUgY2xvY2suICBSZXR1cm5zIHRoZSBuZXh0IHN0YXRlLlxuICAgKi9cbiAgcHVibGljIHRpY2soKTogTm9kZSB7XG4gICAgY29uc3QgcG90ZW50aWFsTmV4dFN0YXRlID0gdGhpcy5uZXh0U3RhdGUoKTtcblxuICAgIGlmIChwb3RlbnRpYWxOZXh0U3RhdGUgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uKHBvdGVudGlhbE5leHRTdGF0ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY2FuKCkpIHtcbiAgICAgIC8vIG5vIGNoaWxkIHN0YXRlLCB0cnkgYW5kIHN0YXkgaW4gdGhpcyBvbmVcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIGNhbid0IHN0YXkgaW4gdGhpcyBvbmUsIHNvIGJhY2sgdXAgdGhlIHRyZWVcbiAgICByZXR1cm4gdHJhbnNpdGlvbih0aGlzLm5lYXJlc3RSdW5uYWJsZUFuY2VzdG9yKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldHMgbmV4dCBzdGF0ZSB0aGF0IHdvdWxkIGJlIG1vdmVkIHRvIGZyb20gY3VycmVudCBzdGF0ZVxuICAgKi9cbiAgcHJvdGVjdGVkIG5leHRTdGF0ZSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuc3RyYXRlZ3kgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzW3RoaXMuc3RyYXRlZ3ldKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRydWUgaWYgYWN0b3IgYWxsb3dlZCB0byBlbnRlciB0aGlzIHN0YXRlXG4gICAqL1xuICBwdWJsaWMgY2FuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0d1YXJkKHRoaXMuYWN0aW9uKSA/IHRoaXMuYWN0aW9uLmNhbigpIDogdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzd2l0Y2hlcyBzdGF0ZSB0byBkaXJlY3QgY2hpbGQgb2Ygcm9vdCBzdGF0ZSB3aXRoIHBhc3NlZCBpZGVudGlmaWVyXG4gICAqIHVzZSB2ZXJ5IHNwYXJpbmdseSAtIHJlYWxseSBvbmx5IGZvciBpbXBvcnRhbnQgZXZlbnRzIHRoYXRcbiAgICogcmVxdWlyZSBtYWNoaW5lIHRvIHRlbXBvcmFyaWx5IHJlbGlucXVpc2ggY29udHJvbCBvdmVyIGFjdG9yXG4gICAqIGUuZy4gYSBzb2xkaWVyIHdobyBpcyBtb3N0bHkgYXV0b25vbW91cywgYnV0IG9jY2FzaW9uYWxseSByZWNlaXZlcyBvcmRlcnNcbiAgICovXG4gIHB1YmxpYyB3YXJwKGlkZW50aWZpZXI6IHN0cmluZyk6IE5vZGUge1xuICAgIGNvbnN0IHJvb3ROb2RlQ2hpbGRyZW4gPSB0aGlzLmdldFJvb3ROb2RlKCkuZ2V0Q2hpbGRyZW4oKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3ROb2RlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyb290Tm9kZUNoaWxkcmVuW2ldLmlkZW50aWZpZXIgPT0gaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gcm9vdE5vZGVDaGlsZHJlbltpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7IC8vIGNvdWxkbid0IGZpbmQgbm9kZSAtIHN0YXkgaW4gY3VycmVudCBzdGF0ZVxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgZmlyc3QgY2hpbGQgdGhhdCBjYW4gcnVuXG4gICAqL1xuICBwcm90ZWN0ZWQgW1N0cmF0ZWd5LnByaW9yaXRpc2VkXSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFJ1bm5hYmxlKHRoaXMucGFyZW50LmdldENoaWxkcmVuKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJ1bnMgYWxsIHJ1bm5hYmxlIGNoaWxkcmVuIGluIG9yZGVyLCB0aGVuIGtpY2tzIHVwIHRvIGNoaWxkcmVuJ3MgY2xvc2VzdCBydW5uYWJsZSBhbmNlc3RvclxuICAgKi9cbiAgcHJvdGVjdGVkIFtTdHJhdGVneS5zZXF1ZW50aWFsXSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmVhcmVzdFJ1bm5hYmxlQW5jZXN0b3IoKTtcbiAgfVxuXG4gIC8vIGEgc3RyYXRlZ3kgdGhhdCBtb3ZlcyB0byB0aGUgZmlyc3Qgc3lub255bW91cyBhbmNlc3RvclxuICBwdWJsaWMgW1N0cmF0ZWd5LmhlcmVkaXRhcnldKCk6IE5vZGUge1xuICAgIHJldHVybiB0aGlzLm5lYXJlc3ROYW1lc2FrZUFuY2VzdG9yKHRoaXMuaWRlbnRpZmllcik7XG4gIH1cblxuICAvKipcbiAgICogZ2V0cyBuZXh0IHJ1bm5hYmxlIG5vZGUgaW4gcGFzc2VkIGxpc3RcbiAgICovXG4gIHByb3RlY3RlZCBuZXh0UnVubmFibGUobm9kZXM6IEFycmF5PE5vZGU+KTogTm9kZSB8IG51bGwge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChub2Rlc1tpXS5jYW4oKSkge1xuICAgICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBmaXJzdCBuYW1lc2FrZSBmb3JlYmVhciBlbmNvdW50ZXJlZCB3aGVuIGdvaW5nIGRpcmVjdGx5IHVwIHRyZWVcbiAgICovXG4gIHB1YmxpYyBuZWFyZXN0QW5jZXN0b3I8TiBleHRlbmRzIE5vZGU+KHRlc3Q6IFRlc3RGTiB8IEFzc2VydEZOPE4+KTogTiB8IG51bGwge1xuICAgIGlmICh0aGlzLnBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRlc3QodGhpcy5wYXJlbnQpID09PSB0cnVlKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICByZXR1cm4gdGhpcy5wYXJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucGFyZW50Lm5lYXJlc3RBbmNlc3RvcjxOPih0ZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIHJvb3Qgbm9kZSBvZiB3aG9sZSB0cmVlXG4gICAqL1xuICBwdWJsaWMgZ2V0Um9vdE5vZGUoKTogUGFyZW50IHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0Um9vdE5vZGUoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBuZWFyZXN0QW5jZXN0b3JXaXRoU3RyYXRlZ3koKTogTm9kZVdpdGhTdHJhdGVneSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLm5lYXJlc3RBbmNlc3Rvcihpc05vZGVXaXRoU3RyYXRlZ3kpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgbmVhcmVzdCBhbmNlc3RvciB0aGF0IGNhbiBydW5cbiAgICovXG4gIHByb3RlY3RlZCBuZWFyZXN0UnVubmFibGVBbmNlc3RvcigpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmVhcmVzdEFuY2VzdG9yKChub2RlOiBOb2RlKSA9PiBub2RlLmNhbigpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBuZWFyZXN0TmFtZXNha2VBbmNlc3RvcihpZGVudGlmaWVyOiBzdHJpbmcpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmVhcmVzdEFuY2VzdG9yKChub2RlOiBOb2RlKSA9PiBub2RlLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpO1xuICB9XG59XG4iLCJpbXBvcnQge1N0cmF0ZWd5fSBmcm9tIFwiLi4vU3RyYXRlZ3lcIjtcblxuZXhwb3J0IHR5cGUgTm9kZURlZmluaXRpb248U3RhdGVzPiA9IHtcbiAgcmVhZG9ubHkgaWRlbnRpZmllcjogU3RhdGVzO1xuICByZWFkb25seSBzdHJhdGVneT86IFN0cmF0ZWd5IHwgbnVsbDtcbn1cblxuZXhwb3J0IHR5cGUgVHJhbnNpdGlvbk5vZGVEZWZpbml0aW9uPFN0YXRlcz4gPSBOb2RlRGVmaW5pdGlvbjxTdGF0ZXM+ICYge1xuICByZWFkb25seSBjaGlsZHJlbjogQXJyYXk8Tm9kZURlZmluaXRpb248U3RhdGVzPj47XG59XG5leHBvcnQgdHlwZSBQb2ludGVyTm9kZURlZmluaXRpb248U3RhdGVzPiA9IE5vZGVEZWZpbml0aW9uPFN0YXRlcz4gJiB7XG4gIHJlYWRvbmx5IHBvaW50ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1BvaW50ZXJOb2RlRGVmaW5pdGlvbjxTdGF0ZXM+KG5vZGU6IGFueSk6IG5vZGUgaXMgUG9pbnRlck5vZGVEZWZpbml0aW9uPFN0YXRlcz4ge1xuICByZXR1cm4gbm9kZS5wb2ludGVyID09PSB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUcmFuc2l0aW9uTm9kZURlZmluaXRpb248U3RhdGVzPihub2RlOiBhbnkpOiBub2RlIGlzIFRyYW5zaXRpb25Ob2RlRGVmaW5pdGlvbjxTdGF0ZXM+IHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbik7XG59XG4iLCJpbXBvcnQge1RyYW5zaXRpb259IGZyb20gXCIuL1RyYW5zaXRpb25cIjtcbmltcG9ydCB7UGFyZW50fSBmcm9tIFwiLi9QYXJlbnRcIjtcbmltcG9ydCB7U3RyYXRlZ3lOb2RlfSBmcm9tIFwiLi9TdHJhdGVneU5vZGVcIjtcbmltcG9ydCB7R3VhcmR9IGZyb20gXCIuLi9BY3RvclwiO1xuaW1wb3J0IHtTdHJhdGVneX0gZnJvbSBcIi4uL1N0cmF0ZWd5XCI7XG5pbXBvcnQge05vZGV9IGZyb20gXCIuL05vZGVcIjtcblxuLyoqXG4gKiBBIHBvaW50ZXIgc3RhdGUgaW4gdGhlIHRyZWUuICBEaXJlY3RzIHRoZSBhY3RvciB0byBhIHN5bm9ueW1vdXMgc3RhdGVcbiAqIGZ1cnRoZXIgdXAgdGhlIHRyZWUuICBXaGljaCBzeW5vbnltb3VzIHN0YXRlIHRoZSBhY3RvciB0cmFuc2l0aW9ucyB0b1xuICogaXMgZGVwZW5kZW50IG9uIHRoZSBwb2ludGVyJ3Mgc3RyYXRlZ3kuXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgU3RyYXRlZ3lOb2RlIGltcGxlbWVudHMgVHJhbnNpdGlvbiB7XG4gIHByb3RlY3RlZCBhY3Rpb246IEd1YXJkIHwgbnVsbDtcbiAgcHVibGljIHJlYWRvbmx5IHBhcmVudDogUGFyZW50O1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihpZGVudGlmaWVyOiBzdHJpbmcsIGFjdGlvbjogR3VhcmQgfCBudWxsLCBwYXJlbnQ/OiBQYXJlbnQsIHN0cmF0ZWd5PzogU3RyYXRlZ3kgfCBudWxsKSB7XG4gICAgc3VwZXIoaWRlbnRpZmllciwgYWN0aW9uLCBwYXJlbnQsIHN0cmF0ZWd5KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgc3RyYXRlZ3koKTogU3RyYXRlZ3kgfCBudWxsIHtcbiAgICBpZiAodGhpcy5fc3RyYXRlZ3kpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdHJhdGVneTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyYXRlZ3lGcm9tTmVhcmVzdEFuY2VzdG9yKCk7XG4gIH1cblxuICAvLyB0cmFuc2l0aW9uIG91dCBvZiB0aGlzIHN0YXRlIHVzaW5nIHRoZSBzdGF0ZSdzIHN0cmF0ZWd5XG4gIHB1YmxpYyB0cmFuc2l0aW9uKCk6IE5vZGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpc1t0aGlzLnN0cmF0ZWd5XSgpO1xuICB9XG59XG4iLCJpbXBvcnQge0d1YXJkfSBmcm9tIFwiLi4vQWN0b3JcIjtcbmltcG9ydCB7UGFyZW50fSBmcm9tIFwiLi9QYXJlbnRcIjtcbmltcG9ydCB7U3RyYXRlZ3lOb2RlfSBmcm9tIFwiLi9TdHJhdGVneU5vZGVcIjtcbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gXCIuLi9TdHJhdGVneVwiO1xuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi9Ob2RlXCI7XG5cbi8qKlxuICogIEEgbm9ybWFsIHN0YXRlIGluIHRoZSB0cmVlLlxuICovXG5leHBvcnQgY2xhc3MgU3RhdGUgZXh0ZW5kcyBTdHJhdGVneU5vZGUgaW1wbGVtZW50cyBQYXJlbnQge1xuICBwcm90ZWN0ZWQgYWN0aW9uOiBHdWFyZCB8IG51bGw7XG4gIHByb3RlY3RlZCBjaGlsZHJlbjogQXJyYXk8Tm9kZT47XG4gIHB1YmxpYyByZWFkb25seSBwYXJlbnQ6IFBhcmVudCB8IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoaWRlbnRpZmllcjogc3RyaW5nLCBhY3Rpb246IEd1YXJkIHwgbnVsbCwgcGFyZW50PzogUGFyZW50LCBzdHJhdGVneT86IFN0cmF0ZWd5IHwgbnVsbCkge1xuICAgIHN1cGVyKGlkZW50aWZpZXIsIGFjdGlvbiwgcGFyZW50LCBzdHJhdGVneSk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG5cbiAgcHVibGljIGFkZENoaWxkKG5vZGU6IE5vZGUpOiB2b2lkIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gobm9kZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hpbGRyZW4oKTogQXJyYXk8Tm9kZT4ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgZmlyc3QgY2hpbGQgdGhhdCBjYW4gcnVuXG4gICAqL1xuICBwcm90ZWN0ZWQgW1N0cmF0ZWd5LnByaW9yaXRpc2VkXSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFJ1bm5hYmxlKHRoaXMuY2hpbGRyZW4pO1xuICB9XG5cbiAgcHJvdGVjdGVkIFtTdHJhdGVneS5zZXF1ZW50aWFsXSgpOiBOb2RlIHwgbnVsbCB7XG4gICAgY29uc3QgZmlyc3RSdW5uYWJsZUNoaWxkID0gdGhpcy5uZXh0UnVubmFibGUodGhpcy5jaGlsZHJlbik7XG4gICAgaWYgKGZpcnN0UnVubmFibGVDaGlsZCAhPT0gbnVsbCkgcmV0dXJuIGZpcnN0UnVubmFibGVDaGlsZDtcblxuICAgIHJldHVybiB0aGlzLm5lYXJlc3RSdW5uYWJsZUFuY2VzdG9yKCk7IC8vIG5vIG1vcmUgcnVubmFibGUgY2hpbGRyZW4gaW4gdGhlIHNlcXVlbmNlIHNvIHJldHVybiBmaXJzdCBydW5uYWJsZSBhbmNlc3RvclxuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgcm9vdCBub2RlIG9mIHdob2xlIHRyZWVcbiAgICovXG4gIHB1YmxpYyBnZXRSb290Tm9kZSgpOiBQYXJlbnQge1xuICAgIHJldHVybiB0aGlzLnBhcmVudFxuICAgICAgPyB0aGlzLnBhcmVudC5nZXRSb290Tm9kZSgpXG4gICAgICA6IHRoaXM7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQge0Jhc2VOb2RlfSBmcm9tIFwiLi9CYXNlTm9kZVwiO1xuaW1wb3J0IHtBY3Rpb24sIEd1YXJkfSBmcm9tIFwiLi4vQWN0b3JcIjtcbmltcG9ydCB7UGFyZW50fSBmcm9tIFwiLi9QYXJlbnRcIjtcbmltcG9ydCB7U3RyYXRlZ3l9IGZyb20gXCIuLi9TdHJhdGVneVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVXaXRoU3RyYXRlZ3kgZXh0ZW5kcyBOb2RlIHtcbiAgcmVhZG9ubHkgX3N0cmF0ZWd5OiBTdHJhdGVneSB8IHVuZGVmaW5lZCB8IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVXaXRoU3RyYXRlZ3kobm9kZTogYW55KTogbm9kZSBpcyBOb2RlV2l0aFN0cmF0ZWd5IHtcbiAgcmV0dXJuICEhbm9kZS5fc3RyYXRlZ3k7XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJhdGVneU5vZGUgZXh0ZW5kcyBCYXNlTm9kZSB7XG4gIHB1YmxpYyByZWFkb25seSBfc3RyYXRlZ3k6IFN0cmF0ZWd5IHwgdW5kZWZpbmVkIHwgbnVsbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoaWRlbnRpZmllcjogc3RyaW5nLCBhY3Rpb246IEFjdGlvbiB8IEd1YXJkLCBwYXJlbnQ/OiBQYXJlbnQsIHN0cmF0ZWd5PzogU3RyYXRlZ3kgfCBudWxsKSB7XG4gICAgc3VwZXIoaWRlbnRpZmllciwgYWN0aW9uLCBwYXJlbnQpO1xuICAgIHRoaXMuX3N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IHN0cmF0ZWd5KCk6IFN0cmF0ZWd5IHwgbnVsbCB7XG4gICAgaWYgKHRoaXMuX3N0cmF0ZWd5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zdHJhdGVneTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0U3RyYXRlZ3lGcm9tTmVhcmVzdEFuY2VzdG9yKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7Tm9kZX0gZnJvbSBcIi4vTm9kZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRpb24gZXh0ZW5kcyBOb2RlIHtcbiAgdHJhbnNpdGlvbigpOiBOb2RlIHwgbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVHJhbnNpdGlvbihub2RlOiBhbnkpOiBub2RlIGlzIFRyYW5zaXRpb24ge1xuICByZXR1cm4gdHlwZW9mIG5vZGUudHJhbnNpdGlvbiA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb24obm9kZTogTm9kZSk6IE5vZGUgfCBudWxsIHtcbiAgcmV0dXJuIGlzVHJhbnNpdGlvbihub2RlKVxuICAgID8gbm9kZS50cmFuc2l0aW9uKClcbiAgICA6IG5vZGU7XG59XG4iLCJleHBvcnQgZW51bSBTdHJhdGVneSB7XG4gIGhlcmVkaXRhcnkgPSAnaGVyZWRpdGFyeScsXG4gIHByaW9yaXRpc2VkID0gJ3ByaW9yaXRpc2VkJyxcbiAgc2VxdWVudGlhbCA9ICdzZXF1ZW50aWFsJyxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=