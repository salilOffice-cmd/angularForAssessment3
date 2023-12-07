import { AuthService } from './../../Services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name: string;
  // private authService: AuthService;
  // constructor(_authService: AuthService){
  //  this.authService = _authService;
  // }
  // OR
  constructor(private authService: AuthService){
    this.name = authService.name;
  }




}
