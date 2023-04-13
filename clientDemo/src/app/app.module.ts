import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDHeaderComponent } from './cdheader/cdheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from "primeng/divider";
import { ContacDetailsMCTComponent } from './contac-details-mct/contac-details-mct.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';

import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    AppComponent,
    CDHeaderComponent,
    ContacDetailsMCTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    ToastModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    TabViewModule,
    DividerModule,
    SplitterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
