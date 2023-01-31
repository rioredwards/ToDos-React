import { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';
import { getListItems } from '../services/items';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await getListItems();
        setItems(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchItems();
  }, []);
  return <ItemsContext.Provider value={{ items, setItems }}>{children}</ItemsContext.Provider>;
};

const useItems = () => {
  const data = useContext(ItemsContext);

  if (!data) {
    throw new Error('useItems must be wrapped in a UseProvider');
  }
  return data;
};

export { ItemsProvider, useItems };
