import { BookRaw, IBookRepository } from "../../../../contexts/book";
import { Book } from "../../../../contexts/book/domains/types";
import { RelationalDatabase } from "../../database";
import { toBookRaw } from "./book.mapper";

export class BookRepository implements IBookRepository {

    constructor(private readonly database: RelationalDatabase) { }

    async getAllBooks(): Promise<BookRaw[]> {
        const books = await this.database.client.book.findMany();
        return books.map(toBookRaw);
    }

    async getBook(id: Book['id']): Promise<Book | null> {
        const res = await this.database.client.book.findUnique({where: {id}})
        return res
    }

    async createBook(book: Book): Promise<Book> {
        const data = {data: book}
        const res = await this.database.client.book.create(data);
        return res
    }
}