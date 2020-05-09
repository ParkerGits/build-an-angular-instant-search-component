import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class WikipediaSearchService {
  constructor(private http: HttpClient) {}
  search(term: string) {
    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&format=json"
    return this.http
      .jsonp(url, 'callback')
      .pipe(map(response => response[1]));
  }
}
