import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginPokemonComponent } from './pagin-pokemon.component';

describe('PaginPokemonComponent', () => {
  let component: PaginPokemonComponent;
  let fixture: ComponentFixture<PaginPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginPokemonComponent]
    });
    fixture = TestBed.createComponent(PaginPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
