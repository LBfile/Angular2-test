/**
 * Created by CDC3715 on 2017/6/4.
 */
import {RouterModule, Routes} from '@angular/router';

import {PortalComponent} from '../page/portalApp/portalIndex.component';
import {UserComponent} from '../page/userApp/userIndex.component';
import {ProjectComponent} from '../page/projectApp/projectIndex.component';
import {ProjectEditComponent} from '../page/projectApp/projectEdit.component';

import {PageNotFoundComponent} from '../page/commApp/pageNotFound.component'

const routes: Routes = [
    {path: '', component: PortalComponent},
    {path: 'sy_001', component: PortalComponent},
    {path: 'grzx_001', component: UserComponent},
    {path: 'xmgl_001',component: ProjectComponent},
    { path: 'XM_001', component: ProjectEditComponent},
    { path: 'XM_001/id', component: ProjectEditComponent},
    { path: '**', component: PageNotFoundComponent }
];

export const routing = RouterModule.forRoot(routes);
