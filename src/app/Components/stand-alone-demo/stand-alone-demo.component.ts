import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandAlone2Component } from '../stand-alone2/stand-alone2.component';
import { HomeComponent } from '../home/home.component';

// Create a new Stand Alone Component
// $ ng g c newComponent --standalone

@Component({
  selector: 'app-stand-alone-demo',
  standalone: true,
  imports: [CommonModule, StandAlone2Component],
  templateUrl: './stand-alone-demo.component.html',
  styleUrls: ['./stand-alone-demo.component.css']
})
export class StandAloneDemoComponent {
  
}
