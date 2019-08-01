import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ResultListGenericVM } from '../../@common/view-models/result.vm';
import { LKComicItem } from '../../@common/view-models/lkcomic.vm';


@Injectable({
  providedIn: 'root'
})
export class LkcomicService {
  readonly baseURL = 'https://clipwww-nuxt-express-project.herokuapp.com';

  constructor(private http: HttpClient) { }

  getList(page: number = 1) {
    return this.http.get<ResultListGenericVM<LKComicItem>>(`${this.baseURL}/api/lk/list`, {
      params: {
        p: `${page}`,
      }
    })
    .pipe(
      map(ret => ret.success ? ret.items : [])
    );
  }

  getImages(id: string) {
    return this.http.get<ResultListGenericVM<{id: string; src: string}>>(`${this.baseURL}/api/lk/details/${id}`)
    .pipe(
      map(ret => ret.success ? ret.items : [])
    );
  }
}
