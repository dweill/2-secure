import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogRef } from '@angular/material/dialog';
import { ValidateDialogComponent } from './validate-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ValidateDialogComponent', () => {
  let component: ValidateDialogComponent;
  let fixture: ComponentFixture<ValidateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateDialogComponent, BrowserAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
