import React from 'react';
import style from './MainLayout.module.css';

type MainLayoutPropsType = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: MainLayoutPropsType) => {
  return <div className={style.container}>{children}</div>;
};

export { MainLayout };
