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
import { PaymentStreamMlrtComponent } from './payment-stream-mlrt/payment-stream-mlrt.component';
import { TableModule } from 'primeng/table';
import { ProductServiceService } from './services/product-service.service';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    CDHeaderComponent,
    ContacDetailsMCTComponent,
    PaymentStreamMlrtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressBarModule,
    ToastModule,
    TableModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    TabViewModule,
    DividerModule,
    SplitterModule,
    HttpClientModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
