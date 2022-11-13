"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMessageSubject = (name, origin) => {
    return `${name} visited ${origin} and sent you a message`;
};
exports.default = getMessageSubject;
