import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {
  playerName: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.playerName) {
      console.log(`Player Name: ${this.playerName}`);
      User.userName = this.playerName;
      // You can add additional logic here, such as navigating to a different page or starting a game.
      alert(`Welcome, ${this.playerName}! Let's play!`);
      this.router.navigate(["/game-play"]);
    } else {
      alert(`Please enter your name.`);
    }
  }

}
