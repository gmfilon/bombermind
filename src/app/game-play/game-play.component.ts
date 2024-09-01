import { Component } from '@angular/core';
import { FieldComponent } from '../field/field.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'game-play',
  standalone: true,
  imports: [FieldComponent, FooterComponent],
  templateUrl: './game-play.component.html',
  styleUrl: './game-play.component.css'
})
export class GamePlayComponent {
  columns: Number = 15;
  rows: Number = 15;


}
