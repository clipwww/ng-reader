import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { LkcomicService } from '../../lkcomic.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id: string;
  items$: Observable<{ id: string; src: string }[]>;

  constructor(private route: ActivatedRoute, private lkcomicSVC: LkcomicService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  getDetails() {
    this.items$ = this.lkcomicSVC.getImages(this.id).pipe(
      shareReplay(1)
    );
  }

}
