import React, { useState } from "react";
import { backendApi } from "../../../../../api.ts";

interface BookData {
    _id: string;
    title: string;
    author: string;
    description?: string;
    photo?: string;
}

interface Props {
    book: BookData;
    onClose: () => void;
}

const UpdateBookModal: React.FC<Props> = ({ book, onClose }) => {
    const [form, setForm] = useState({
        title: book.title,
        author: book.author,
        description: book.description || "",
    });
    const [photo, setPhoto] = useState<File | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("author", form.author);
        formData.append("description", form.description);
        if (photo) formData.append("photo", photo);

        try {
            await backendApi.put(`/book/${book._id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            onClose();
        } catch (err) {
            alert("Failed to update book");
            console.error(err);
        }
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-300">
                <h2 className="text-2xl font-semibold mb-4 text-center">Edit Book</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        placeholder="Author"
                        required
                        className="w-full border rounded px-3 py-2"
                    />
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full border rounded px-3 py-2"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full"
                    />
                    {book.photo && !photo && (
                        <img
                            src={`http://localhost:3000/uploads/${book.photo}`}
                            alt={book.title}
                            className="h-20 mt-2 rounded"
                        />
                    )}
                    <div className="flex justify-end space-x-2 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded border"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-5 py-2 rounded bg-blue-600 text-white"
                        >
                            Update Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBookModal;
