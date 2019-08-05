import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { LkcomicService } from '../../lkcomic.service';
import { MetaService } from 'src/app/@common/services/meta.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  id: string;
  items: Array<{ id: string; src: string }> = [];

  constructor(private route: ActivatedRoute, private lkcomicSVC: LkcomicService, private metaSVC: MetaService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  ngOnDestroy() {
    this.metaSVC.pageSubTitle = '';
  }

  getDetails() {
    this.lkcomicSVC.getImages(this.id).pipe(
      shareReplay(1)
    ).subscribe(ret => {
      this.items = ret.items;
      this.metaSVC.pageSubTitle = ret.item.title;
    });
  }

}
