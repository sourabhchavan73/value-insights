
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
import { TagModule } from 'primeng/tag';
import { PaymentStreamMlrtComponent } from './payment-stream-mlrt/payment-stream-mlrt.component';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { SettlementsComponent } from './settlements/settlements.component';
import { TrendComponent } from './settlements/trend/trend.component';
import { DetailsComponent } from './settlements/details/details.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SelectButtonModule } from 'primeng/selectbutton';

import { ProductServiceService } from './services/product-service.service';
import { HttpClientModule } from '@angular/common/http'
import { CdBodyComponent } from './cd-body/cd-body.component';
import { NavtabComponent } from './navtab/navtab.component';
import { SDCalcComponent } from './s-d-calc/s-d-calc.component';
import { MemberComponent } from './member/member.component';


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
    MemberComponent

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
    TagModule,
    MultiSelectModule,
    InputSwitchModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SelectButtonModule
  ],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
