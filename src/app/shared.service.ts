import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:59602/api";
readonly PhotoUrl = "http://localhost:59602/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }


  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  getEmpListPaginated(val:any){
    return this.http.get(this.APIUrl+'/Employee/Pagination'+val)
  }

  /////FILTER_LIST//////////////
  getSearch(val:string){
    return this.http.get(this.APIUrl+'/Employee/Hit/'+val);
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

  searchEP(val:any){
    return this.http.post(this.APIUrl+'/Employee/Search',val);
  }

  searchEPP(val:any){
    return this.http.post(this.APIUrl+'/Employee/Search1',val);
  }

  
  getELogs():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/history');
  }

  /////HISTORY_NOTES//////
  getALLELogs():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/audit');
  }

  /////History_Notes_Time_Range/////////
  getSelectLogs(val1:string,val2:string){
    return this.http.get(this.APIUrl+'/Employee/audit/timerange/'+val1,+val2);
  }



}
