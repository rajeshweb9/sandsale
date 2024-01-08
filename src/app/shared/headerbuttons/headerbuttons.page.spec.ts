import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderbuttonsPage } from './headerbuttons.page';

describe('HeaderbuttonsPage', () => {
  let component: HeaderbuttonsPage;
  let fixture: ComponentFixture<HeaderbuttonsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HeaderbuttonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
