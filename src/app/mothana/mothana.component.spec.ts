/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MothanaComponent } from './mothana.component';

describe('MothanaComponent', () => {
  let component: MothanaComponent;
  let fixture: ComponentFixture<MothanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MothanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MothanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
