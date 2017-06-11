"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var projectEdit_component_1 = require("../page/projectApp/projectEdit.component");
var projectRoutes = [
    { path: 'XM-001', component: projectEdit_component_1.ProjectEditComponent },
    { path: 'XM-001/id', component: projectEdit_component_1.ProjectEditComponent }
];
exports.projectRouting = router_1.RouterModule.forChild(projectRoutes);
//# sourceMappingURL=project.routing.js.map