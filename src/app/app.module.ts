import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecurityNumberCheckerComponent } from './components/security-number-checker/security-number-checker.component';

@NgModule({
  declarations: [AppComponent, SecurityNumberCheckerComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
