import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ChildComponent implements OnInit {
  @Input() arr: any;
  number = 0;
  numbers: Observable<number[]>;
  constructor(private cf: ChangeDetectorRef) {
    //this.cf.detach();
   }

  getNumbers: Observable<number[]> = of([10, 20, 30, 40, 50]);

  ngOnInit() {
    setInterval(() => {
      this.number = Math.random();
      //this.cf.markForCheck();
      //this.cf.detectChanges();
    }, 1000);

    this.numbers = this.getNumbers;
  }

  child() {
    console.log('Child');
    return 'Child';
  }

}
