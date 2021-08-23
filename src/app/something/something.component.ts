import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-something',
  templateUrl: './something.component.html',
  styleUrls: ['./something.component.scss']
})
export class SomethingComponent implements OnInit {

  classes = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(index): void {
    this.classes[index] = !this.classes[index];
  }

}
