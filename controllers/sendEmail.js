"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const utils_1 = require("../utils");
const nodemailer_1 = require("nodemailer");
const sendEmail = [
    (0, express_validator_1.body)('topic').isString().notEmpty(),
    (0, express_validator_1.body)('name').isString(),
    (0, express_validator_1.body)('emailAddress').isEmail(),
    (0, express_validator_1.body)('heading').isString(),
    (0, express_validator_1.body)('text').isString().notEmpty(),
    (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(req.body);
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                console.log(errors);
                throw new Error('Validation failed');
            }
            const { topic, name, emailAddress, heading, text } = req.body;
            const origin = req.get('origin');
            const messageSubject = (0, utils_1.getMessageSubject)(origin);
            const messagePlaintext = (0, utils_1.getMessagePlaintext)(topic, name, emailAddress, heading, text, origin);
            const messageHtml = (0, utils_1.getMessageHtml)(topic, name, emailAddress, heading, text, origin);
            const message = {
                from: process.env.SENDING_ADDRESS,
                to: process.env.RECEIVING_ADDRESS,
                subject: messageSubject,
                text: messagePlaintext,
                html: messageHtml
            };
            const transport = {
                service: 'gmail',
                auth: {
                    user: process.env.TRANSPORT_USER,
                    pass: process.env.TRANSPORT_PASSWORD
                },
                debug: false,
                logger: true
            };
            const transporter = (0, nodemailer_1.createTransport)(transport);
            console.log({ user: process.env.TRANSPORT_USER, pass: process.env.TRANSPORT_PASSWORD });
            console.log('before');
            yield transporter.sendMail(message);
            console.log('after');
            return res.status(201).send({ message: 'Email was sent' });
        }
        catch (err) {
            return next(err);
        }
    })
];
exports.default = sendEmail;
