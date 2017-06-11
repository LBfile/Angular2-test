import {RouterModule,Routes} from '@angular/router';
import {ProjectEditComponent} from '../page/projectApp/projectEdit.component';

const projectRoutes:Routes=[
    {path:'XM-001',component:ProjectEditComponent},
    {path:'XM-001/id',component:ProjectEditComponent}

];
export const projectRouting = RouterModule.forChild(projectRoutes)
