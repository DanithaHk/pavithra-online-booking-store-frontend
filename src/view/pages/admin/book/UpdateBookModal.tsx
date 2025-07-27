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
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Edit Book
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        placeholder="Title"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                    <input
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        placeholder="Author"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    />
                    <textarea
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Description"
                        rows={4}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                    />
                    <label
                        htmlFor="photo-upload"
                        className="block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 px-4 py-6 text-center text-gray-500 hover:border-blue-400 hover:text-blue-600 transition"
                    >
                        {photo ? photo.name : "Click to upload book cover photo"}
                        <input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                    {!photo && book.photo && (
                        <img
                            src={`http://localhost:3000/uploads/${book.photo}`}
                            alt={book.title}
                            className="h-24 mt-2 rounded mx-auto"
                        />
                    )}
                    <div className="flex justify-end space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-5 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
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
