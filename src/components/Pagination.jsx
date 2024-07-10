import {useEffect, useState} from "react";

const getPageNumbers = (current, total) => {
    if (total === 0) {
        return []
    }
    let startPage, endPage;
    if (total <= 5) {
        startPage = 1;
        endPage = total;
    } else {
        if (current <= 3) {
            startPage = 1;
            endPage = 5;
        } else if (current + 2 >= total) {
            startPage = total - 4;
            endPage = total;
        } else {
            startPage = current - 2;
            endPage = current + 2;
        }
    }
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }
    return pages;
};

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const [pageNumbers, setPageNumbers] = useState(getPageNumbers(currentPage, totalPages))
    useEffect(() => {
        setPageNumbers(getPageNumbers(currentPage, totalPages))
    }, [currentPage]);
    useEffect(() => {
        setPageNumbers(getPageNumbers(currentPage, totalPages))
    }, [totalPages]);


    return (
        <div>
            {currentPage >= 4 &&
                <input
                    className="join-item btn btn-square"
                    type="radio"
                    name="options"
                    aria-label="1"
                    checked={currentPage === 1}
                    onClick={() => onPageChange(1)}
                />
            }
            {currentPage >= 5 &&
                <input
                    className="join-item btn btn-square disabled"
                    type="radio"
                    name="options"
                    aria-label="..."
                />
            }
            {
                pageNumbers.map((item, index) => (
                    <input
                        className="join-item btn btn-square"
                        type="radio"
                        name="options"
                        aria-label={item}
                        key={index}
                        checked={currentPage === item}
                        onClick={() => onPageChange(item)}
                    />
                ))
            }

        </div>
    )
}

export default Pagination