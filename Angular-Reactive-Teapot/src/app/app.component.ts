import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import * as Observable from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  doRxThings() {
    const nums = Observable.of(1, 2, 3, 4, 5);

    // Create a function that accepts an Observable.
    const squareOddVals = Observable.pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

    // Suscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
  }
}
