import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesFormComponentComponent } from './games-form-component.component';

describe('GamesFormComponentComponent', () => {
  let component: GamesFormComponentComponent;
  let fixture: ComponentFixture<GamesFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesFormComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
