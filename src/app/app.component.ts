import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bombermind';
  playerName: string = '';

  onSubmit() {
    if (this.playerName) {
      console.log(`Player Name: ${this.playerName}`);
      // You can add additional logic here, such as navigating to a different page or starting a game.
      alert(`Welcome, ${this.playerName}! Let's play!`);
    }
  }
}
