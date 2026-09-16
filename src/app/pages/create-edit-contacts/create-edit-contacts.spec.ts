import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEditContacts } from './create-edit-contacts';

describe('CreateEditContacts', () => {
  let component: CreateEditContacts;
  let fixture: ComponentFixture<CreateEditContacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditContacts],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEditContacts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
