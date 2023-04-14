import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentstream-rules',
  templateUrl: './paymentstream-rules.component.html',
  styleUrls: ['./paymentstream-rules.component.css']
})
export class PaymentstreamRulesComponent {
  products = [
    {
      id: '1000',
      name: 'Exclude Members with Overlapping Coverages',
      value: true
    },
    {
      id: '1000',
      name: 'Exclude Members with Total Cost over',
      value: false
    },
    {
      id: '1000',
      name: 'Exclude Host Members',
      value: true
    },

    

  ]
}
