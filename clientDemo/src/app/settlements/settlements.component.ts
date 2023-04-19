import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.css']
})
export class SettlementsComponent implements OnInit {
 
    types!: any[];

    selectedSize: any = '';

    ngOnInit(): void {
      this.types = [
        { name: 'Medical Loss Ratio Target', class: 'p-datatable-sm' },
        { name: 'Quality Payments - SIP', class: 'p-datatable-sm' },
        { name: 'Quality Payments - QIP',  class: '' },
        { name: 'Capitation',  class: 'p-datatable-lg' }
      ]; 
    }

    

}
