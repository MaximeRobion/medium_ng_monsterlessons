import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { RegisterRequestInterface } from 'src/app/auth/types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectIsSubmitting } from '../../store/reducers';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
})
export class RegisterComponent {
    form = this.fb.nonNullable.group({
        username: ['', Validators.required],
        email: ['', Validators.required],
        password: ['', Validators.required],
    });

    isSubmitting$ = this.store.select(selectIsSubmitting);

    constructor(
        private fb:FormBuilder,
        private store: Store,
        ) {}

    onSubmit() {
        console.log('form', this.form.getRawValue());
        const request: RegisterRequestInterface = {
            user: this.form.getRawValue(),
        };
        this.store.dispatch(authActions.register({request}));
    }
}
