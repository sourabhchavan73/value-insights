import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CDHeaderComponent } from './cdheader/cdheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CdBodyComponent } from './cd-body/cd-body.component';
import { NavtabComponent } from './navtab/navtab.component';
import { TabViewModule } from 'primeng/tabview';
import { MlrtHeaderComponent } from './mlrt-header/mlrt-header.component';
import { PaymentstreamTabsComponent } from './paymentstream-tabs/paymentstream-tabs.component';
import { PaymentstreamRulesComponent } from './paymentstream-rules/paymentstream-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    CDHeaderComponent,
    CdBodyComponent,
    NavtabComponent,
    MlrtHeaderComponent,
    PaymentstreamTabsComponent,
    PaymentstreamRulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
