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
 * Created by CDC3715 on 2017/6/5.
 */
var core_1 = require("@angular/core");
var Resource_1 = require("../../modules/Resource");
var loggerService_1 = require("../../services/loggerService");
var PortalComponent = (function () {
    function PortalComponent(loggerService) {
        this.loggerService = loggerService;
        var resources = new Array();
        loggerService.log("首页开始");
        for (var i = 0; i < 4; i++) {
            var resource = new Resource_1.Resource("sy_" + i, "首页" + i, "/portalApp/portalIndex" + i);
            resources.push(resource);
        }
        this.resourcePortals = resources;
    }
    PortalComponent.prototype.ngOnInit = function () {
    };
    return PortalComponent;
}());
PortalComponent = __decorate([
    core_1.Component({
        selector: 'my-portal',
        templateUrl: './app/page/portalApp/portalIndex.html',
        providers: [loggerService_1.loggerService],
    }),
    __metadata("design:paramtypes", [loggerService_1.loggerService])
], PortalComponent);
exports.PortalComponent = PortalComponent;
//# sourceMappingURL=portalIndex.component.js.map