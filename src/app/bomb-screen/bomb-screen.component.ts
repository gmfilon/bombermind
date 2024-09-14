import {booleanAttribute, ChangeDetectionStrategy, Component, inject, model, OnInit, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MathEquationProviderService} from '../math-equation/math-equation-provider.service';
import { MathEquation } from '../math-equation/math-equation';
import { delay, interval, Subscription } from 'rxjs';
import { log } from 'console';
import { SubmitDialogComponent } from '../submit-dialog/submit-dialog.component';
import { ScoreCounterService } from '../score-counter.service';

@Component({
  selector: 'app-bomb-screen',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatDialogModule,
    MatCardModule
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

    console.log("Anwer: " + this.result);
  }

  ngOnInit(): void {
    this.setMinutes();
    this.setSeconds();
    this.startTimer();
  }

  async startTimer(): Promise<void> {
    interval(1000).subscribe((): void => {
      if (this.deadlineSeconds > 0) {
        this.setMinutes();
        this.setSeconds();
        this.deadlineSeconds--;
      } else {
        this.stopTimer();
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
    const dialogRef = this.dialog.open(SubmitDialogComponent, {
      disableClose: true,
      data: isCorrect
    });
    this.dialogRef.close(isCorrect);
    this.stopTimer();
  }

  private isCorrect(): boolean {    
    return this.answer == this.result;
  }

}
