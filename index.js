"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const mongoCredentials = process.env.MONGODB_CREDENTIALS;
mongoose_1.default.connect(mongoCredentials);
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use('/api', routes_1.default);
app.listen(8080, () => {
    console.log('The application is listening on port 8080');
});
