import { Component } from '@angular/core';
import { BombScreenComponent } from "../bomb-screen/bomb-screen.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'mine-field',
  standalone: true,
  imports: [BombScreenComponent, MatButtonModule],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {

  openModal() {
    //const modalRef = this.modalService.open(BombScreenComponent);
    //modalRef.componentInstance.name = 'World';
  }

}
