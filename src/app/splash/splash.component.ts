import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {
  playerName: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.playerName) {
      User.name = this.playerName;
      this.router.navigate(["/game-play"]);
    } else {
      alert(`Por favor, ingresa tu nombre.`);
    }
  }

}
