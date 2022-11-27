import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = [
    {
      name: "Beez Marketing",
      description: "Beez Marketing offers unmatched SEO, marketing, and campaign management services for many industries.",
      url: "https://beez.top/",
      image: "https://blazed.sirv.com/ibis/blazed-systems.jpg"
    },
    {
      name: "Vexio Governance",
      description: "The Vexio Group is committed to establishing transparent, equitable, and effective central management for all.",
      url: "https://vexio.quest/",
      image: "https://blazed.sirv.com/ibis/blazed-world.jpg"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
