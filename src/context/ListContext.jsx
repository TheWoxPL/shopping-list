import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ListContext = createContext();

export function ListProvider({ children }) {
  const mockData = [
    { id: uuidv4(), title: 'Groceries', abstract: 'Weekly grocery shopping', items: [
      { category: 'Fruit', complete: false, id: uuidv4(), name: 'Apples' },
      { category: 'Vegetable', complete: false, id: uuidv4(), name: 'Carrots' },
      { category: 'Medicine', complete: false, id: uuidv4(), name: 'Headache pills' },
      { category: 'Breadstuff', complete: false, id: uuidv4(), name: 'Bread' },
      { category: 'Meat', complete: false, id: uuidv4(), name: 'Chicken' }
    ], importance: false},
    { id: uuidv4(), title: 'Birthday party', abstract: 'Things to buy for my birthday party!!', items: [
      { category: 'Fruit', complete: false, id: uuidv4(), name: 'Apples' },
      { category: 'Alcohol', complete: false, id: uuidv4(), name: 'A lot of zero alcohol beers' },
      { category: 'Vegetable', complete: false, id: uuidv4(), name: 'Carrots' },
      { category: 'Medicine', complete: false, id: uuidv4(), name: 'Headache pills' },
    ], importance: true },
  ];
  const [lists, setLists] = useState(mockData);

  function addList(newList) {
    const id = uuidv4();
    const listWithId = { ...newList, id, items: [] };
    setLists((prevLists) => [...prevLists, listWithId]);
    return id;
  }

  return (
    <ListContext.Provider value={{ lists, addList, setLists }}>
      {children}
    </ListContext.Provider>
  );
}

ListProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ListContext;