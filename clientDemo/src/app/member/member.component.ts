import { Component, OnDestroy, OnInit } from '@angular/core';
import { Member } from '../model/Member';
import { MemberService } from '../services/member.service';
import { Subscription } from 'rxjs';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit, OnDestroy {

  members !: Array<Member>;

  subscription !: Subscription;

  //for export control
  exportColumns?: any[];

  // for providername filter 
  providers!: any[];

  // for ComplianceStatus on/off 
  complianceStatusValue: number = 0;
  
  constructor(private memberService: MemberService ){}

  ngOnInit(): void {
    this.subscription = this.memberService.loadMember().subscribe(
      (data)=>{
        this.members = data;
      }
    );
  
    //this.providers = this.members.filter(member => member.providerName);
    this.providers = [...new Set(this.members.map(member => member.providerName))];
    console.log(this.providers)
    // this.memberService.loadMember().subscribe(
    //   (data) =>{

    //   }
    // );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getSeverity(status: number) {
    switch (status) {
      case 0:
          return 'danger';
      case 1:
          return 'success';
      default:
        return 'warning'
    }
  }

  exportExcel() {
      import('xlsx').then((xlsx) => {
          const worksheet = xlsx.utils.json_to_sheet(this.members);
          const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          this.saveAsExcelFile(excelBuffer, 'products');
      });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
      let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      let EXCEL_EXTENSION = '.xlsx';
      const data: Blob = new Blob([buffer], {
          type: EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  
}
