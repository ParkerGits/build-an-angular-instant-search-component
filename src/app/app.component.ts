import { Component } from "@angular/core";
import { WikipediaSearchService } from "./wikipedia-search.service";
import { Subject } from "rxjs";

//application wide shared Rx operators
import { map, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  items: Array<string>;
  term$ = new Subject<string>();
  constructor(private service: WikipediaSearchService) {
        this.term$.pipe(
          debounceTime(400),
          distinctUntilChanged(),
          switchMap(term => this.service.search(term)),
        ).subscribe(results => this.items = results);
  }
}
