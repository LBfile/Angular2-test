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
 * Created by CDC3715 on 2017/6/4.
 */
var core_1 = require("@angular/core");
var ProjectEditComponent = (function () {
    function ProjectEditComponent() {
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
    };
    return ProjectEditComponent;
}());
ProjectEditComponent = __decorate([
    core_1.Component({
        selector: 'my-project',
        templateUrl: './app/page/projectApp/projectEdit.html'
    }),
    __metadata("design:paramtypes", [])
], ProjectEditComponent);
exports.ProjectEditComponent = ProjectEditComponent;
//# sourceMappingURL=projectEdit.component.js.map