import React, { useState } from "react";
import { useParams } from "react-router-dom";
const Details = ({ setCartCount }) => {
  const [eBook, setEBook] = useState([
    {
      img: "https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "The Complete Guide to Backend Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$99",
      buttonLabel: "Add To Cart",
      bestSeller: "BEST SELLER",
      instock: "INSTOCK",
      MB: "5 MB",
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
      bestSeller: "BEST SELLER",
      instock: "INSTOCK",
      MB: "5 MB",
    },
    {
      img: "https://images.unsplash.com/photo-1613490900233-141c5560d75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
      title: "JavaScript Basics To Advance ",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
      price: "$99",
      buttonLabel: "Add To Cart",
      addToCart: true,
      bestSeller: "BEST SELLER",
      instock: "INSTOCK",
      MB: "5 MB",
    },
  ]);
  const { id } = useParams();
  const bookIndex = parseInt(id, 10);
  const books = eBook[bookIndex];
  const handleCart = () => {
    const updatedBooks = [...eBook];
    updatedBooks[bookIndex].addToCart = !updatedBooks[bookIndex].addToCart;
    setEBook(updatedBooks);
    const changeCount = updatedBooks[bookIndex].addToCart ? -1 : 1;
    setCartCount((prevCount) => prevCount + changeCount);
  };
  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
          {books.title}
        </h1>
        <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
          {books.description}
        </p>
        <div class="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded" src={books.img} alt="" />
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">{books.price}</span>
            </p>
            <p className="my-3">
              <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
              <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
              <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
              <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
              <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
            </p>
            <p className="my-4 select-none">
              <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                {books.bestSeller}
              </span>
              <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {books.instock}
              </span>
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                {books.MB}
              </span>
            </p>
            <p className="my-3">
              <button
                className={
                  books.addToCart
                    ? "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                    : "inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800"
                }
                onClick={handleCart}
              >
                {books.addToCart ? (
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
            <p className="text-lg text-gray-900 dark:text-slate-200">
              {books.description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Details;
