"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by CDC3715 on 2017/6/3.
 */
var core_1 = require("@angular/core");
var loggerService_1 = require("./services/loggerService");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var AppComponent = (function () {
    function AppComponent(loggerService, http, location) {
        var _this = this;
        this.loggerService = loggerService;
        this.http = http;
        this.location = location;
        loggerService.log("开始");
        http.get('./app/TestData/resourcesData.json').subscribe(function (res) { return _this.resource = res.json(); });
    }
    AppComponent.prototype.onClickMe = function (str) {
        alert(str);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.top.html',
        providers: [loggerService_1.loggerService],
    }),
    __metadata("design:paramtypes", [loggerService_1.loggerService, http_1.Http, common_1.Location])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map