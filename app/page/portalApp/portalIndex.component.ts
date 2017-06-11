/**
 * Created by CDC3715 on 2017/6/5.
 */
import {Component, OnInit} from '@angular/core';
import {Resource} from '../../modules/Resource';
import {loggerService} from '../../services/loggerService';

@Component({
    selector: 'my-portal',
    templateUrl: './app/page/portalApp/portalIndex.html',
    providers:[loggerService],

})
export class PortalComponent  implements OnInit{
    ngOnInit(): void {
    }

    public resourcePortals :Resource[];

    constructor(private loggerService: loggerService){
        let resources = new Array();
        loggerService.log("首页开始");
        for(let i=0;i<4;i++){
            let resource = new Resource("sy_"+i,"首页"+i,"/portalApp/portalIndex"+i);
            resources.push(resource);
        }
        this.resourcePortals = resources;
    }
}