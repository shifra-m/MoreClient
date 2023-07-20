import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Building-Curriculum-Client';
  constructor(private router:Router){}
// func(){
// this.router.navigate(["/nedarim"])
// }



}
