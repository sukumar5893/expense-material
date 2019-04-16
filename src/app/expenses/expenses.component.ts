import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenseForm: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.expenseForm = this.formBuilder.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      date: ['', Validators.required],
      description: ['', [Validators.minLength(10), Validators.maxLength(500)]]
    });
  }
  get f() { return this.expenseForm.controls; }

}
