import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BooksService } from 'src/app/shared/services/books.service';
import { Book } from 'src/app/shared/models/book.model';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditBookComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: Book,
              private booksService: BooksService) { }

  ngOnInit() {
    this.form = new FormGroup({
      Title: new FormControl(this.data.Title, [ Validators.required, Validators.maxLength(60)]),
      Description: new FormControl(this.data.Description, [Validators.required, Validators.maxLength(100)]),
      Excerpt: new FormControl(this.data.Excerpt, [Validators.required, Validators.maxLength(5000)]),
      PublishDate: new FormControl(this.data.PublishDate, Validators.required),
      PageCount: new FormControl(this.data.PageCount, [ Validators.required, Validators.min(0), Validators.max(1000)])
    });
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onClose() {
    this.dialogRef.close();
  }

  onCancel() {
    this.form.controls['Title'].setValue(this.data.Title);
    this.form.controls['Description'].setValue(this.data.Title);
    this.form.controls['Excerpt'].setValue(this.data.Excerpt);
    this.form.controls['PublishDate'].setValue(this.data.PublishDate);
    this.form.controls['PageCount'].setValue(this.data.PageCount);
  }

  onSubmit(){
  
    if (this.form.valid) {
      
      const book = {
        ID: this.data.ID,
        Title: this.form.value.Title,
        Description: this.form.value.Description,
        Excerpt: this.form.value.Excerpt,
        PublishDate: this.form.value.PublishDate,
        PageCount: +this.form.value.PageCount
      } as Book;

      this.booksService.updateBook(book).subscribe(updatedBook => {
        this.dialogRef.close(updatedBook);
      });
    }
  }

}
