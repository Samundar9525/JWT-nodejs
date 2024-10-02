import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  comment:any ='Unauthorised'

  constructor(private service:AuthService){
    this.service.checkAuthDashboard('employee').subscribe(res=>{
      console.log(res)
      if(res.message){
        this.comment = res.message;
      }
    })
  }
}
