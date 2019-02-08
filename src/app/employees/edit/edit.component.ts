import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
 
@Component({
  selector: 'app-employees',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  title = 'Edit';
  constructor (private httpService: HttpClient) { }

  arrEmployee: string [];
  workEmployee: any [];
  result_Age: string[];
  result_Email: string[];

  ngOnInit() {
    this.httpService.get('./assets/employee.json').subscribe(
      data => {
        this.arrEmployee = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.workEmployee = this.arrEmployee;
        console.log(JSON.stringify(this.arrEmployee));
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  find_in_object(my_object, my_criteria) {
    return my_object.employee.filter(function(obj) {
      return Object.keys(my_criteria).every(function(c) {
        return obj[c] == my_criteria[c];
      });
  
    });
  }

  onClickSubmit(data) {
    var my_json=JSON.stringify(this.workEmployee);

    var filtered_json = this.find_in_object(JSON.parse(my_json), {Name:data.empname});
    console.log("IT WORKED"); 
    this.result_Age=filtered_json[0].Age;
    this.result_Email=filtered_json[0].Email;

  }
 
  cancelFunc(data) {
    data.empname="";
    data.empagee="";
    data.empemail="";
  }
 
}
