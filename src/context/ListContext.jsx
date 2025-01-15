import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ListContext = createContext();

export function ListProvider({ children }) {
  const mockData = [
    { id: uuidv4(), title: 'Groceries', abstract: 'Weekly grocery shopping', items: [
      { category: 'Fruits', complete: false, id: uuidv4(), name: 'Apples' },
      { category: 'Vegetables', complete: false, id: uuidv4(), name: 'Carrots' },
      { category: 'Dairy', complete: false, id: uuidv4(), name: 'Milk' },
      { category: 'Bakery', complete: false, id: uuidv4(), name: 'Bread' },
      { category: 'Meat', complete: false, id: uuidv4(), name: 'Chicken' }
    ], importance: false},
    { id: uuidv4(), title: 'Work Tasks', abstract: 'Tasks to complete at work', items: [], importance: true },
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