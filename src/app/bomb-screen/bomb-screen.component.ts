import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
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
export class BombScreenComponent {
  readonly dialogRef = inject(MatDialogRef<BombScreenComponent>);
  equationString: String = "";
  result: number = 0;
  //readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  //readonly animal = model(this.data.animal);

  constructor(mathEquationProviderService: MathEquationProviderService) {
    var equation: MathEquation = mathEquationProviderService.buildMathEquation();
    this.equationString = equation.getEquationString();
    this.result = equation.getResult();
  }

  submitAnswer(): void {
    this.dialogRef.close();
  }

}
