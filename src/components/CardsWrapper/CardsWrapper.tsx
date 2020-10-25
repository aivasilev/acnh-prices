import React from 'react';
import css from './CardsWrapper.module.css';

type CardsWrapperPropsType = {
  children: React.ReactNode;
};
const CardsWrapper = ({ children }: CardsWrapperPropsType) => {
  return <div className={css.wrapper}>{children}</div>;
};

export { CardsWrapper };
