import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDHeaderComponent } from './cdheader/cdheader.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';

import { SettlementsComponent } from './settlements/settlements.component';
import { TrendComponent } from './settlements/trend/trend.component';
import { DetailsComponent } from './settlements/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    CDHeaderComponent,
    SettlementsComponent,
    TrendComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TabViewModule,
    ChartModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
