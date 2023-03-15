import { Request, Response } from "express";
import { GetBooksUseCase } from "../../use-cases";

export class BookController {

    constructor(
        private readonly getBooksUseCase: GetBooksUseCase
    ) { }

    async getBooks(req: Request, res: Response) {
        const books = await this.getBooksUseCase.execute();
        res.status(200).json(books);
    }
}