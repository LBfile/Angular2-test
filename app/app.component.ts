/**
 * Created by CDC3715 on 2017/6/3.
 */
import {Component, OnInit} from '@angular/core';
import {loggerService} from './services/loggerService';
import {Resource} from './modules/Resource';
import {Http} from '@angular/http';
import {Location} from '@angular/common';


@Component({
    selector: 'my-app',
    templateUrl: './app/app.top.html',
    providers:[loggerService],

})
export class AppComponent implements OnInit{

    onClickMe(str:string) {
        alert(str);
    }

    public resource :Resource[];
    ngOnInit(): void {
    }

    constructor(private loggerService: loggerService,public http: Http,public location: Location){
        loggerService.log("开始");
        http.get('./app/TestData/resourcesData.json').subscribe(res=> this.resource =res.json());
    }
}
