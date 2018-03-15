import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavmovieComponent } from './favmovie.component';

describe('FavmovieComponent', () => {
  let component: FavmovieComponent;
  let fixture: ComponentFixture<FavmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
