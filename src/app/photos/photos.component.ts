import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})


export class PhotosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pts1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  pts2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];

}
