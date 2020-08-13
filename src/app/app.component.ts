import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solitario-game';
  //Arreglo de las cartas
  picas = [
    { name: '1.AsPicas.gif', cubierta: false, selected: false, value:1, maso: 'Picas' },
    { name: '2.2Picas.gif', cubierta: false, selected: false, value:2, maso: 'Picas' },
    { name: '3.3Picas.gif', cubierta: false, selected: false, value:3, maso: 'Picas' },
    { name: '4.4Picas.gif', cubierta: false, selected: false, value:4, maso: 'Picas' },
    { name: '5.5Picas.gif', cubierta: false, selected: false, value:5, maso: 'Picas' },
    { name: '6.6Picas.gif', cubierta: false, selected: false, value:6, maso: 'Picas' },
    { name: '7.7Picas.gif', cubierta: false, selected: false, value:7, maso: 'Picas' },
    { name: '8.8Picas.gif', cubierta: false, selected: false, value:8, maso: 'Picas' },
    { name: '9.9Picas.gif', cubierta: false, selected: false, value:9, maso: 'Picas' },
    { name: '10.10Picas.gif', cubierta: false, selected: false, value:10, maso: 'Picas' },
    { name: '11.JPicas.gif', cubierta: false, selected: false, value:11, maso: 'Picas' },
    { name: '12.QPicas.gif', cubierta: false, selected: false, value:12, maso: 'Picas' },
    { name: '13.KPicas.gif', cubierta: false, selected: false, value:13, maso: 'Picas' }
  ];
  corazones = [
    { name: '1.AsCorazones.gif', cubierta: false, selected: false, value:1, maso: 'Corazones' },
    { name: '2.2Corazones.gif', cubierta: false, selected: false, value:2, maso: 'Corazones' },
    { name: '3.3Corazones.gif', cubierta: false, selected: false, value:3, maso: 'Corazones' },
    { name: '4.4Corazones.gif', cubierta: false, selected: false, value:4, maso: 'Corazones' },
    { name: '5.5Corazones.gif', cubierta: false, selected: false, value:5, maso: 'Corazones' },
    { name: '6.6Corazones.gif', cubierta: false, selected: false, value:6, maso: 'Corazones' },
    { name: '7.7Corazones.gif', cubierta: false, selected: false , value:7, maso: 'Corazones'},
    { name: '8.8Corazones.gif', cubierta: false, selected: false, value:8, maso: 'Corazones' },
    { name: '9.9Corazones.gif', cubierta: false, selected: false, value:9, maso: 'Corazones' },
    { name: '10.10Corazones.gif', cubierta: false, selected: false, value:10, maso: 'Corazones' },
    { name: '11.JCorazones.gif', cubierta: false, selected: false, value:11, maso: 'Corazones' },
    { name: '12.QCorazones.gif', cubierta: false, selected: false, value:12, maso: 'Corazones' },
    { name: '13.KCorazones.gif', cubierta: false, selected: false, value:13, maso: 'Corazones' }
  ];
  treboles = [
    { name: '1.AsTreboles.gif', cubierta: false, selected: false, value:1, maso: 'Treboles' },
    { name: '2.2Treboles.gif', cubierta: false, selected: false, value:2, maso: 'Treboles' },
    { name: '3.3Treboles.gif', cubierta: false, selected: false, value:3, maso: 'Treboles' },
    { name: '4.4Treboles.gif', cubierta: false, selected: false, value:4, maso: 'Treboles' },
    { name: '5.5Treboles.gif', cubierta: false, selected: false, value:5, maso: 'Treboles' },
    { name: '6.6Treboles.gif', cubierta: false, selected: false, value:6, maso: 'Treboles' },
    { name: '7.7Treboles.gif', cubierta: false, selected: false, value:7, maso: 'Treboles' },
    { name: '8.8Treboles.gif', cubierta: false, selected: false, value:8, maso: 'Treboles' },
    { name: '9.9Treboles.gif', cubierta: false, selected: false, value:9, maso: 'Treboles' },
    { name: '10.10Treboles.gif', cubierta: false, selected: false, value:10, maso: 'Treboles' },
    { name: '11.JTreboles.gif', cubierta: false, selected: false, value:11, maso: 'Treboles' },
    { name: '12.QTreboles.gif', cubierta: false, selected: false, value:12, maso: 'Treboles' },
    { name: '13.KTreboles.gif', cubierta: false, selected: false, value:13, maso: 'Treboles' }
  ];
  diamantes = [
    { name: '1.AsDiamantes.gif', cubierta: false, selected: false, value:1, maso: 'Diamantes' },
    { name: '2.2Diamantes.gif', cubierta: false, selected: false, value:2, maso: 'Diamantes' },
    { name: '3.3Diamantes.gif', cubierta: false, selected: false, value:3, maso: 'Diamantes' },
    { name: '4.4Diamantes.gif', cubierta: false, selected: false, value:4, maso: 'Diamantes' },
    { name: '5.5Diamantes.gif', cubierta: false, selected: false, value:5, maso: 'Diamantes' },
    { name: '6.6Diamantes.gif', cubierta: false, selected: false, value:6, maso: 'Diamantes' },
    { name: '7.7Diamantes.gif', cubierta: false, selected: false, value:7, maso: 'Diamantes' },
    { name: '8.8Diamantes.gif', cubierta: false, selected: false, value:8, maso: 'Diamantes' },
    { name: '9.9Diamantes.gif', cubierta: false, selected: false, value:9, maso: 'Diamantes' },
    { name: '10.10Diamantes.gif', cubierta: false, selected: false, value:10, maso: 'Diamantes' },
    { name: '11.JDiamantes.gif', cubierta: false, selected: false, value:11, maso: 'Diamantes' },
    { name: '12.QDiamantes.gif', cubierta: false, selected: false, value:12, maso: 'Diamantes' },
    { name: '13.KDiamantes.gif', cubierta: false, selected: false, value:13, maso: 'Diamantes' }
  ];
  // Arreglo de las posiciones del tablero
  p0 = [];
  p2 = [];
  p3 = [];
  p4 = [];
  p5 = [];
  p6 = [];
  p7 = [];
  p8 = [];
  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);

  }

  generatePos(p) {
    let currentBaraja = [];
    let Arrar = [];
    for (let index = 0; index < p;) {
      let numPalo = Math.round(Math.random() * (4 - 1) + 1);
      switch (numPalo) {
        case 1:
          currentBaraja = this.picas;
          break;
        case 2:
          currentBaraja = this.diamantes;
          break;
        case 3:
          currentBaraja = this.corazones;
          break;
        case 4:
          currentBaraja = this.treboles;
          break;
        default:
          break;
      }
      let numCarta = Math.round(Math.random() * (12 - 1) + 1);
      if (currentBaraja[numCarta].selected == false) {
        if (index != p - 1) {
          currentBaraja[numCarta].cubierta = true;// Cubre las cartas menos la úlitma
        }
        Arrar.push(currentBaraja[numCarta]);
        index++
        switch (numPalo) {
          case 1:
            this.picas[numCarta].selected = true;
            break;
          case 2:
            this.diamantes[numCarta].selected = true;
            break;
          case 3:
            this.corazones[numCarta].selected = true;
            break;
          case 4:
            this.treboles[numCarta].selected = true;
            break;
          default:
            break;
        }
      }
    }
    return Arrar;
  }

  ngOnInit() {
    this.p2 = this.generatePos(1);
    this.p3 = this.generatePos(2);
    this.p4 = this.generatePos(3);
    this.p5 = this.generatePos(4);
    this.p6 = this.generatePos(5);
    this.p7 = this.generatePos(6);
    this.p8 = this.generatePos(7);
    this.p0 = this.generatePos(8);
  }
}
