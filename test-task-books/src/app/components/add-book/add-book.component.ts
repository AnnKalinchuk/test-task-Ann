import { Component, OnInit, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/models/book.model';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddBookComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              private booksService: BooksService) {
   }

  ngOnInit() {
    this.form = new FormGroup({
      Title: new FormControl('', [ Validators.required, Validators.maxLength(60)]),
      Description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      Excerpt: new FormControl('', [Validators.required, Validators.maxLength(5000)]),
      PublishDate: new FormControl('', Validators.required),
      PageCount: new FormControl('', [ Validators.required, Validators.min(0), Validators.max(1000)])
    });
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.form.controls[controlName].hasError(errorName);
  }

  onSubmit(){
  
    if (this.form.valid) {
      
      const newBook = {
        Title: this.form.value.Title,
        Description: this.form.value.Description,
        Excerpt: this.form.value.Excerpt,
        PublishDate: this.form.value.PublishDate,
        PageCount: +this.form.value.PageCount
      } as Book;

      this.booksService.addBook(newBook).subscribe(addedBook => {
        this.dialogRef.close(addedBook);
      });
    }
  }
  
  onClose() {
    this.dialogRef.close();
  }

}
