import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class WikipediaSearchService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    let headers = new HttpHeaders();
    headers.append("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
    let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + term + "&format=json"
    return this.http
      .jsonp(url, 'callback')
      .pipe(map(response => response[1]));
  }
}
