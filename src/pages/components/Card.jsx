import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        key={book._id}
      >
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://imgs.search.brave.com/6LwEU6XKuShO-hAQOUenxiKKYUGYj-UK7FE2RihxMdw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/Njc1NzQyL3Bob3Rv/L2Jvb2tzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05aVhS/ZE1zM3NOMjVpSHll/NWtBRkJxRDRUcjFJ/VlI0SVk4Z1hHOGJr/VE1VPQ"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {book.authorName}
          </p>

          <Link
            to={`/book/${book._id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            More Details
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
