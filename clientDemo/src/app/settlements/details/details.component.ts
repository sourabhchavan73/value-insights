import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Settlement } from 'src/app/model/Settlement';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  implements OnInit{

  settlements = new Array<Settlement>;
   
  constructor(private dataService: DataService){}

  ngOnInit(): void {
    this.dataService.loadSettlement().subscribe(
      (settlements) => {
        this.settlements = settlements;
      }
    );
  }
}
