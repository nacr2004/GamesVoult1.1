import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerFormComponentComponent } from './gamer-form-component.component';

describe('GamerFormComponentComponent', () => {
  let component: GamerFormComponentComponent;
  let fixture: ComponentFixture<GamerFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamerFormComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamerFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
