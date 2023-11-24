import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesTableComponentComponent } from './games-table-component.component';

describe('GamesTableComponentComponent', () => {
  let component: GamesTableComponentComponent;
  let fixture: ComponentFixture<GamesTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesTableComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamesTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
