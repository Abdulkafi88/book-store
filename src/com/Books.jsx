import React, { useState } from "react";
import { Link , useParams,useNavigate } from "react-router-dom";
const Books = ({setCartCount}) => {
  const nav = useNavigate()
  const { id } = useParams()
  const [eBook, setEBook] = useState([
    {
      img: "https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "The Complete Guide to Backend Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$99",
      buttonLabel: "Add To Cart",
      addToCart: true,
    },
    {
      img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "Frontend Fastlane Plan With Projects",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$99",
      buttonLabel: "Add To Cart",
      addToCart: true,
    },
    {
      img: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "JavaScript Basics To Advance ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$99",
      buttonLabel: "Add To Cart",
      addToCart: true,
    },
  ]);
  const handleCart = (index) => {
    const updatedBooks = [...eBook];
    updatedBooks[index].addToCart = !updatedBooks[index].addToCart;
    setEBook(updatedBooks);
    const changeCount = updatedBooks[index].addToCart ? -1 : 1;
    setCartCount((prevCount) => prevCount + changeCount);
    
  };

  return (
    <React.Fragment>
      <section className="my-20">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
          Featured eBooks
        </h1>
        <div className="flex flex-wrap justify-center lg:flex-row">
          {eBook.map((book, index) => (
            <div
              key={index}
              className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <img src={book.img} alt="" />
              <div className="p-5">
                <Link to={`/Details/${index}`}>
                
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {book.description}
                </p>
              </div>
              <div className="flex items-center m-2">
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
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
                  onClick={() => handleCart(index) }
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
    </React.Fragment>
  );
};

export default Books;
