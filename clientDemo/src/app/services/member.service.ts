import { Injectable } from '@angular/core';
import { Member } from '../model/Member';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  members = new Array<Member>;

  constructor() { 
    const member1 = new Member;
    member1.name="Member1";
    member1.gender= "M"; 
    member1.dOB= "03-Aug-1984";
    member1.city= "Amarillo";
    member1.state= "TX";
    member1.zip= "78826";
    member1.complianceStatus= 0;
    member1.subscriberKey= "1023002292"; 
    member1.memberKey= "123456789"; 
    member1.providerName= "ROMERO,ALBERTO";
    member1.providerNPI= "18990521197";
    this.members.push(member1);

    const member2 = new Member;
    member2.name="Member2";
    member2.gender= "F"; 
    member2.dOB= "09-Jul-1998";
    member2.city= "Arlington";
    member2.state= "TX";
    member2.zip= "75020";
    member2.complianceStatus= 0;
    member2.subscriberKey= "1942220728"; 
    member2.memberKey= "123456790"; 
    member2.providerName= "KASHYAP. ROHIT";
    member2.providerNPI= "18400007669";
    this.members.push(member2);

    const member3 = new Member;
    member3.name="Member3";
    member3.gender= "F"; 
    member3.dOB= "06-Sep-1988";
    member3.city= "Amarillo";
    member3.state= "TX";
    member3.zip= "75126";
    member3.complianceStatus= 1;
    member3.subscriberKey= "1912011966"; 
    member3.memberKey= "123456791"; 
    member3.providerName= "CUMBER,SALIMAH";
    member3.providerNPI= "17461306695";
    this.members.push(member3);

    const member4 = new Member;
    member4.name="Member4";
    member4.gender= "M"; 
    member4.dOB= "12-Mav-1958";
    member4.city= "Lubbock";
    member4.state= "TX";
    member4.zip= "76184";
    member4.complianceStatus= 1;
    member4.subscriberKey= "1881796076"; 
    member4.memberKey= "123456792"; 
    member4.providerName= "RAMIREZ,FANNY";
    member4.providerNPI= "16480414338";
    this.members.push(member4);

    const member5 = new Member;
    member5.name="Member5";
    member5.gender= "F"; 
    member5.dOB= "26-Feb-1962";
    member5.city= "McKinney";
    member5.state= "TX";
    member5.zip= "75953";
    member5.complianceStatus= 1;
    member5.subscriberKey= "1144251372"; 
    member5.memberKey= "123456793"; 
    member5.providerName= "CUADRA, RICARDO";
    member5.providerNPI= "17410012546";
    this.members.push(member5);

    const member6 = new Member;
    member6.name="Member6";
    member6.gender= "F"; 
    member6.dOB= "11-May-2000";
    member6.city= "Grand Prairie";
    member6.state= "TX";
    member6.zip= "78011";
    member6.complianceStatus= 1;
    member6.subscriberKey= "1487747705"; 
    member6.memberKey= "123456794"; 
    member6.providerName= "JAMES. TEDDY";
    member6.providerNPI= "3060819709";
    this.members.push(member6);

    const member7 = new Member;
    member7.name="Member7";
    member7.gender= "F"; 
    member7.dOB= "04-Apr-1959";
    member7.city= "Plano";
    member7.state= "TX";
    member7.zip= "78951";
    member7.complianceStatus= 0;
    member7.subscriberKey= "1457668626"; 
    member7.memberKey= "123456795"; 
    member7.providerName= "SEGUROLA, SANTIAGO";
    member7.providerNPI= "18300003318";
    this.members.push(member7);

    const member8 = new Member;
    member8.name="Member8";
    member8.gender= "F"; 
    member8.dOB= "16-Dec-1972";
    member8.city= "Lubbock";
    member8.state= "TX";
    member8.zip= "78025";
    member8.complianceStatus= 0;
    member8.subscriberKey= "1548656283"; 
    member8.memberKey= "123456796"; 
    member8.providerName= "POONATXLA, IMRAN";
    member8.providerNPI= "16580650530";
    this.members.push(member8);

    const member9 = new Member;
    member9.name="Member9";
    member9.gender= "F"; 
    member9.dOB= "08-Dec-1960";
    member9.city= "San Antonio";
    member9.state= "TX";
    member9.zip= "75637";
    member9.complianceStatus= 0;
    member9.subscriberKey= "1518956143"; 
    member9.memberKey= "123456797"; 
    member9.providerName= "MEHTA TEJAS";
    member9.providerNPI= "17880000189";
    this.members.push(member9);

    const member10 = new Member;
    member10.name="Member10";
    member10.gender= "F"; 
    member10.dOB= "19-Jun-1971";
    member10.city= "Austin";
    member10.state= "TX";
    member10.zip= "75215";
    member10.complianceStatus= 0;
    member10.subscriberKey= "1780607382"; 
    member10.memberKey= "123456798"; 
    member10.providerName= "KASHYAP. ROHIT";
    member10.providerNPI= "17980021859";
    this.members.push(member10);
  }

  loadMember(): Observable<Array<Member>>{
    return of(this.members);  
  }

}
