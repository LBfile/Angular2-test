/**
 * Created by CDC3715 on 2017/6/4.
 */
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {SYSProject} from '../../modules/SYSProject';

@Component({
    selector: 'my-project',
    templateUrl: './app/page/projectApp/projectIndex.html'
})
export class ProjectComponent implements OnInit {
    ngOnInit(): void {
    }

    public sysProjects: SYSProject[];
    constructor(public http: Http) {
        http.get('./app/TestData/sysProjectData.json').subscribe(
            res => this.sysProjects = res.json()
        );
    }
}