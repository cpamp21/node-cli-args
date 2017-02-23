"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Argument = (function () {
    function Argument(long, short, defaultValue) {
        var _this = this;
        this.long = long;
        this.short = short;
        this.defaultValue = defaultValue;
        this.getLong = function () {
            return _this.long;
        };
        this.getShort = function () {
            return _this.short;
        };
        this.getDefaultValue = function () {
            return _this.defaultValue;
        };
        this.equals = function (arg) {
            return arg.getLong() === _this.long;
        };
    }
    return Argument;
}());
Argument.equals = function (arg, arg2) {
    return arg.equals(arg2);
};
exports.Argument = Argument;
