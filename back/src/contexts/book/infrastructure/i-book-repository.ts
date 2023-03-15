import { Book } from "../types";

export type BookRaw = Book;

export interface IBookRepository {
    getAllBooks(): Promise<BookRaw[]>;
}