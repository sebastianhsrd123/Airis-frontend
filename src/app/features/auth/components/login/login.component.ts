import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
 } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { INTERNAL_ROUTES } from 'src/app/core/routes/internal.routes';
import { LoginService } from 'src/app/core/services/auth/login.service';
import { userLogin } from 'src/app/interfaces/user-login.interface';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean;
  loginData: userLogin;
  errorEmail: string;
  errorPassword: string;
  isLoading: boolean

  constructor(
    private loginService: LoginService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.hide = true;
    this.loginData = { email: '', password: '' };
    this.errorEmail = '';
    this.errorPassword = '';
    this.isLoading = false;
  }

  ngOnInit(): void {
  }

  async validateFields() {
    this.isLoading = true;
    await this.validateEmail();
    await this.validatePassword();
  }

  async login() {
    await this.validateFields();
    if (!this.errorEmail && !this.errorPassword) {
      this.loginService.login(this.loginData).subscribe(
        (response) => {
          this.isLoading = false;
          this.router.navigate([INTERNAL_ROUTES.ROUTE_MAIN]);
        },
        (error) => {
          this.isLoading = false;
          this.openDialog(error);
        }
      );
    } else {
      this.isLoading = false;
    }
  }

  validateEmail() {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!this.loginData.email) return this.errorEmail = 'El correo es requerido*';
    if (!emailPattern.test(this.loginData.email)) return this.errorEmail = 'El correo no es valido*';
    return this.errorEmail = '';
  }
  validatePassword() {
    if (!this.loginData.password) return this.errorPassword = 'la contraseña esta vacia*';
    if (this.loginData.password.length < 6) return this.errorPassword = 'la contraseña es muy corta*';
    return this.errorPassword = '';
  }

  openDialog(error:any): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '300px',
      data: {
        titleError: 'Error',
        contentError: error.message,
        buttonError: 'Cerrar'
      }
    });
  }
}


