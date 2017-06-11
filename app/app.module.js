"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by CDC3715 on 2017/6/3.
 */
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_routing_1 = require("./router/app.routing");
var app_component_1 = require("./app.component");
var userIndex_component_1 = require("./page/userApp/userIndex.component");
var portalIndex_component_1 = require("./page/portalApp/portalIndex.component");
var projectIndex_component_1 = require("./page/projectApp/projectIndex.component");
var projectEdit_component_1 = require("./page/projectApp/projectEdit.component");
var pageNotFound_component_1 = require("./page/commApp/pageNotFound.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, app_routing_1.routing],
        declarations: [app_component_1.AppComponent, userIndex_component_1.UserComponent, projectIndex_component_1.ProjectComponent, portalIndex_component_1.PortalComponent, pageNotFound_component_1.PageNotFoundComponent, projectEdit_component_1.ProjectEditComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map