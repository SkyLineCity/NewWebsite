import React from 'react';

const PaginationDiv02 = () => {
    return (
        <div className="pagination-div">
            <ul className="pagination">
                <li><a className="page-number current" href="/project">1</a></li>
                <li><a className="page-number" href="/project">2</a></li>
                <li><a className="page-number" href="/project">3</a></li>
                <li><a className="page-number" href="/project">4</a></li>
                <li><a className="page-number" href="/project">...</a></li>
                <li><a className="page-number" href="/project">8</a></li>
                <li><a href="/project"><i className="bi bi-chevron-right"></i></a></li>
            </ul>
        </div>
    );
};

export default PaginationDiv02;
