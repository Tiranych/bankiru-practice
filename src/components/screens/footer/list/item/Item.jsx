import React from 'react';

const Item = ({url}) => {
    return (
        <li>
            <a href="#">
                <img src={url} alt="" />
            </a>
        </li>
    )
};

export default Item;