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

@NgModule({
  declarations: [
    AppComponent,
    CDHeaderComponent,
    ContacDetailsMCTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    TabViewModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
