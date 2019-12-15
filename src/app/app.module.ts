import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewContainerComponentComponent } from './review-container-component/review-container-component.component';
import { TestReviewComponent } from './test-review/test-review.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewContainerComponentComponent,
    TestReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
