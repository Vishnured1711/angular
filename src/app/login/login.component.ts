import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  uempty=false;
  pempty=false;
  incorrect=false;
  loginData = {
    username: "",
    password: "",
  };

  users=[
    {
      username:"Vishnu",
      password:"Alpha1711"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
  formSubmit() {
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this.uempty=true;
      return;
    }
    
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.pempty=true;
      return;
    }

    if(this.myIndexOf(this.loginData)===-1){
      this.incorrect=true;
    }else alert("Succesfully logged In");

  }

  myIndexOf(index:any) {    
    for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].username == index.username && this.users[i].password == index.password) {
            return i;
        }
    }
    return -1;
}
}

