import { Book } from "../domains/types";

export type BookRaw = Book;

export interface IBookRepository {
    getAllBooks(): Promise<BookRaw[]>;
    createBook(book: Book): Promise<Book>;
}