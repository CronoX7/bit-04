import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComicComponent } from './add-comic.component';

describe('AddComicComponent', () => {
  let component: AddComicComponent;
  let fixture: ComponentFixture<AddComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddComicComponent]
    });
    fixture = TestBed.createComponent(AddComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
