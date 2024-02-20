import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { USERS } from 'src/app/mock-users';
import { UserService } from 'src/app/services/user.service';
import { saveAs } from 'file-saver';
import * as fs from 'fs';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  title = "Create an account"

  isSuccessfull = false;
  isFailure = false;
  loading = false;

  roles = USERS;

  form: any = {
    firstName: null, lastName: null, email: null, telephoneNr: null, role: null
  };


  constructor(private titleService: Title, private userService: UserService) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  submit(data: any) {

    const { firstName, lastName, email, telephoneNr, role } = this.form;

    this.userService.postUsers(firstName, lastName, email, telephoneNr, role).subscribe({
      next: data => {
        console.log(data);
        this.loading = false;
        this.isFailure = false;
        this.isSuccessfull = true;
      },
      error: err => {
        console.log("Error")
        this.loading = false;
        this.isSuccessfull = false;
        this.isFailure = true;
      }
    });
  }

  div1Function() {
    this.isFailure = false;
    this.isSuccessfull = false;
    this.loading = true;
  }

}
