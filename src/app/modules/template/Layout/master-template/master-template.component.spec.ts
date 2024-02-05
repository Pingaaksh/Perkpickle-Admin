import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTemplateComponent } from './master-template.component';

describe('MasterTemplateComponent', () => {
  let component: MasterTemplateComponent;
  let fixture: ComponentFixture<MasterTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasterTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
