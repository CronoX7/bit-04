import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveComicComponent } from './save-comic.component';

describe('SaveComicComponent', () => {
  let component: SaveComicComponent;
  let fixture: ComponentFixture<SaveComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaveComicComponent]
    });
    fixture = TestBed.createComponent(SaveComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
