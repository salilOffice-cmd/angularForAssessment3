import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name: string;

  constructor(public authService: AuthService){
    this.name = authService.name;
    this.changeServiceName();
  }

  changeServiceName(){
    this.authService.name = "book"
    this.name = this.authService.name;
  }

}
