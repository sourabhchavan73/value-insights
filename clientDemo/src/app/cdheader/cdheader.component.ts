
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-cdheader',
  templateUrl: './cdheader.component.html',
  styleUrls: ['./cdheader.component.css'],
  providers:[MessageService]
})
export class CDHeaderComponent {
  value: number = 0;
border: any;

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    let interval = setInterval(() => {
        this.value = this.value + Math.floor(Math.random() * 10) + 1;
        if (this.value >= 100) {
            this.value = 100;
            this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
            clearInterval(interval);
        }
    }, 2000);
}
}
