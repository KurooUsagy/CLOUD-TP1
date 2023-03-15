import { BookRaw, IBookRepository } from "../../../../contexts/book";
import { RelationalDatabase } from "../../database";
import { toBookRaw } from "./book.mapper";

export class BookRepository implements IBookRepository {

    constructor(private readonly database: RelationalDatabase) { }


    async getAllBooks(): Promise<BookRaw[]> {
        const books = await this.database.client.book.findMany();
        return books.map(toBookRaw);
    }
}