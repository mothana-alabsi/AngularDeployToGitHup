/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YarabComponent } from './yarab.component';

describe('YarabComponent', () => {
  let component: YarabComponent;
  let fixture: ComponentFixture<YarabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
