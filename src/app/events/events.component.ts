import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events = [
    {name: 'Cháy III: Eternal Love', date: '22/11/2020', loc: 'Hanoi Rock City', img: 'chay3.jpg', link: '/chay3'},
    {name: 'Lẩu 3', date: '24/11/2019', loc: 'Phố đi bộ Hoàn Kiếm', img: 'lau3.png', link: '/lau3'},
    {name: 'Cháy II: Love', date: '10/02/2019', loc: 'The Sidewalk Hanoi', img: 'chay2.jpg', link: '/chay2'},
    {name: 'Lẩu 2', date: '06/01/2019', loc: 'Phố đi bộ Hoàn Kiếm', img: 'lau2.jpg', link: '/lau2'},
    {name: 'Cháy', date: '13/02/2018', loc: 'Polygon Cafe', img: 'chay.jpg', link: '/chay'},
    {name: 'Lẩu', date: '26/11/2017', loc: 'Phố đi bộ Hoàn Kiếm', img: 'lau.jpg', link: '/lau'}
  ];

}
