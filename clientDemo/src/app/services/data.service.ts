import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Settlement } from '../model/Settlement';

@Injectable({
  providedIn: 'root'
})
export class DataService  {

  settlements =  new Array<Settlement>;

  constructor() { 
    const settlement1 = new Settlement();
    settlement1.code = '00042';
    settlement1.incurredTerm = '01 (Jan-Mar)';
    settlement1.totalProviders = 47;
    settlement1.currentMembers = 238;
    settlement1.retroMembers = '';
    settlement1.totalMembers = 238;
    settlement1.totalPayment = 10738530;
    settlement1.previouslyPaid = 232673;
    settlement1.netPayment = 10938530;
    settlement1.netPMPMPayment = 62176;
    this.settlements.push(settlement1);

    const settlement2 = new Settlement();
    settlement2.code = '00046';
    settlement2.incurredTerm = '02 (Apr-Jun)';
    settlement2.totalProviders = 47;
    settlement2.currentMembers = 238;
    settlement2.retroMembers = '';
    settlement2.totalMembers = 238;
    settlement2.totalPayment = 10738530;
    settlement2.previouslyPaid = 232673;
    settlement2.netPayment = 10938530;
    settlement2.netPMPMPayment = 62176;
    this.settlements.push(settlement2);

    const settlement3 = new Settlement();
    settlement3.code = '00056';
    settlement3.incurredTerm = '03 (July-Sep)';
    this.settlements.push(settlement3);

    const settlement4 = new Settlement();
    settlement4.code = '00034';
    settlement4.incurredTerm = '04 (Oct-Dec)';
    this.settlements.push(settlement4);

  }

  

  loadSettlement() : Observable<Settlement[]>{  
    console.log(this.settlements);
    return of(this.settlements);
  }

}
