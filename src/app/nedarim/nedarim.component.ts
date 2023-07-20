import { AfterViewInit, Component, ElementRef, ViewChild,OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// import { MatDialog } from '@angular/material/dialog';

// import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';
import { SafePipe } from '../safe.pipe';


// import '../assets/sweetalert.css';




@Component({
  selector: 'app-nedarim',
  templateUrl: './nedarim.component.html',
  styleUrls: ['./nedarim.component.css'],
})
export class NedarimComponent  {

   mosadCode: string = '7005642';

  // mosadCode: string = '7009223';

  src= `https://www.matara.pro/nedarimplus/online/?mosad=${this.mosadCode}`;

 

}
