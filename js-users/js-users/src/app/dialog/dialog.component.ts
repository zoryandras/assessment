import { ApiService } from './../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  userForm!: FormGroup;
  actionBtn: string = 'Save';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      created_at: ['', Validators.required],
    });

    if (this.editData) {
      // this.userForm.patchValue(this.editData);
      this.actionBtn = 'Update';
      this.userForm.controls['first_name'].setValue(this.editData.first_name);
      this.userForm.controls['last_name'].setValue(this.editData.last_name);
      this.userForm.controls['created_at'].setValue(this.editData.created_at);
    }
  }

  addUser() {
    // console.log(this.userForm.value);
    if (!this.editData) {
      if (this.userForm.valid) {
        this.api.postUser(this.userForm.value).subscribe({
          next: (res) => {
            alert('User added successfully');
            this.userForm.reset();
            this.dialogRef.close('save');
          },
          error: (err) => {
            alert(err);
          },
        });
      }
    } else {
      this.updateUser();
    }
  }

  updateUser() {
    this.api.putUser(this.userForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('User updated successfully');
        this.userForm.reset();
        this.dialogRef.close('update');
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  };
}
