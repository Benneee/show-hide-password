import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-sample-form",
  templateUrl: "./sample-form.component.html",
  styleUrls: ["./sample-form.component.css"]
})
export class SampleFormComponent implements OnInit {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initRegForm();
  }

  initRegForm() {
    this.registrationForm = this.fb.group({
      email: ["", Validators.required, Validators.email],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    });
  }
}
