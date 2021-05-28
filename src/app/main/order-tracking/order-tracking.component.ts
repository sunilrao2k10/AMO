import { Component, OnInit } from '@angular/core';
interface Person {
  PO: number;
  SO: string;
  channel: string;
  dateRequiredAt: string;
  site: string;
  ESN: string;
  status: string;
}

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.scss']
})
export class OrderTrackingComponent implements OnInit {
  listOfData: Person[] = [
    {
      PO: 1,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'pending'
    },
    {
      PO: 2,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'shipped'
    },
    {
      PO: 3,
      SO: 'XXXXXX',
      channel: 'XXXXXX',
      dateRequiredAt: 'XXXXXX',
      site: 'XXXXXX',
      ESN: 'XXXXXX',
      status: 'billed'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
