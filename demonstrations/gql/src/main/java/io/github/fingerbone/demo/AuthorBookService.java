package io.github.fingerbone.demo;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class AuthorBookService {
    private final Map<String, Author> authors = new HashMap<>();
    private final Map<String, Book> books = new HashMap<>();

    public Author createAuthor(String name) {
        Author author = new Author();
        author.setId(UUID.randomUUID().toString());
        author.setName(name);
        authors.put(author.getId(), author);
        return author;
    }

    public Book createBook(String title) {
        Book book = new Book();
        book.setId(UUID.randomUUID().toString());
        book.setTitle(title);
        books.put(book.getId(), book);
        return book;
    }

    public Author addBookToAuthor(String authorId, String bookId) {
        Author author = authors.get(authorId);
        Book book = books.get(bookId);
        author.getBooks().add(book);
        return author;
    }

    public List<Author> getAuthors() {
        return new ArrayList<>(authors.values());
    }

    public Author getAuthor(String id) {
        return authors.get(id);
    }

    public List<Book> getBooks() {
        return new ArrayList<>(books.values());
    }

    public Book getBook(String id) {
        return books.get(id);
    }
}
