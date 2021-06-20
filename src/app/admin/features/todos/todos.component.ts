import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  // variables
  AddTodo: FormGroup;
  isLoading: boolean = false;

  constructor(
    private message: NzMessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    // Signup Form for Signup Page - Mudasir Ali
    this.AddTodo = new FormGroup({
      todo: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  get Todo() {
    return this.AddTodo.get('todo') as FormControl;
  }

  onSubmit() {
    if (this.AddTodo.invalid) {
      this.isLoading = true;
      for (const i in this.AddTodo.controls) {
        this.AddTodo.controls[i].markAsDirty();
        this.AddTodo.controls[i].updateValueAndValidity();
      }
      this.message.warning('Plz, Fill the Field Correctly');
      this.isLoading = false;
    } else {
    }
  }
}
