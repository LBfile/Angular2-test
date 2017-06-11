"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by CDC3715 on 2017/6/4.
 */
var router_1 = require("@angular/router");
var portalIndex_component_1 = require("../page/portalApp/portalIndex.component");
var userIndex_component_1 = require("../page/userApp/userIndex.component");
var projectIndex_component_1 = require("../page/projectApp/projectIndex.component");
var projectEdit_component_1 = require("../page/projectApp/projectEdit.component");
var pageNotFound_component_1 = require("../page/commApp/pageNotFound.component");
var routes = [
    { path: '', component: portalIndex_component_1.PortalComponent },
    { path: 'sy_001', component: portalIndex_component_1.PortalComponent },
    { path: 'grzx_001', component: userIndex_component_1.UserComponent },
    { path: 'xmgl_001', component: projectIndex_component_1.ProjectComponent },
    { path: 'XM_001', component: projectEdit_component_1.ProjectEditComponent },
    { path: 'XM_001/id', component: projectEdit_component_1.ProjectEditComponent },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map