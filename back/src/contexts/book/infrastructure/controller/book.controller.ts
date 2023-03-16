import { Request, Response } from "express";
import { GetBooksUseCase, PostBooksUseCase } from "../../use-cases";

export class BookController {

    constructor(
        private readonly getBooksUseCase: GetBooksUseCase,
        private readonly postBookUseCase: PostBooksUseCase
    ) { }

    async getBooks(req: Request, res: Response) {
        const books = await this.getBooksUseCase.execute();
        res.status(200).json(books);
    }

    async postBook(req: Request, res: Response) {
        const book = await this.postBookUseCase.execute(req.body);
        res.status(200).json(book);
    }
}