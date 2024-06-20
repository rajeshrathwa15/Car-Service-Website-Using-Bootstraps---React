import React from "react";
import BookServiceTableData from "../Container/BookServiceTableData";
import BookServiceModel from "../Layout/BookServiceModel";

const BookService = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Book Service
        </button>

        <BookServiceModel />
        <table className="table table-primary mt-5 table-borderless">
          <thead>
            <tr>
              <th>Service Number</th>
              <th>Customer Name</th>
              <th>Customer Number</th>
              <th>Car Category</th>
              <th>Book Date</th>
              <th>Book Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <BookServiceTableData />
            </tr>
            <tr>
              <BookServiceTableData />
            </tr>
            <tr>
              <BookServiceTableData />
            </tr>
            <tr>
              <BookServiceTableData />
            </tr>
            <tr>
              <BookServiceTableData />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default BookService;
