import { Injectable } from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private activatedRoute: ActivatedRoute) { }

}
