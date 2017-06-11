/**
 * Created by CDC3715 on 2017/6/3.
 */

import {Injectable} from '@angular/core';
@Injectable()
export class loggerService {
    log(msg: any)   { console.log(msg); }
    error(msg: any) { console.error(msg); }
    warn(msg: any)  { console.warn(msg); }
}