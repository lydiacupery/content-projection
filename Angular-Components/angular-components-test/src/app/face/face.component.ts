import { Component, OnInit, ContentChild } from '@angular/core';
import {  HostListener } from '@angular/core';
import { EyeClickDirective } from '../eye-click.directive';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css']
})
export class FaceComponent implements OnInit {

  eyeClicks = 0;
  noseClicks = 0;
  mouthClicks = 0;

  @ContentChild(EyeClickDirective)
  eyeClick: EyeClickDirective;

  constructor() { }

  ngOnInit() {
    this.eyeClick.clickEyes.asObservable().pipe(tap(() => this.eyeClicks++)).subscribe();
   }

}
