import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnFormComponent } from './conn-form.component';

describe('ConnFormComponent', () => {
  let component: ConnFormComponent;
  let fixture: ComponentFixture<ConnFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
