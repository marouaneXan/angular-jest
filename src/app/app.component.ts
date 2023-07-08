import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jest';
  users:any=[]
  constructor(private userService:UsersService){}
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.userService.getUsers().subscribe(
      (res)=>{
        console.log(res);
        this.users=res
      }
    )
  }
}
