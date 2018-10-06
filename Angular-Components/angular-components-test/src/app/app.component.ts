import { Component, ContentChild, ContentChildren, ElementRef, OnInit, AfterContentInit } from '@angular/core';
import { BoxComponent } from './box/box.component';
import { EyeClickDirective } from './eye-click.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ContentChildren(BoxComponent)
  button: BoxComponent;

  ngAfterContentInit(): void {
    console.log('buttons are', this.button);
  }

  ngOnInit() {

  }

  eyeClick() {
    console.log('THIS ACTUALLY WORKS');
  }
}
