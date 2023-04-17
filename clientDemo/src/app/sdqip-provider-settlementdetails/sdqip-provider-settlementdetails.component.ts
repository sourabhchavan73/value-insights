import { Component } from '@angular/core';



@Component({
  selector: 'app-sdqip-provider-settlementdetails',
  templateUrl: './sdqip-provider-settlementdetails.component.html',
  styleUrls: ['./sdqip-provider-settlementdetails.component.css']
})



export class SdqipProviderSettlementdetailsComponent {
  quarter = [
    {
        name: 'Feb 2022',
        id:1
    },
    {
        name: 'June 2022',
        id:2
    },
    {
      name: 'Nov 2022',
      id:3
    }
];

  selectedQuarter:any=[]

  types= [
    { name: 'Cancer', code: 'NY' },
    { name: 'Cough', code: 'RM' },
    { name: 'cancer screening - Medicare', code: 'LDN' },
    { name: 'Cancer', code: 'NY' },
    { name: 'Cough', code: 'RM' },
    { name: 'cancer screening - Medicare', code: 'LDN' },
    { name: 'Cancer', code: 'NY' },
    { name: 'Cough', code: 'RM' },
    { name: 'cancer screening - Medicare', code: 'LDN' },
  ];

  selectedType=[];

  items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
    },
  ];


  products = [
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      // totalMember: ,
      // eligibileMember: ,
      // compliantMember: ,
      // nonComplianceMembers:
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
    {
      id: '1000',
      name: 'ROMERO,ALBERTO',
      npi: '18990521197',
      totalMember: 45,
      eligibileMember: 50,
      compliantMember: 50,
      nonComplianceMembers: 60
    },
  ]

  handleNextQuarter(type:string){
    const activeIndex = this.quarter.findIndex(i =>  i == this.selectedQuarter)
    if(type === 'next'){
      if(activeIndex+1 < this.quarter.length){
        const newIndex = activeIndex + 1;
        const newItem = this.quarter[newIndex];
        console.log(newItem)
        this.selectedQuarter = newItem
      }
    } else {
      if(activeIndex - 1 >= 0){
      console.log('coming hjete')

        const newIndex = activeIndex - 1;
        const newItem = this.quarter[newIndex];
        console.log(newItem)
        this.selectedQuarter = newItem
      }
    }

  }


}
