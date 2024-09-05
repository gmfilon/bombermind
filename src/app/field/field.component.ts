import { Component } from '@angular/core';
import { BombScreenComponent } from "../bomb-screen/bomb-screen.component";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mine-field',
  standalone: true,
  imports: [BombScreenComponent],
  templateUrl: './field.component.html',
  styleUrl: './field.component.css'
})
export class FieldComponent {

  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(BombScreenComponent);
    //modalRef.componentInstance.name = 'World';
  }

}
