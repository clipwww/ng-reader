import { Component, OnInit } from '@angular/core';

import { LkcomicService } from '../../lkcomic.service';
import { LKComicItem } from 'src/app/@common/view-models/lkcomic.vm';

import { Observable } from 'rxjs';
import { shareReplay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page = 1;
  items$: Observable<LKComicItem[]>;
  isLoading = false;

  constructor(private lkcomicSVC: LkcomicService) { }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.items$ = this.lkcomicSVC.getList(this.page)
    .pipe(
      shareReplay(1),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  onPageChange() {
    this.getList();
  }
}
