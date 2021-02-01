import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string = "";
  password: string = "";
  error_text: string = "no_error";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  check() {
    let json_str = localStorage.getItem("user_data");
    if (json_str == null) {
      this.error_text = "Аккаунт не существует"
    } else {
      let user_data = JSON.parse(json_str);
      
      let login_user_data: string = user_data["login"]
      let password_user_data: string = user_data["password"]

      if (this.login != login_user_data) {
        this.error_text = "Неверный логин";
        return;
      }

      if (this.password != password_user_data) {
        this.error_text = "Неверный пароль";
        return;
      }

      this.router.navigate([""]);
    }
  }
}
