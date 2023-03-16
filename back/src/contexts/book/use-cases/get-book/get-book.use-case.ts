import { Book } from "../../domains/types"
import { IBookRepository } from "../../infrastructure"

export class GetBookUseCase {
    constructor(private bookRepository: IBookRepository) { }

    async execute(id: Book['id']): Promise<Book | null> {
        return this.bookRepository.getBook(id)
    }
}
