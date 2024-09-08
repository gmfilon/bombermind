import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { FooterComponent } from '../footer/footer.component';
import { User } from '../model/user.component';
import { BombScreenComponent } from "../bomb-screen/bomb-screen.component";
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'game-play',
  standalone: true,
  imports: [FieldComponent, FooterComponent, BombScreenComponent, RouterModule, MatButtonModule],
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.css'
})
export class GamePlayComponent {

  columns: Number[] = new Array(7).fill(0);
  rows: Number[] = new Array(5).fill(0);
  userName: String = User.name;

}
