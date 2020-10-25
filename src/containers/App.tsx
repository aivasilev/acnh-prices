import React, { useEffect, useState } from 'react';
import { CardsWrapper } from '../components/CardsWrapper/CardsWrapper';
import { ItemCard } from '../components/ItemCard/ItemCard';
import { SearchBox } from '../components/SearchBox/SearchBox';
import fish from '../data/fish.json';
import bugs from '../data/bugs.json';
import seaCreatures from '../data/sea_creatures.json';
import { MainLayout } from '../layouts/MainLayout';

type ItemType = {
  type: string;
  name: string;
  price: string;
  picture: string;
};
const allItems = [...fish, ...bugs, ...seaCreatures];
const App = () => {
  const [searchBoxValue, setSearchBoxValue] = useState<string>('');
  const [itemsToDisplay, setItemsToDisplay] = useState<ItemType[]>(allItems);
  useEffect(() => {
    setItemsToDisplay(
      allItems.filter((item) => item.name.toLowerCase().includes(searchBoxValue.toLowerCase()))
    );
  }, [searchBoxValue]);
  const handleSearchBoxInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    setSearchBoxValue(e.target.value);
  };
  return (
    <MainLayout>
      <SearchBox value={searchBoxValue} handleSearchBoxInputChange={handleSearchBoxInputChange} />
      {itemsToDisplay.length ? (
        <CardsWrapper>
          {itemsToDisplay.map((item) => (
            <ItemCard
              key={item.name}
              type={item.type}
              name={item.name}
              price={item.price}
              picture={item.picture}
            />
          ))}
        </CardsWrapper>
      ) : (
        'Nothing found'
      )}
    </MainLayout>
  );
};

export default App;
