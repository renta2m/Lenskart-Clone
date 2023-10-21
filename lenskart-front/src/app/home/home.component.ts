import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
 import {MatButtonModule} from '@angular/material/button'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private fb: FormBuilder) {
  }
  loginForm = this.fb.group({

    UserName: ['',Validators.required],

    Password: ['',Validators.required],
  });

  login(){
    let isLoggedIn:Boolean  =false;
    for(let i=0;i<users.length; i=i+1)
    {
      if (this.loginForm.get('UserName')?.value === users[i].userName && this.loginForm.get('Password')?.value === users[i].password){
        alert("User logged in")
        isLoggedIn = true;
      }
    }
    if (isLoggedIn === false){
      alert("User Not Found")
    }
  }
}
const users = [{userName:"harry", password:"hedwig"},{userName:"ron", password:"scabbers"}]

