import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const AllBooks = ({ ToggleSearch, setCartCount }) => {
  const [eBook, setEBook] = useState([
    {
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "Basics To Advanced In React",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$99",
      buttonLabel: "Add To Cart",
      addToCart: true,
      rating: 5,
    },
    {
      img: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "Django Framework ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$19",
      buttonLabel: "Add To Cart",
      addToCart: true,
      rating: 3,
    },
    {
      img: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "The Future of Design Systems",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$49",
      buttonLabel: "Add To Cart",
      addToCart: true,
      rating: 4,
    },
    {
      img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "Build a Blockchain from Scratch in Go",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$19",
      buttonLabel: "Add To Cart",
      addToCart: true,
      rating: 4,
    },
  ]);
  const [info, setInfo] = useState("");
  const handleCart = (index) => {
    const updatedBooks = [...eBook];
    updatedBooks[index].addToCart = !updatedBooks[index].addToCart;
    setEBook(updatedBooks);
    const changeCount = updatedBooks[index].addToCart ? -1 : 1;
    setCartCount((prevCount) => prevCount + changeCount);
  };

  return (
    <section className="my-5">
      <div className="my-5 flex justify-between">
        <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
          All eBooks({eBook.length})
        </span>
      </div>
      {ToggleSearch && <Search />}
      <div className="flex flex-wrap justify-center lg:flex-row">
        {eBook.map((book, index) => (
          <div
            key={index}
            className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <img src={book.img} alt="" />
            <div className="p-5">
              <Link to={`/AllBooksDetails/ ${index}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {book.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {book.description}
              </p>
            </div>
            <div className="flex items-center m-2">
              {[...Array(book.rating)].map((_, i) => (
                <i
                  key={i}
                  className="text-lg bi bi-star-fill text-yellow-500 mr-1"
                ></i>
              ))}
            </div>
            <p className="flex justify-between items-center">
              <span className="text-2xl dark:text-gray-200 m-2">
                <span>{book.price}</span>
              </span>
              <button
                className={
                  book.addToCart
                    ? "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                    : "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
                }
                onClick={() => handleCart(index)}
              >
                {book.addToCart ? (
                  <>
                    Add To Cart <i className="ml-1 bi bi-plus-lg"></i>{" "}
                  </>
                ) : (
                  <>
                    Remove Item <i className="ml-1 bi bi-trash3"></i>{" "}
                  </>
                )}
              </button>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBooks;
