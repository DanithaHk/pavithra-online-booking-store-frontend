import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import CreateBookModal from "./CreateBookModal";
import UpdateBookModal from "./UpdateBookModal";
import { backendApi } from "../../../../../api.ts";

interface BookData {
    _id: string;
    title: string;
    author: string;
    description?: string;
    photo?: string;
}

const AdminBooksPage: React.FC = () => {
    const [books, setBooks] = useState<BookData[]>([]);
    const [editingBook, setEditingBook] = useState<BookData | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);

    const fetchBooks = async () => {
        try {
            const res = await backendApi.get("/book");
            setBooks(res.data);
        } catch (err) {
            console.error("Failed to fetch books", err);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await backendApi.delete(`/book/${id}`);
            fetchBooks();
        } catch (err) {
            console.error("Failed to delete book", err);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Book Management</h2>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    + Add Book
                </button>
            </div>

            <table className="min-w-full border rounded">
                <thead className="bg-gray-100">
                <tr>
                    <th className="p-3">Title</th>
                    <th className="p-3">Author</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Photo</th>
                    <th className="p-3">Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => (
                    <tr key={book._id} className="border-t hover:bg-gray-50">
                        <td className="p-3">{book.title}</td>
                        <td className="p-3">{book.author}</td>
                        <td className="p-3 max-w-xs truncate">{book.description}</td>
                        <td className="p-3">
                            {book.photo ? (
                                <img
                                    src={`http://localhost:3000/uploads/${book.photo}`}
                                    alt={book.title}
                                    className="h-12 w-12 object-cover rounded"
                                />
                            ) : (
                                "No photo"
                            )}
                        </td>
                        <td className="p-3 space-x-2">
                            <button
                                onClick={() => setEditingBook(book)}
                                className="text-blue-500"
                                title="Edit Book"
                            >
                                <HiPencil />
                            </button>
                            <button
                                onClick={() => handleDelete(book._id)}
                                className="text-red-500"
                                title="Delete Book"
                            >
                                <HiTrash />
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {showCreateModal && (
                <CreateBookModal
                    onClose={() => {
                        setShowCreateModal(false);
                        fetchBooks();
                    }}
                />
            )}

            {editingBook && (
                <UpdateBookModal
                    book={editingBook}
                    onClose={() => {
                        setEditingBook(null);
                        fetchBooks();
                    }}
                />
            )}
        </div>
    );
};

export default AdminBooksPage;
