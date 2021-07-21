import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Input() email: boolean;
  @Input() phone: boolean;
  @Input() active: boolean;

  constructor() {}

  ngOnInit(): void {}
}
