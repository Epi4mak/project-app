import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  error_text: string = "no_error"
  login: string = "";
  mail: string = "";
  password: string = "";
  password_confirm: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  regFunction() {
    if (this.password !== this.password_confirm) {
      this.error_text = "Пароли не совпадают";
      return;
    }

    let obj = {
      login: this.login,
      password: this.password,
    }

    let json_str = JSON.stringify(obj);
    localStorage.setItem('user_data', json_str);

    this.router.navigate(["/login"])
  }
}
