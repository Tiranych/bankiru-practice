import React from 'react';

const Item = ({text}) => {
    return (
        <li className="header__nav-item">
            <a className="header__nav-link" href="#">{text}</a>
        </li>
    )
};

export default Item;