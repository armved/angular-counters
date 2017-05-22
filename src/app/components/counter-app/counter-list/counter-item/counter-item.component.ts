import { Component, Input } from '@angular/core';
import { CounterService } from '../../../../counter.service';

@Component({
  selector: 'counter-item',
  templateUrl: 'counter-item.component.html',
  styleUrls: ['counter-item.component.css']
})

export class CounterItemComponent {
  @Input() counter;

  constructor(private counterService: CounterService) {}

  onIncrement() {
    this.counterService.incrementCounter(this.counter._id, 1);
  }

  onDecrement() {
    this.counterService.decrementCounter(this.counter._id, 1);
  }

  onDelete() {
    this.counterService.deleteCounter(this.counter);
  }
}
