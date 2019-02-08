import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpErrorResponse } from '@angular/common/http';
 
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title = 'New';
  constructor (private httpService: HttpClient) { }

  ngOnInit() {
  }

  onClickSubmit(data) {
    let prod1={"Name":data.empname,"Age":data.empage,"Email":data.empemail};
    this.httpService.post('http://localhost:3000/employee',prod1).subscribe(empdata => console.log(empdata));      
  }
 
  cancelFunc(data) {
    data.empname="";
    data.empagee="";
    data.empemail="";
  }
 
}
