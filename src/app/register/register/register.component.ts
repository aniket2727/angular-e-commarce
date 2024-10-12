import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  useremail: string = '';
  userpassword: string = '';

  constructor(private http: HttpClient) {}

  onRegister() {
    const registerData = {
      username: this.username,
      useremail: this.useremail,
      userpassword: this.userpassword
    };
    this.http.post('https://api.example.com/register', registerData)
      .subscribe((response) => {
        console.log('Register successful', response);
      }, (error) => {
        console.log('Register failed', error);
      });
  }
}
