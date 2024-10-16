import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3000/book/");
    console.log(response.data.data);

    if (response.status === 200) {
      setBooks(response.data.data);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly mt-10px">
        {books.length > 0 &&
          books.map((book) => {
            return <Card book={book} key={book._id} />;
          })}
      </div>
    </>
  );
};

export default Home;
