import { Component } from "@angular/core";
import { WikipediaSearchService } from "./wikipedia-search.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  items: Array<string>;
  term$ = new Subject<string>();
  constructor(private service: WikipediaSearchService) {
    this.service.search(this.term$).subscribe(results => this.items=results)
  }
}
