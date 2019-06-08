import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  public name: string;
  public email: string;
  public message: string;

  public isEmailInvalid: boolean;
  public isNameInvalid: boolean;

  constructor() {
    this.name = "";
    this.email = "";
    this.message = "";
  }

  ngOnInit() {}

  public emailChanged() {
    this.validateEmail();
  }

  public formSubmit(): void {
    this.validateEmail();
    this.validateName();
  }

  private validateEmail(): void {
  if (this.email.length > 0 && /[a-z]@[a-z]/.test(this.email)) {
      this.isEmailInvalid = false;
    } else {
      this.isEmailInvalid = true;
    }
  }

  private validateName(): void {
    if (this.name.length > 0) {
      this.isNameInvalid = false;
    } else {
      this.isNameInvalid = true;
    }
  }
}
