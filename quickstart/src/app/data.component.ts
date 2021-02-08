import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <div class="component">
      <p>DataComponentです。</p>
    </div>
  `
})
export class DataComponent implements OnInit {
  // ActivatedRouteサービスをインスタンス化
  constructor(private route: ActivatedRoute) { }

  // dataプロパティ
  ngOnInit() {
    this.route.data.subscribe( obj => console.log(obj['category']));
  }
}

