import { Component, inject, OnDestroy } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { ScoreCounterService } from '../score-counter.service';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-ended-game',
  standalone: true,
  imports: [
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
  MatCardModule,
  RouterModule,
  MatButtonModule
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
