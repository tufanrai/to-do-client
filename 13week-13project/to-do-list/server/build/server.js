"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const user_router_1 = __importDefault(require("./router/user.router"));
const task_router_1 = __importDefault(require("./router/task.router"));
const error_middleware_1 = require("./middleware/error.middleware");
const database_config_1 = require("./config/database.config");
// app instance
const app = (0, express_1.default)();
// essential uris'
const PORT = process.env.PORT;
const URI = (_a = process.env.DB_URI) !== null && _a !== void 0 ? _a : "";
// db config
(0, database_config_1.dbConfig)(URI);
// use of middleware
app.use(express_1.default.urlencoded());
// app routing
app.use("/api/auth", user_router_1.default);
app.use("/api/task", task_router_1.default);
app.use("/*spalt", (req, res) => {
    res.status(404).json({
        message: "search not found",
        status: "fail",
        success: false,
    });
});
app.use(error_middleware_1.errorHandler);
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});
