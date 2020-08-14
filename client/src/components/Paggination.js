import React from "react";

function Paggination({ productsPerPage, ProductList, paginate, currentPage }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(ProductList.length / productsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav aria-label="Page navigation example" className="pagNav">
      <ul class="pagination">
        <li class="page-item"></li>
        {pageNumber.map((i) => {
          return (
            <li class={currentPage == i ? "page-item active" : "page-item"}>
              <a
                onClick={(e) => {
                  paginate(i);
                }}
                class="page-link"
                href="#shop"
              >
                {i}
              </a>
            </li>
          );
        })}

        <li class="page-item"></li>
      </ul>
    </nav>
  );
}

export default Paggination;
