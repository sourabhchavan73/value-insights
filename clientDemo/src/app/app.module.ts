
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
import { ChartModule } from 'primeng/chart';
import { SettlementsComponent } from './settlements/settlements.component';
import { TrendComponent } from './settlements/trend/trend.component';
import { DetailsComponent } from './settlements/details/details.component';

import { ProductServiceService } from './services/product-service.service';
import { HttpClientModule } from '@angular/common/http'
import { CdBodyComponent } from './cd-body/cd-body.component';
import { NavtabComponent } from './navtab/navtab.component';
import { SDCalcComponent } from './s-d-calc/s-d-calc.component';
import { SdqipProviderPageComponent } from './sdqip-provider-page/sdqip-provider-page.component';
import { SdqipProviderTabsComponent } from './sdqip-provider-tabs/sdqip-provider-tabs.component';
import { SdqipProviderSettlementdetailsComponent } from './sdqip-provider-settlementdetails/sdqip-provider-settlementdetails.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CDHeaderComponent,
    NavtabComponent,
    CdBodyComponent,
    DetailsComponent,
    TrendComponent,
    SettlementsComponent,
    PaymentStreamMlrtComponent,
    ContacDetailsMCTComponent,
    SDCalcComponent,
    SdqipProviderPageComponent,
    SdqipProviderTabsComponent,
    SdqipProviderSettlementdetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SplitterModule,
    TableModule,
    HttpClientModule,
    DividerModule,
    TabViewModule,
    CardModule,
    ProgressBarModule,
    ToastModule,
    TabViewModule,
    ChartModule,
    TableModule,
    SplitButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
