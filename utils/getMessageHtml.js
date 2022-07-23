"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getMessageHtml = (topic, name, emailAddress, heading, text, origin) => {
    return `
  <p>Hi ${process.env.RECIPIENT_NAME}</p>
  <br />
  <p>You have a new message from a visitor of ${origin}</p>
  <br />
  <p>Topic: ${topic}</p>
  <p>Sender name: ${name}</p>
  <p>Email: ${emailAddress}</p>
  <p>Heading: ${heading}</p>
  <br />
  <p>Message as follows: </p>
  <p>${text}</p>
  `;
};
exports.default = getMessageHtml;
