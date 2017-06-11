"use strict";
/**
 * Created by CDC3715 on 2017/6/3.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var loggerService = (function () {
    function loggerService() {
    }
    loggerService.prototype.log = function (msg) { console.log(msg); };
    loggerService.prototype.error = function (msg) { console.error(msg); };
    loggerService.prototype.warn = function (msg) { console.warn(msg); };
    return loggerService;
}());
loggerService = __decorate([
    core_1.Injectable()
], loggerService);
exports.loggerService = loggerService;
//# sourceMappingURL=loggerService.js.map