import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MathEquationProviderService } from '../math-equation/math-equation-provider.service';
import { MathEquation } from '../math-equation/math-equation';
import { interval, Subscription } from 'rxjs';
import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { ScoreCounterService } from '../score-counter.service';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-bomb-screen',
  standalone: true,
  imports: [
    MatDialogContent,
    MatCard,
    MatCardContent,
    MatFormFieldModule,
    MatDialogActions,
    FormsModule,
    MatInputModule,
    MatButton
  ],
  templateUrl: './bomb-screen.component.html',
  styleUrl: './bomb-screen.component.css'
})
export class BombScreenComponent implements OnInit {
  private readonly dialog = inject(MatDialog);
  private readonly dialogRef = inject(MatDialogRef<BombScreenComponent>);
  private result: number = 0;
  private deadlineSeconds: number = 0;
  equationString: String = "";
  minutes: string = '00';
  seconds: string = '00';
  private timerSubscription!: Subscription;
  answer!: number;
  private scoreCounterService: ScoreCounterService;

  constructor(mathEquationProviderService: MathEquationProviderService, 
    scoreCounterService: ScoreCounterService) {
    var equation: MathEquation = mathEquationProviderService.buildMathEquation();
    this.equationString = equation.getEquationString();
    this.result = equation.getResult();
    this.deadlineSeconds = equation.getDeadlineSeconds();
    this.scoreCounterService = scoreCounterService;

    //console.log("Anwer: " + this.result);
  }

  ngOnInit(): void {
    this.setMinutes();
    this.setSeconds();
    this.startTimer();
  }

  async startTimer(): Promise<void> {
    this.timerSubscription = interval(1000).subscribe((): void => {
      if (this.deadlineSeconds > 0) {
        this.setMinutes();
        this.setSeconds();
        this.deadlineSeconds--;
      } else {
        this.stopTimer();
        this.submitAnswer();
      }
    });
  }

  private stopTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private setMinutes() {
    this.minutes = String(Math.floor(this.deadlineSeconds / 60)).padStart(2, '0');
  }

  private setSeconds() {
    var mins = Math.floor(this.deadlineSeconds / 60);
    this.seconds = String(this.deadlineSeconds - (mins * 60)).padStart(2, '0');
  }

  submitAnswer(): void {
    var isCorrect = this.isCorrect();
    if (isCorrect) {
      this.scoreCounterService.addDefusedBomb();
    } else {
      this.scoreCounterService.addDetonatedBomb();
    }
    const submitDialogRef = this.dialog.open(SubmitDialogComponent, {
      disableClose: true,
      data: isCorrect
    });
    this.dialogRef.close(isCorrect);
    this.stopTimer();
    setInterval(() => submitDialogRef.close(), 5000);
  }

  private isCorrect(): boolean {    
    return this.answer == this.result;
  }

}
