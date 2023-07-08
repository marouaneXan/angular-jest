import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jest';
  users: any = []
  constructor(private userService: UsersService) { }
  ngOnInit(): void {
    this.getUsers()
  }
  userForm = new FormGroup({
    username: new FormControl<string | null>(null, [Validators.required]),
    lastname: new FormControl<string | null>(null, [Validators.required]),
    age: new FormControl<string | null>(null, [Validators.required]),
  })
  getUsers() {
    this.userService.getUsers().subscribe(
      (res) => {
        console.log(res);
        this.users = res
      }
    )
  }
  addUser() {
    this.userService.addUser(this.userForm.value).subscribe(
      res=>{
        alert('User added successfully')
        this.getUsers()
      }
    )
  }
}
