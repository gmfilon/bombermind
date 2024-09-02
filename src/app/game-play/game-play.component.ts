import { Component, OnInit } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { FooterComponent } from '../footer/footer.component';
import { User } from '../model/user.component';

@Component({
  selector: 'game-play',
  standalone: true,
  imports: [FieldComponent, FooterComponent],
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.css'
})
export class GamePlayComponent {

  columns: Number[] = new Array(15).fill(0);
  rows: Number[] = new Array(10).fill(0);
  userName: String = User.name;

}
