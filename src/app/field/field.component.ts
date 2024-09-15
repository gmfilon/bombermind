import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgStyle } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BombScreenComponent } from '../bomb-screen/bomb-screen.component';

@Component({
  selector: 'mine-field',
  standalone: true,
  imports: [MatButtonModule, NgStyle],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FieldComponent {

  readonly dialog = inject(MatDialog);
  imgScr: string = 'deactivated_bomb_II.png';
  imgSize: String = "5em";
  btnColor: string = 'accent';
  btnDisabled: boolean = false;

  openBombScreen() {
    this.btnDisabled = true;
    const dialogRef = this.dialog.open(BombScreenComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.handleResponse(result);
    });
  }

  private handleResponse(success: boolean) {
    if (success) {
      this.imgScr = 'ok.png';
      this.btnColor = 'success';
      this.imgSize = "3em";
    } else {
      this.imgScr = 'fire_II.png';
      this.btnColor = 'error';
      this.imgSize = "3em";
    }
  }

}