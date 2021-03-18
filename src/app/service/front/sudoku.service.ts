import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Matrice} from '../../helper/matrice';

@Injectable({
  providedIn: 'root'
})
export class SudokuService {

  exercice = [
    [0, 0, 5, 0, 4, 8, 0, 3, 0],
    [4, 6, 0, 0, 7, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 9, 4, 5, 0],

    [0, 2, 0, 0, 0, 6, 0, 0, 0],
    [1, 0, 0, 0, 0, 2, 0, 7, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0],

    [5, 0, 7, 0, 9, 0, 0, 0, 3],
    [0, 0, 0, 3, 2, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 7, 9, 0, 0],
  ];

  sudokuSubject = new Subject<number[][]>();
  constructor() { }


  emitExercice() {
    return this.sudokuSubject.next(this.exercice);
  }

  getExercice(): number[][] {
    return  [
      [0, 0, 5, 0, 4, 8, 0, 3, 0],
      [4, 6, 0, 0, 7, 0, 0, 0, 2],
      [0, 0, 0, 0, 0, 9, 4, 5, 0],

      [0, 2, 0, 0, 0, 6, 0, 0, 0],
      [1, 0, 0, 0, 0, 2, 0, 7, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0],

      [5, 0, 7, 0, 9, 0, 0, 0, 3],
      [0, 0, 0, 3, 2, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 7, 9, 0, 0],
    ];
  }
}