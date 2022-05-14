"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Answers = void 0;
const sequelize_1 = require("../configs/sequelize");
const sequelize_2 = require("sequelize");
exports.Answers = sequelize_1.sequelize.define("Answers", {
    id: {
        type: sequelize_2.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
    answer1: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
    answer2: {
        type: sequelize_2.DataTypes.STRING,
        allowNull: false,
    },
}, {});
