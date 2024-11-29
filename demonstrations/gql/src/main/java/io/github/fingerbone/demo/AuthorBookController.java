package io.github.fingerbone.demo;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;

@Controller
public class AuthorBookController {
    private final AuthorBookService service;

    public AuthorBookController(AuthorBookService service) {
        this.service = service;
    }

    @QueryMapping
    public List<Author> authors() {
        return service.getAuthors();
    }

    @QueryMapping
    public Author author(@Argument String id) {
        return service.getAuthor(id);
    }

    @QueryMapping
    public List<Book> books() {
        return service.getBooks();
    }

    @QueryMapping
    public Book book(@Argument String id) {
        return service.getBook(id);
    }

    @MutationMapping
    public Author createAuthor(@Argument String name) {
        return service.createAuthor(name);
    }

    @MutationMapping
    public Book createBook(@Argument String title) {
        return service.createBook(title);
    }

    @MutationMapping
    public Author addBookToAuthor(@Argument String authorId, @Argument String bookId) {
        return service.addBookToAuthor(authorId, bookId);
    }
}