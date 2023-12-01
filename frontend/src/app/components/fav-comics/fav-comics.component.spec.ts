import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavComicsComponent } from './fav-comics.component';

describe('FavComicsComponent', () => {
  let component: FavComicsComponent;
  let fixture: ComponentFixture<FavComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavComicsComponent]
    });
    fixture = TestBed.createComponent(FavComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
