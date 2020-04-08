import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmeComponentComponent } from './readme-component.component';

describe('ReadmeComponentComponent', () => {
  let component: ReadmeComponentComponent;
  let fixture: ComponentFixture<ReadmeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
