import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.scss']
})
export class NodesComponent implements OnInit {
  classes = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(index): void {
    this.classes[index] = !this.classes[index]
  }
}
