import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [];
  private $books = new Subject<Book[]>();

  addBook(book: Book) {
    this.books.push(book);
    this.$books.next([...this.books]);
  }

  getBooks() {
    return this.$books.asObservable();
  }
}
