import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-settlement-cal-tab',
  templateUrl: './settlement-cal-tab.component.html',
  styleUrls: ['./settlement-cal-tab.component.css']
})
export class SettlementCalTabComponent {
  customers: any;
  constructor(private customerService: ProductServiceService) {}

  ngOnInit() {
      this.customerService.getScreeningTests().subscribe((data) => {
          this.customers = data;
      });
  }

  calculateCustomerTotal(name: any) {
      let total = 0;

      if (this.customers) {
          for (let customer of this.customers) {
              if (customer.section.name === name) {
                  total++;
              }
          }
      }

      return total;
  }
}
