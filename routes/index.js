"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const contact_1 = __importDefault(require("./contact"));
const projects_1 = __importDefault(require("./projects"));
const router = (0, express_promise_router_1.default)();
router.use('/contact', contact_1.default);
router.use('/projects', projects_1.default);
exports.default = router;
