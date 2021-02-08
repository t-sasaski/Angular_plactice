import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
        ActivatedRouteSnapshot } from '@angular/router';

import { HatenaService } from './hatena.service';

@Injectable()
export class HatenaResolver implements Resolve<any> {
    // HatenaService（7.4.4項）、Routerサービスをインスタンス化
    constructor(private hatena: HatenaService) { }

    // データを取得
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.hatena.requestGet(route.params['url']);
    }
}

