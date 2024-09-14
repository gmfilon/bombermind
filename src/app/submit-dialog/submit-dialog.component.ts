import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { NgStyle } from '@angular/common';
import { ScoreCounterService } from '../score-counter.service';
import { EndedGameComponent } from '../ended-game/ended-game.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-submit-dialog',
  standalone: true,
  imports: [NgStyle, MatDialogActions, MatButton],
  templateUrl: './submit-dialog.component.html',
  styleUrl: './submit-dialog.component.css'
})
export class SubmitDialogComponent implements OnInit, OnDestroy {

  private readonly dialogRef = inject(MatDialogRef<SubmitDialogComponent>);
  private readonly dialogService = inject(MatDialog);
  readonly data = inject<Boolean>(MAT_DIALOG_DATA);
  style: string = 'url("/bomb_screen_sm.webp")';
  private scoreService: ScoreCounterService;

  constructor(scoreService: ScoreCounterService) {
    this.scoreService = scoreService;
  }

  ngOnDestroy(): void {
    if (this.scoreService.isEnded()) {
      this.dialogService.open(EndedGameComponent);
    }
  }

  ngOnInit(): void {
    if (this.data) {
      this.style = 'url("/ok.png")';
    } else {
      this.style = 'url("/explotion.png")';
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}
