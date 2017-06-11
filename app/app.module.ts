/**
 * Created by CDC3715 on 2017/6/3.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import {routing} from "./router/app.routing";
import {AppComponent} from './app.component';
import {UserComponent} from './page/userApp/userIndex.component';
import {PortalComponent} from './page/portalApp/portalIndex.component';
import {ProjectComponent} from './page/projectApp/projectIndex.component';
import {ProjectEditComponent} from './page/projectApp/projectEdit.component';
import {PageNotFoundComponent} from './page/commApp/pageNotFound.component'

@NgModule({
    imports: [BrowserModule,HttpModule,routing],
    declarations: [AppComponent,UserComponent,ProjectComponent,PortalComponent,PageNotFoundComponent,ProjectEditComponent],
    bootstrap: [AppComponent]

})
export class AppModule {
}