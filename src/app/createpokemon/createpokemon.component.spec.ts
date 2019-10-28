import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepokemonComponent } from './createpokemon.component';

describe('CreatepokemonComponent', () => {
  let component: CreatepokemonComponent;
  let fixture: ComponentFixture<CreatepokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
