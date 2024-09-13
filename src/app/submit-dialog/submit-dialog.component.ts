import {ChangeDetectionStrategy, Component, inject, model, OnInit, signal} from '@angular/core';
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
import { NgStyle } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MathEquationProviderService} from '../math-equation/math-equation-provider.service';
import { MathEquation } from '../math-equation/math-equation';
import { delay, interval, Subscription } from 'rxjs';
import { log } from 'console';

@Component({
  selector: 'app-submit-dialog',
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
    MatCardModule,
    NgStyle],
  templateUrl: './submit-dialog.component.html',
  styleUrl: './submit-dialog.component.css'
})
export class SubmitDialogComponent implements OnInit {

  private readonly dialogRef = inject(MatDialogRef<SubmitDialogComponent>);
  readonly data = inject<Boolean>(MAT_DIALOG_DATA);
  style: string = 'url("/bomb_screen.webp")';

  ngOnInit(): void {
    console.log("Injected: " + this.data);
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
