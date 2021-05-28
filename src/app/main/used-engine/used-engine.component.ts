import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-engine',
  templateUrl: './used-engine.component.html',
  styleUrls: ['./used-engine.component.scss']
})
export class UsedEngineComponent implements OnInit {
  steper: any[] = [
    {
      name: 'Quote Request',
      index: 1,
      active: true
    },
    {
      name: 'Quote Issue',
      index: 2,
      active: false
    }
  ];

  panels: any = [
    {
      active: false,
      name: 'Quote Request',
      code: 'QR'
    },
    {
      active: false,
      name: 'Quote Issue',
      code: 'QI'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selcteAccordion(event: any): void{
    this.steper.forEach((element: any) => {
      if (element.name === event.target.value){
        element.active = true;
      } else {
        element.active = false;
      }
    });
    console.log(event.target.value);
  }

}
