import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [data, setData] = useState({
    bookName: "",
    bookPrice: "",
    authorName: "",
    publication: "",
    isbnNumber: "",
    bookImage: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setData({ ...data, [name]: files[0] });
      setData({ ...data, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post("http://localhost:3000/book", formData);
      console.log("API Response:", response);
      if (response.status === 201) {
        console.log("Navigation to home");

        navigate("/");
      } else {
        alert("something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to submit the book!");
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center mt-28">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add Book
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Form Inputs */}
              <div>
                <label
                  htmlFor="bookName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Book Name
                </label>
                <input
                  type="text"
                  name="bookName"
                  id="bookName"
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="authorName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  name="authorName"
                  id="authorName"
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="isbnNumber"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  ISBN Number
                </label>
                <input
                  type="number"
                  name="isbnNumber"
                  id="isbnNumber"
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="publication"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Publication
                </label>
                <input
                  type="text"
                  name="publication"
                  id="publication"
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="bookPrice"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Book Price
                </label>
                <input
                  type="number"
                  name="bookPrice"
                  id="bookPrice"
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="bookImage"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Book Image
                </label>
                <input
                  type="file"
                  name="bookImage"
                  id="bookImage"
                  onChange={handleChange}
                  required
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddBook;
