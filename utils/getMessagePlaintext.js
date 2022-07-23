"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMessagePlaintext = (topic, name, emailAddress, heading, text, origin) => {
    return `
  Hi ${process.env.RECIPIENT_NAME}
  
  You have a new message from a visitor of ${origin}
  
  Topic: ${topic}
  Sender name: ${name}
  Email: ${emailAddress}
  Heading: ${heading}
  Message as follows: 
  ${text}
  `;
};
exports.default = getMessagePlaintext;
