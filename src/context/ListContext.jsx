import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const ListContext = createContext();

export function ListProvider({ children }) {
  const [lists, setLists] = useState([
    { id: uuidv4(), title: 'title1', abstract: 'abstract', items: [], importance: false },
    { id: uuidv4(), title: 'title2', items: [] }
  ]);

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