import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { FaceComponent } from './face/face.component';
import { NormalEyesComponent } from './normal-eyes/normal-eyes.component';
import { SmileyMouthComponent } from './smiley-mouth/smiley-mouth.component';
import { NormalNoseComponent } from './normal-nose/normal-nose.component';
import { EyeClickDirective } from './eye-click.directive';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    FaceComponent,
    NormalEyesComponent,
    SmileyMouthComponent,
    NormalNoseComponent,
    EyeClickDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
