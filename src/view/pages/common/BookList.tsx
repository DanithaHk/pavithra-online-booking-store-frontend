import React, { useEffect, useState } from "react";
import {backendApi} from "../../../../api.ts";


interface BookData {
    _id: string;
    title: string;
    author: string;
    description?: string;
    photo?: string;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<BookData[]>([]);

    const fetchBooks = async () => {
        try {
            const res = await backendApi.get("/book");
            setBooks(res.data);
        } catch (err) {
            console.error("Failed to fetch books", err);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="p-4 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((book) => (
                <div key={book._id} className="border rounded shadow p-4">
                    {book.photo && (
                        <img
                            src={`http://localhost:3000/uploads/${book.photo}`}
                            alt={book.title}
                            className="w-full h-48 object-cover rounded mb-3"
                        />
                    )}
                    <h3 className="text-lg font-semibold">{book.title}</h3>
                    <p className="italic text-sm text-gray-600">{book.author}</p>
                    <p className="text-sm mt-1">{book.description}</p>
                </div>
            ))}
        </div>
    );
};

export default BookList;
