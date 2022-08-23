import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {
  title = '';
  arr = [];
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.arr = [Math.random()];
    }, 1000)
  }

  parent() {
    console.log('Parent');
    return 'Parent';
  }

}
