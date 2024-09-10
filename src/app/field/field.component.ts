import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BombScreenComponent } from '../bomb-screen/bomb-screen.component';

@Component({
  selector: 'mine-field',
  standalone: true,
  imports: [BombScreenComponent, MatButtonModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldComponent {

  readonly dialog = inject(MatDialog);

  openModal() {
    const dialogRef = this.dialog.open(BombScreenComponent, {
      //data: {name: this.name(), animal: this.animal()},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        //this.animal.set(result);
      }
    });
  }

}