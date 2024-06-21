import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-resume',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './user-resume.component.html',
  styleUrl: './user-resume.component.css'
})
export class UserResumeComponent {
  userForm!: FormGroup;
  userData: any; // Tipo según la estructura del objeto que recibes

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // Recibe los datos enviados desde el otro componente
    this.userData = history.state.userData;
    console.log('Received data:', this.userData);

    // Inicializa el FormGroup y deshabilita los campos
    this.userForm = this.fb.group({
      firstName: [{ value: this.userData.firstName, disabled: true }, Validators.required],
      lastName: [{ value: this.userData.lastName, disabled: true }, Validators.required]
    });
  }

  redirectToGetUser(): void {
    // Redirige a la ruta '/getUser'
    this.router.navigate(['/getUser']);
  }
}
