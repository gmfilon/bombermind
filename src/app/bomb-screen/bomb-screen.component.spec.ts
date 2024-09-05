import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombScreenComponent } from './bomb-screen.component';

describe('BombScreenComponent', () => {
  let component: BombScreenComponent;
  let fixture: ComponentFixture<BombScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BombScreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
