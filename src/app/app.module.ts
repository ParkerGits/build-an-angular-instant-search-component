import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { WikipediaSearchService } from "./wikipedia-search.service";

@NgModule({
  providers: [WikipediaSearchService],
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HttpClientJsonpModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
