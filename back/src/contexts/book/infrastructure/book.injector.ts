import { Router } from "express"
import { BookRepository, RelationalDatabase } from "../../../infrastructure/database"
import { GetBooksUseCase, PostBooksUseCase } from "../use-cases"
import { bookRoutes } from "./book.routes"
import { BookController } from "./controller"

export type BookExternalDependencies = {
    database: RelationalDatabase
}

export const bookInjector = (externalDependencies: BookExternalDependencies): Router => {
    const bookRepository = new BookRepository(externalDependencies.database)

    const getBooksUseCase = new GetBooksUseCase(bookRepository)
    const postBookUseCase = new PostBooksUseCase(bookRepository)
    
    const bookController = new BookController(
        getBooksUseCase,
        postBookUseCase
    )

    return bookRoutes(bookController)
}
