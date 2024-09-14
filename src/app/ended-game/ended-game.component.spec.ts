import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedGameComponent } from './ended-game.component';

describe('EndedGameComponent', () => {
  let component: EndedGameComponent;
  let fixture: ComponentFixture<EndedGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndedGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
