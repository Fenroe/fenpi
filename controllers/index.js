"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjects = exports.postProject = exports.getProject = exports.getAllProjects = exports.deleteProject = exports.sendEmail = void 0;
var sendEmail_1 = require("./sendEmail");
Object.defineProperty(exports, "sendEmail", { enumerable: true, get: function () { return __importDefault(sendEmail_1).default; } });
var deleteProject_1 = require("./deleteProject");
Object.defineProperty(exports, "deleteProject", { enumerable: true, get: function () { return __importDefault(deleteProject_1).default; } });
var getAllProjects_1 = require("./getAllProjects");
Object.defineProperty(exports, "getAllProjects", { enumerable: true, get: function () { return __importDefault(getAllProjects_1).default; } });
var getProject_1 = require("./getProject");
Object.defineProperty(exports, "getProject", { enumerable: true, get: function () { return __importDefault(getProject_1).default; } });
var postProject_1 = require("./postProject");
Object.defineProperty(exports, "postProject", { enumerable: true, get: function () { return __importDefault(postProject_1).default; } });
var updateProject_1 = require("./updateProject");
Object.defineProperty(exports, "updateProjects", { enumerable: true, get: function () { return __importDefault(updateProject_1).default; } });
