"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const CommonPagination = ({ limit, totalItems }: any) => {
  const totalPageItem = Math.ceil(totalItems / limit); 
  const [currentPage, setCurrentPage] = useState(1); 

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    let paginationItems = [];

    for (let i = 1; i <= totalPageItem; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            isActive={i === currentPage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return paginationItems;
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {currentPage > 1 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
          )}
          {renderPaginationItems()}
          {currentPage < totalPageItem && (
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CommonPagination;
