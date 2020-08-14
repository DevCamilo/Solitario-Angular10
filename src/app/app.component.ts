import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop'
import { ApiService } from './api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'solitario-game';
  constructor(private api: ApiService) { }
  cont = 0; // Variable conytador para gerer las carats de la pocicion 1
  //Arreglo de las cartas
  picas = [
    { name: '1.AsPicas.gif', cubierta: false, selected: false, value: 1, color: 'Negro' },
    { name: '2.2Picas.gif', cubierta: false, selected: false, value: 2, color: 'Negro' },
    { name: '3.3Picas.gif', cubierta: false, selected: false, value: 3, color: 'Negro' },
    { name: '4.4Picas.gif', cubierta: false, selected: false, value: 4, color: 'Negro' },
    { name: '5.5Picas.gif', cubierta: false, selected: false, value: 5, color: 'Negro' },
    { name: '6.6Picas.gif', cubierta: false, selected: false, value: 6, color: 'Negro' },
    { name: '7.7Picas.gif', cubierta: false, selected: false, value: 7, color: 'Negro' },
    { name: '8.8Picas.gif', cubierta: false, selected: false, value: 8, color: 'Negro' },
    { name: '9.9Picas.gif', cubierta: false, selected: false, value: 9, color: 'Negro' },
    { name: '10.10Picas.gif', cubierta: false, selected: false, value: 10, color: 'Negro' },
    { name: '11.JPicas.gif', cubierta: false, selected: false, value: 11, color: 'Negro' },
    { name: '12.QPicas.gif', cubierta: false, selected: false, value: 12, color: 'Negro' },
    { name: '13.KPicas.gif', cubierta: false, selected: false, value: 13, color: 'Negro' }
  ];
  corazones = [
    { name: '1.AsCorazones.gif', cubierta: false, selected: false, value: 1, color: 'Rojo' },
    { name: '2.2Corazones.gif', cubierta: false, selected: false, value: 2, color: 'Rojo' },
    { name: '3.3Corazones.gif', cubierta: false, selected: false, value: 3, color: 'Rojo' },
    { name: '4.4Corazones.gif', cubierta: false, selected: false, value: 4, color: 'Rojo' },
    { name: '5.5Corazones.gif', cubierta: false, selected: false, value: 5, color: 'Rojo' },
    { name: '6.6Corazones.gif', cubierta: false, selected: false, value: 6, color: 'Rojo' },
    { name: '7.7Corazones.gif', cubierta: false, selected: false, value: 7, color: 'Rojo' },
    { name: '8.8Corazones.gif', cubierta: false, selected: false, value: 8, color: 'Rojo' },
    { name: '9.9Corazones.gif', cubierta: false, selected: false, value: 9, color: 'Rojo' },
    { name: '10.10Corazones.gif', cubierta: false, selected: false, value: 10, color: 'Rojo' },
    { name: '11.JCorazones.gif', cubierta: false, selected: false, value: 11, color: 'Rojo' },
    { name: '12.QCorazones.gif', cubierta: false, selected: false, value: 12, color: 'Rojo' },
    { name: '13.KCorazones.gif', cubierta: false, selected: false, value: 13, color: 'Rojo' }
  ];
  treboles = [
    { name: '1.AsTreboles.gif', cubierta: false, selected: false, value: 1, color: 'Negro' },
    { name: '2.2Treboles.gif', cubierta: false, selected: false, value: 2, color: 'Negro' },
    { name: '3.3Treboles.gif', cubierta: false, selected: false, value: 3, color: 'Negro' },
    { name: '4.4Treboles.gif', cubierta: false, selected: false, value: 4, color: 'Negro' },
    { name: '5.5Treboles.gif', cubierta: false, selected: false, value: 5, color: 'Negro' },
    { name: '6.6Treboles.gif', cubierta: false, selected: false, value: 6, color: 'Negro' },
    { name: '7.7Treboles.gif', cubierta: false, selected: false, value: 7, color: 'Negro' },
    { name: '8.8Treboles.gif', cubierta: false, selected: false, value: 8, color: 'Negro' },
    { name: '9.9Treboles.gif', cubierta: false, selected: false, value: 9, color: 'Negro' },
    { name: '10.10Treboles.gif', cubierta: false, selected: false, value: 10, color: 'Negro' },
    { name: '11.JTreboles.gif', cubierta: false, selected: false, value: 11, color: 'Negro' },
    { name: '12.QTreboles.gif', cubierta: false, selected: false, value: 12, color: 'Negro' },
    { name: '13.KTreboles.gif', cubierta: false, selected: false, value: 13, color: 'Negro' }
  ];
  diamantes = [
    { name: '1.AsDiamantes.gif', cubierta: false, selected: false, value: 1, color: 'Rojo' },
    { name: '2.2Diamantes.gif', cubierta: false, selected: false, value: 2, color: 'Rojo' },
    { name: '3.3Diamantes.gif', cubierta: false, selected: false, value: 3, color: 'Rojo' },
    { name: '4.4Diamantes.gif', cubierta: false, selected: false, value: 4, color: 'Rojo' },
    { name: '5.5Diamantes.gif', cubierta: false, selected: false, value: 5, color: 'Rojo' },
    { name: '6.6Diamantes.gif', cubierta: false, selected: false, value: 6, color: 'Rojo' },
    { name: '7.7Diamantes.gif', cubierta: false, selected: false, value: 7, color: 'Rojo' },
    { name: '8.8Diamantes.gif', cubierta: false, selected: false, value: 8, color: 'Rojo' },
    { name: '9.9Diamantes.gif', cubierta: false, selected: false, value: 9, color: 'Rojo' },
    { name: '10.10Diamantes.gif', cubierta: false, selected: false, value: 10, color: 'Rojo' },
    { name: '11.JDiamantes.gif', cubierta: false, selected: false, value: 11, color: 'Rojo' },
    { name: '12.QDiamantes.gif', cubierta: false, selected: false, value: 12, color: 'Rojo' },
    { name: '13.KDiamantes.gif', cubierta: false, selected: false, value: 13, color: 'Rojo' }
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
  ptemp = [];
  drop(event: any) {
    //console.log(event.previousContainer.id);//Capura el id de la lista anterior
    //console.log(event.container.id);//Capura el id de la lista nueva
    console.log(event.previousContainer.data[event.previousContainer.data.length - 1]);
    console.log(event.container.data[event.container.data.length - 1]);
    if ((event.previousContainer.data[event.previousContainer.data.length - 1].color != event.container.data[event.container.data.length - 1].color) // Se valida que el color del palo sea distinto
      && ((event.container.data[event.container.data.length - 1].value - event.previousContainer.data[event.previousContainer.data.length - 1].value) == 1)) { // Se valida el orden de las cartas
      this.api.apiFunction({
        "user": "juan.esteban",
        "origin": event.previousContainer.id, // Toma el id de la posicion anterior
        "target": event.container.id, // Toma el id de la posicion a la que se va a colocar
        "card": event.previousContainer.data[event.previousContainer.data.length - 1].value,
        "clv": event.previousContainer.data[event.previousContainer.data.length - 1].mase
      }).subscribe((e) => {
        console.log(e);
        alert('API SAY: ' + e)
      });
      if (event.previousContainer.data[event.previousContainer.data.length - 2]) { // Se valida si existe esa poscicion
        event.previousContainer.data[event.previousContainer.data.length - 2].cubierta = false; // Descubre la anterior carta de la posicion de orgen
      }
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        (event.previousContainer.data.length - 1),
        (event.container.data.length));
    }
  }

  generatePos(p) {
    let currentBaraja = [];
    let Arrar = [];
    for (let index = 0; index < p;) {
      let numPalo = Math.round(Math.random() * (4 - 1) + 1);
      switch (numPalo) { // Elige aleatoriamente algun palo de carta
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
      let numCarta = Math.round(Math.random() * (12 - 0) + 0);
      if (currentBaraja[numCarta].selected == false) { // Elige aleatoriamente un numero del palo de carta
        if (index != p - 1) {
          currentBaraja[numCarta].cubierta = true;// Cubre las cartas menos la úlitma
        }
        Arrar.push(currentBaraja[numCarta]); // Añade esa carta al arreglo de cartas
        index++
        switch (numPalo) { // Actualiza la propiedad de selecionada de la carta en la variable principal
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

  ptempGenerar(){
    if(this.cont >= this.p0.length){
      this.cont = 0;
    } else {
      this.ptemp[0] = this.p0[this.cont];
      this.cont += 1;
    }
    
  }

  ngOnInit() {
    // Genera aleatoriamente las posciones
    this.p2 = this.generatePos(1);
    this.p3 = this.generatePos(2);
    this.p4 = this.generatePos(3);
    this.p5 = this.generatePos(4);
    this.p6 = this.generatePos(5);
    this.p7 = this.generatePos(6);
    this.p8 = this.generatePos(7);
    this.p0 = this.generatePos(10);
  }
}
