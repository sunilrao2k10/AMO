import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-issue',
  templateUrl: './quote-issue.component.html',
  styleUrls: ['./quote-issue.component.scss']
})
export class QuoteIssueComponent implements OnInit {
  selectedQuoteID = null;
  constructor() { }

  ngOnInit(): void {
  }

}
