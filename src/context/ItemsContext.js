import { useEffect } from 'react';
import { useState, createContext, useContext } from 'react';
import { deleteListItem, editListItem, getListItems, toggleListItem } from '../services/items';

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

  const handleCompleteToDo = (id, complete) => {
    const completeToDo = async (id, complete) => {
      try {
        const data = await toggleListItem(id, complete);
        const newItems = [...items];
        const idx = newItems.findIndex((item) => item.id === id);
        newItems[idx] = data;
        setItems(newItems);
      } catch (e) {
        console.error(e.message);
      }
    };
    completeToDo(id, complete);
  };

  const handleEditToDo = (id, description) => {
    const editToDo = async (id, description) => {
      try {
        const data = await editListItem(id, description);
        const newItems = [...items];
        const idx = newItems.findIndex((item) => item.id === id);
        newItems[idx] = data;
        setItems(newItems);
      } catch (e) {
        console.error(e.message);
      }
    };
    editToDo(id, description);
  };

  const handleDeleteToDo = (id) => {
    const deleteToDo = async (id) => {
      try {
        await deleteListItem(id);
        const newItems = [...items];
        const idx = newItems.findIndex((item) => item.id === id);
        newItems.splice(idx, 1);
        setItems(newItems);
      } catch (e) {
        console.error(e.message);
      }
    };
    deleteToDo(id);
  };

  return (
    <ItemsContext.Provider
      value={{ items, setItems, handleCompleteToDo, handleDeleteToDo, handleEditToDo }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

const useItems = () => {
  const data = useContext(ItemsContext);

  if (!data) {
    throw new Error('useItems must be wrapped in a UseProvider');
  }
  return data;
};

export { ItemsProvider, useItems };
