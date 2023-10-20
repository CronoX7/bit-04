import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindComicComponent } from './find-comic.component';

describe('FindComicComponent', () => {
  let component: FindComicComponent;
  let fixture: ComponentFixture<FindComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindComicComponent]
    });
    fixture = TestBed.createComponent(FindComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
