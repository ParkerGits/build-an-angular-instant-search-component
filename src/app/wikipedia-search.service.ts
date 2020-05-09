import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

//application wide shared Rx operators
import { map, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Injectable()
export class WikipediaSearchService {
  constructor(private http: HttpClient) {}

  search(terms: Observable<string>, debounceMs = 400) {
      return terms.pipe(
        debounceTime(debounceMs),
        distinctUntilChanged(),
        switchMap(term => this.rawSearch(term))
      )
  }

  rawSearch(term: string) {
    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&format=json"
    return this.http
      .jsonp(url, 'callback')
      .pipe(map(response => response[1]));
  }
}
