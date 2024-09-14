import { Component, inject } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { FooterComponent } from '../footer/footer.component';
import { User } from '../model/user.component';
import { BombScreenComponent } from "../bomb-screen/bomb-screen.component";
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ScoreCounterService } from '../score-counter.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { EndedGameComponent } from '../ended-game/ended-game.component';

@Component({
  selector: 'game-play',
  standalone: true,
  imports: [FieldComponent, FooterComponent, BombScreenComponent, RouterModule, MatButtonModule],
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.css'
})
export class GamePlayComponent {

  scoreService: ScoreCounterService;
  readonly dialogService = inject(MatDialog);
  private readonly columnsSize: number = 7;
  private readonly rowsSize: number = 5;
  columns: Number[] = new Array(this.columnsSize).fill(0);
  rows: Number[] = new Array(this.rowsSize).fill(0);
  userName: String = User.name;

  constructor(scoreService: ScoreCounterService) {
    this.scoreService = scoreService;
    this.scoreService.setTotalBombs(this.columnsSize * this.rowsSize);
  }

  public notifyFieldResolved() {
    if (true) {
      this.dialogService.open(EndedGameComponent);
    }
  }

}
