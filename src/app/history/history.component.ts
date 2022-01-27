import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];

  ModalTitle:string;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  page: number = 1;
  totalLength:any;


  ngOnInit(): void {
    this.refreshEmpLogs();
  }


  refreshEmpLogs(){
    this.service.getALLELogs().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

  

 

 

 

  

}
