import { Injectable } from '@angular/core';
import { MathEquation } from './math-equation';

@Injectable({
  providedIn: 'root'
})
export class MathEquationProviderService {

  constructor() { }

  public buildMathEquation() : MathEquation {
    var fst = this.getRandom(500, 1000);
    var snd = this.getRandom(100, 500);
    var trd = this.getRandom(2, 10);

    return this.getStrategy().build(fst, snd, trd);
  }

  private getStrategy(): EquationStrategy {
    return new Strategy1();
  }

  private getRandom(min: number, max: number): number {
    const rand = Math.random();
    const range = max - min;
    return min + (rand * range);
  }

}

interface EquationStrategy {
  build(fst: number, snd: number, trd: number): MathEquation;
}

class Strategy1 implements EquationStrategy {

  build(fst: number, snd: number, trd: number): MathEquation {
    return new MathEquation(fst.toString() + " + ( " + snd.toString() + " * " + trd.toString() + " )", 
      fst + (snd * trd));
  }

}