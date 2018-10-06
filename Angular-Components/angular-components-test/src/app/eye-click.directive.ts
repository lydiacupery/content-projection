import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appEyeClick]'
})
export class EyeClickDirective {

  constructor() { }

  @Output() clickEyes: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event']) onClick($event) {
    console.log('IN DIRECTIVE' + $event);
     this.clickEyes.emit('eyeClick');
}

}
