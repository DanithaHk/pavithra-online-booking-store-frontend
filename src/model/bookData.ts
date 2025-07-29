export interface BookData {
    _id: string;
    title: string;
    author: string;
    description?: string;
    photo?: string;     // filename or URL of the book cover photo
    category?: string;  // e.g. "Fiction", "Science", etc.
    price?: number;     // price in your currency
}