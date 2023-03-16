import { Router } from "express"
import { BookRepository, RelationalDatabase } from "../../../infrastructure/database"
import { GetBooksUseCase, GetBookUseCase, PostBooksUseCase } from "../use-cases"
import { bookRoutes } from "./book.routes"
import { BookController } from "./controller"

export type BookExternalDependencies = {
    database: RelationalDatabase
}

export const bookInjector = (externalDependencies: BookExternalDependencies): Router => {
    const bookRepository = new BookRepository(externalDependencies.database)

    const getBooksUseCase = new GetBooksUseCase(bookRepository)
    const postBookUseCase = new PostBooksUseCase(bookRepository)
    const getBookUseCase = new GetBookUseCase(bookRepository)
    
    const bookController = new BookController(
        getBooksUseCase,
        postBookUseCase,
        getBookUseCase
    )

    return bookRoutes(bookController)
}
