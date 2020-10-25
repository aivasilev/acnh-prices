import React from 'react';
import css from './ItemCard.module.css';

type ItemCardPropType = {
  type: string;
  name: string;
  price: string;
  picture: string;
};
const ItemCard = ({ type, name, price, picture }: ItemCardPropType) => {
  return (
    <div className={`${css.card} ${css[type]}`}>
      <div className={css.price}>
        <img
          alt='bells'
          src='https://dodo.ac/np/images/a/a2/100_Bells_NH_Inv_Icon.png'
          className={css.bells}
        />
        {`${price}`}
      </div>
      <img alt='fist' src={picture} className={css.place} />
      <div className={css.name}>{`${name}`}</div>
    </div>
  );
};

export { ItemCard };
