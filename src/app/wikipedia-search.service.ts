import { Injectable } from "@angular/core";
import { HttpParams, HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class WikipediaSearchService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    let headers = new HttpHeaders();
    let search = new HttpParams();
    search = search.append("action", "opensearch");
    search = search.append("search", term);
    search = search.append("format", "json");

    return this.http
      .get("https://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK", {
        headers: headers,
        params: search
      })
      .pipe(map(response => response[1]));
  }
}
