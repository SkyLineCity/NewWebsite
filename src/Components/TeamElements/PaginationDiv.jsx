import React from 'react';

const PaginationDiv = () => {
    return (
        <div className="pagination-div">
            <ul className="pagination">
                <li><a href="/project"><i className="ion-chevron-left"></i></a></li>
                <li><a className="page-number current" href="/project">1</a></li>
                <li><a className="page-number" href="/project">2</a></li>
                <li><a className="page-number" href="/project">3</a></li>
                <li><a href="/project"><i className="ion-chevron-right"></i></a></li>
            </ul>
        </div>
    );
};

export default PaginationDiv;