import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent implements OnInit {

  signupForm = {
    username:'',
    password:'',
  }

  constructor() { }

  ngOnInit() {
  }

  signup(){
    console.log(this.signupForm.username);
    console.log(this.signupForm.password);
  }
}
