// src/Pagination.js
import React from 'react';

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    currentPage = parseInt(currentPage)
    const getPages = () => {
        const pages = [];
        if (totalPages <= 10) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 4) pages.push('...');
            let startPage = Math.max(currentPage - 2, 2);
            let endPage = Math.min(currentPage + 2, totalPages - 1);
            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }
            if (currentPage < totalPages - 3) pages.push('...');
            pages.push(totalPages);
        }
        return pages;
    };

    const pages = getPages();

    return (
        <div className="join fixed bottom-2 left-2">
            <button
                className="join-item btn btn-sm"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                «
            </button>
            {pages.map((page, index) => (
                <button
                    key={index}
                    className={`btn btn-sm join-item ${currentPage === page ? 'btn-active' : ''}`}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={typeof page !== 'number'}
                >
                    {page}
                </button>
            ))}
            <button
                className="btn btn-sm join-item"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                »
            </button>
        </div>
    );
};

export default Pagination;
