import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-eyes',
  templateUrl: './normal-eyes.component.html',
  styleUrls: ['./normal-eyes.component.css']
})
export class NormalEyesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked() {
    console.log('clicked the eye');
  }
}
