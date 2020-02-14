import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SampleFormComponent } from "./sample-form/sample-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, SampleFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
