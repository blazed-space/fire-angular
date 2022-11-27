import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year: string = new Date().getFullYear().toString();
  constructor() { }

  ngOnInit(): void {
  }

}
