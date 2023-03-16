import { Request, Response } from "express";
import { GetBooksUseCase, PostBooksUseCase, GetBookUseCase } from "../../use-cases";

export class BookController {

    constructor(
        private readonly getBooksUseCase: GetBooksUseCase,
        private readonly postBookUseCase: PostBooksUseCase,
        private readonly getBookUseCase: GetBookUseCase
    ) { }

    async getBooks(req: Request, res: Response) {
        const books = await this.getBooksUseCase.execute();
        res.status(200).json(books);
    }

    async getBook(req: Request, res: Response) {
        const book = await this.getBookUseCase.execute(req.params.id);
        if (book === null) return res.status(404).json({error: {label: "BookNotFound", message: "Book not found."}})
        return res.status(200).json(book);
    }

    async postBook(req: Request, res: Response) {
        const book = await this.postBookUseCase.execute(req.body);
        res.status(200).json(book);
    }
}