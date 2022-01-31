import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShowDepComponent } from '../department/show-dep/show-dep.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  List:any=[];
  Date1:string;
  Date2:string;




  page: number = 1;
  totalLength:any;


  ngOnInit(): void {
    this.refreshEmpLogs();
  }


  refreshEmpLogs(){
    this.service.getALLELogs().subscribe(data=>{
      this.List=data;
    });

 
  }

  ShowDatawithTime(){
    //alert("Hello");
    this.service.getSelectLogs(this.Date1,this.Date2).subscribe(data=>{
      this.List=data;
    })
  }

  

 

 

 

  

}
