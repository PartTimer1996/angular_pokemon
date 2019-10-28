import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonstatsComponent } from './pokemonstats.component';

describe('PokemonstatsComponent', () => {
  let component: PokemonstatsComponent;
  let fixture: ComponentFixture<PokemonstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
