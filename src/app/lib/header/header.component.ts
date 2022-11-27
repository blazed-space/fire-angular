import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  burgerVisible: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
