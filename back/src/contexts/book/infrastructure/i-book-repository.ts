import { Book } from "../domains/types";

export type BookRaw = Book;

export interface IBookRepository {
    getAllBooks(): Promise<BookRaw[]>;
    getBook(id: Book['id']): Promise<BookRaw | null>;
    createBook(book: Book): Promise<Book>;
}