import { Component, inject, OnDestroy } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ScoreCounterService } from '../score-counter.service';
import { MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ended-game',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatCard,
    MatCardContent,
    MatButton,
    RouterModule
  ],
  templateUrl: './ended-game.component.html',
  styleUrl: './ended-game.component.css'
})
export class EndedGameComponent implements OnDestroy {

  scoreCounterService: ScoreCounterService;
  private readonly dialogRef = inject(MatDialogRef<EndedGameComponent>);

  constructor(scoreCounterService: ScoreCounterService) {
    this.scoreCounterService = scoreCounterService;scoreCounterService.getDetonatedBombs
  }

  close() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    console.log("Destroyed");
  }

}
