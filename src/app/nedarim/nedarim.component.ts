import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

// import { MatDialog } from '@angular/material/dialog';

// import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';

// import '../assets/sweetalert.css';


@Component({
  selector: 'app-nedarim',
  templateUrl: './nedarim.component.html',
  styleUrls: ['./nedarim.component.css'],
})
export class NedarimComponent implements AfterViewInit {

  @ViewChild('formContainer')

  formContainer!: ElementRef;




  constructor(private http: HttpClient) {}




  ngAfterViewInit() {

    this.http.post('https://www.matara.pro/nedarimplus/online/?mosad=7005642&&Amount=52', { responseType: 'text' })

      .subscribe(data => {

        this.formContainer.nativeElement.innerHTML = data;

      });

  }

}