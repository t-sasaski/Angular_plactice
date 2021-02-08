import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TimeGuard implements CanActivate {
  
  // ガードの実処理
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    // 期限
    let limit = new Date(2017, 4, 30); // 期限
    let current = new Date(); // 現在時刻
    
    // 現在時刻が過ぎている場合は、遷移をガード
    if (limit.getTime() > current.getTime()) {
      return true;
    } else {
      window.alert('記事の公開期限が過ぎています。');
      return false;
    }

  }
}

