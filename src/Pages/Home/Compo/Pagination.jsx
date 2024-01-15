import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
        <div>
             <div className="flex justify-center mt-4">
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    className={`mx-2 px-3 py-1 bg-gray-200 rounded ${
                        page === currentPage ? 'bg-blue-500 text-white' : 'hover:bg-blue-300'
                    }`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
        </div>
    );
};

export default Pagination;