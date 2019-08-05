import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import { MetaService } from './@common/services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '這是什麼？';
  isCollapsed = false;
  backIcon: string | null = null;
  pageTitle = '';

  get pageSubTitle() {
    return this.metaSVC.pageSubTitle;
  }

  constructor(private router: Router, private route: ActivatedRoute, private metaSVC: MetaService) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let child = this.route.firstChild;
        let target = child;

        while (child) {
          if (child.firstChild) {
            child = child.firstChild;
            target = child;
          } else {
            child = null;
          }
        }
        return target;
      }),
      mergeMap(ret => ret.data)
    ).subscribe(ret => {
      const { hasBackIcon = false, pageTitle = ''} = ret;
      this.pageTitle = pageTitle;
      this.backIcon = hasBackIcon ? '' : null;
    });
  }

  onBack() {
    window.history.go(-1);
  }
}
