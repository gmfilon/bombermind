import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreCounterService {

  private defusedBombs: number = 0;
  private detonatedBombs: number = 0;
  private totalBombs: number = 0;

  constructor() { }

  public getDefusedBombs() {
    return this.defusedBombs;
  }

  public getDetonatedBombs() {
    return this.detonatedBombs;
  }

  public setTotalBombs(totalBombs: number) {
    this.totalBombs = totalBombs;
  }

  public getTotalBombs() {
    return this.totalBombs;
  }

  public addDetonatedBomb() {
    this.detonatedBombs++;
  }

  public addDefusedBomb() {
    this.defusedBombs++;
  }

  public isEnded(): boolean {
    return this.defusedBombs + this.detonatedBombs == this.totalBombs;
  }
}
