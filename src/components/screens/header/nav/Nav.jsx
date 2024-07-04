import React from 'react';
import Item from '../item/Item.jsx';

const Nav = () => {
    return (
        <nav className="header__nav">
            <ul className="header__nav-list">
                <Item text={"Вклады"}/>
                <Item text={"Кредиты"}/>
                <Item text={"Займы"}/>
                <Item text={"Карты"}/>
                <Item text={"Ипотека"}/>
                <Item text={"Страхование"}/>
                <Item text={"Инвестиции"}/>
                <Item text={"Бизнес"}/>
                <Item text={"Новости"}/>
                <Item text={"Ещё"}/>
            </ul>
            <div className="nav-box">
                <a className="nav-box__link" href="#"><img src="./src/assets/images/map-point.svg" alt="map-point" /></a>
                <a className="nav-box__link" href="#"><img src="./src/assets/images/exit.svg" alt="Exit" /></a>
            </div>
        </nav>
    )
};

export default Nav;