import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../component/InputField.tsx";
import SelectField from "../component/SelectField.tsx";


const AddBook = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imageFileName, setImageFileName] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        // 👉 handle API call here
        console.log("Submitted Book:", data);
        setIsLoading(false);
        reset();
        setImageFileName(null);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFileName(file.name);
        }
    };

    return (
        <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputField label="Title" name="title" placeholder="Enter book title" register={register} />
                <InputField label="Description" name="description" placeholder="Enter book description" type="textarea" register={register} />
                <SelectField
                    label="Category"
                    name="category"
                    options={[
                        { value: '', label: 'Choose A Category' },
                        { value: 'business', label: 'Business' },
                        { value: 'technology', label: 'Technology' },
                        { value: 'fiction', label: 'Fiction' },
                        { value: 'horror', label: 'Horror' },
                        { value: 'adventure', label: 'Adventure' }
                    ]}
                    register={register}
                />
                <div className="mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" {...register('trending')} className="rounded text-blue-600 focus:ring" />
                        <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
                    </label>
                </div>
                <InputField label="Old Price" name="oldPrice" type="number" placeholder="Old Price" register={register} />
                <InputField label="New Price" name="newPrice" type="number" placeholder="New Price" register={register} />

                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Cover Image</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 w-full" />
                    {imageFileName && <p className="text-sm text-gray-500">Selected: {imageFileName}</p>}
                </div>

                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
                    {isLoading ? "Adding..." : "Add Book"}
                </button>
            </form>
        </div>
    );
};

export default AddBook;
