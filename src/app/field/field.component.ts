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
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FieldComponent {

  readonly dialog = inject(MatDialog);
  imgScr: string = 'bomb_I.png';
  btnColor: string = 'accent';
  btnDisabled: boolean = false;

  openModal() {
    this.btnDisabled = true;
    const dialogRef = this.dialog.open(BombScreenComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.handleResponse(result);
    });
  }

  private handleResponse(success: boolean) {
    console.log("Deactivating success: " + success);
    if (success) {
      this.imgScr = 'deactivated_bomb_II.png';
      this.btnColor = 'success';
    } else {
      this.imgScr = 'fire_II.png';
      this.btnColor = 'error';
    }
  }

}