/**
 * Created by CDC3715 on 2017/6/10.
 */
import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import {SYSProject} from '../modules/SYSProject';

@Injectable()

export class ProjectService implements OnInit {
    ngOnInit(): void {
    }
    public sysProjects: SYSProject[]

    addProject(){

    }
    constructor(public http: Http) {

    }
    getProjects(http):SYSProject[]{
        return http.get('./app/TestData/sysProjectData.json').subscribe(
            res => this.sysProjects = res.json()
        );
    }
}