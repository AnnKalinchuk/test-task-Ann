import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/book.model";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable()
export class BooksService {
    private baseUrl: string;

    constructor  (private http: HttpClient) {
        this.baseUrl = environment.booksApi;
    }

    getBooks(): Observable<Book[]>{
        return this.http.get<Book[]>(`${this.baseUrl}Books`);
    }

    addBook(newBook: Book): Observable<Book> {
        return this.http.post<Book>(`${this.baseUrl}Books`, newBook);
    }

    updateBook(book:Book): Observable<Book> {
        return this.http.put<Book>(`${this.baseUrl}Books/${book.ID}`, book);
    }
}