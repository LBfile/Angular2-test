/**
 * Created by CDC3715 on 2017/6/3.
 */

import {Injectable} from '@angular/core';
export class SYSProject {

    constructor(public id: string, public name: string, public advanceMoney: number,public creater:string,public createrDate :string ) {
    }
}