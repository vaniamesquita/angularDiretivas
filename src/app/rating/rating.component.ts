import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent  {

  // input proprety
  // input proprety

  @Input()
  rating!: number;

  // //semantica de um evento
  // //recebe um evento que tem o tipo do valor que vai ser emitido qnd ocorrer o evento
  // //sempre que onRatingChange ocorrer vai existir um numero novo da nota q vai ser emitido
  // //como um evento
  // //eventEmitter é uma classe e precisa der instanciado
  // @Output()
  // onRatingChange = new EventEmitter<number>()

  // onClick(i: number) {
  //   this.onRatingChange.emit(i)
  //   //emit é um metodo de eventemitter
  // }

  //alterado a nomeclatura OnRatingChange para ratingChange e ai usamos o two way binding
  @Output()
  ratingChange = new EventEmitter<number>()

  onClick(i: number) {
    this.ratingChange.emit(i)
    //emit é um metodo de eventemitter
  }

}
