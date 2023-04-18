import { Component } from '@angular/core';



@Component({
  selector: 'app-sdqip-provider-settlementdetails',
  templateUrl: './sdqip-provider-settlementdetails.component.html',
  styleUrls: ['./sdqip-provider-settlementdetails.component.css']
})



export class SdqipProviderSettlementdetailsComponent {
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
  ]
}
