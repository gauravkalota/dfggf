import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  message:string ="Search Function";
  EmployeeIdFilter:string="";
  EmployeeNameFilter:string="";
  EmployeeListWithoutFilter:any=[];
  empname:string="";
  page: number = 1;
  totalLength:any;
  p1:any=1;
  p2:any=2;
  p3:any=3;
  p4:any=4;
  p5:any=5;


  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;

  }

  editClick(item){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    /**this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
      this.EmployeeListWithoutFilter=data;
    });**/

    this.service.gettemp(this.p1).subscribe(data=>{
      this.EmployeeList=data;
    });
  }

  forward1(item){
    this.service.gettemp(this.p2).subscribe(data=>{
      this.EmployeeList=data;
    });
  }

  forward2(item){
    this.service.gettemp(this.p3).subscribe(data=>{
      this.EmployeeList=data;
    });
  }

  forward3(item){
    this.service.gettemp(this.p4).subscribe(data=>{
      this.EmployeeList=data;
    });
  }

  forward4(item){
    this.service.gettemp(this.p5).subscribe(data=>{
      this.EmployeeList=data;
    });
  }




  /**forwardNext(item){
    this.service.gettemp(this.p3).subscribe(data=>{
      this.EmployeeList=data;
    });
  }**/

  

  filterfuncion(){
    this.service.getSearch(this.empname).subscribe(data=>{
      this.EmployeeList=data;
    })

  }
}

