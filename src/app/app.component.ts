import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solitario-game';
  picas = [
    '1.AsPicas.gif',
    '2.2Picas.gif',
    '3.3Picas.gif',
    '13.KPicas.gif'
  ];
  corazones = [
    '1.AsCorazones.gif',
    '2.2Corazones.gif',
    '3.3Corazones.gif',
    '13.KCorazones.gif'
  ];
  treboles = [
    '1.AsTreboles.gif',
    '2.2Treboles.gif',
    '3.3Treboles.gif',
    '13.KTreboles.gif'
  ];
  diamantes = [
    '1.AsDiamantes.gif',
    '2.2Diamantes.gif',
    '3.3Diamantes.gif',
    '13.KDiamantes.gif'
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
