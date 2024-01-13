// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   router: any;

//   constructor(private fb: FormBuilder) {
//     this.loginForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,10}$/)]],
//     });
//   }

//   get email() {
//     return this.loginForm.get('email');
//   }

//   get password() {
//     return this.loginForm.get('password');
//   }

//   ngOnInit(): void {
//     this.loginForm = this.fb.group({
//       customerName: ['', Validators.required],
//       password: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(6),
//           Validators.maxLength(10),
//           Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}$/),
//         ],
//       ],
//       rememberMe: [false],
//     });
//   }
//   onSubmit() {
//     // Perform form submission logic here
//     if (this.loginForm.valid) {
//       // Navigate to the "success" page upon successful form submission
//       this.router.navigate(['/home']);
//     }
// }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false; // New variable to track login status

  // Inject the Router service in the constructor
  constructor(private router: Router) {}

  onSubmit() {
    // Simulating successful login with dummy data
    if (this.email === 'kavya7@gmail.com' && this.password === 'Kavya@2527') {
      // Update login status and log the success
      this.isLoggedIn = true;
      console.log('Login successful!', this.email);
      alert("Login Successfully")

      // Navigate to the /customers route after successful login
      this.router.navigate(['/home']);
    } else {
      console.log('Login failed. Please check your credentials.');
    }
  }
}