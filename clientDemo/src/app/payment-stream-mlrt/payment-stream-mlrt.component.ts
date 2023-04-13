import { Component } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { Category } from '../Interfaces/common';

@Component({
  selector: 'app-payment-stream-mlrt',
  templateUrl: './payment-stream-mlrt.component.html',
  styleUrls: ['./payment-stream-mlrt.component.css']
})
export class PaymentStreamMlrtComponent {
  categories!: Category[];

    constructor(private productService: ProductServiceService) {}

    ngOnInit() {
        this.productService.getPayStreamData().subscribe((data) => {
            this.categories = data;
            console.log(this.categories)
        });
    }
}
