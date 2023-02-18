import { getTodos } from '../services/items.js';
import { todoActions } from './todo-slice.js';

export const fetchTodos = () => {
  return async (dispatch) => {
    const fetchTodos = async () => {
      const data = await getTodos();
      return data;
    };

    try {
      const todoData = await fetchTodos();
      dispatch(todoActions.replaceTodos(todoData));
    } catch (error) {
      console.error(error.message);
    }
  };
};

// useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const data = await getListItems();
//         setItems(data);
//       } catch (e) {
//         console.error(e.message);
//       }
//     };
//     fetchItems();
//   }, []);

//   const handleCompleteToDo = (id, complete) => {
//     const completeToDo = async (id, complete) => {
//       try {
//         const data = await toggleListItem(id, complete);
//         const newItems = [...items];
//         const idx = newItems.findIndex((item) => item.id === id);
//         newItems[idx] = data;
//         setItems(newItems);
//       } catch (e) {
//         console.error(e.message);
//       }
//     };
//     completeToDo(id, complete);
//   };

//   const handleEditToDo = (id, description) => {
//     const editToDo = async (id, description) => {
//       try {
//         const data = await editListItem(id, description);
//         const newItems = [...items];
//         const idx = newItems.findIndex((item) => item.id === id);
//         newItems[idx] = data;
//         setItems(newItems);
//       } catch (e) {
//         console.error(e.message);
//       }
//     };
//     editToDo(id, description);
//   };

//   const handleDeleteToDo = (id) => {
//     const deleteToDo = async (id) => {
//       try {
//         await deleteListItem(id);
//         const newItems = [...items];
//         const idx = newItems.findIndex((item) => item.id === id);
//         newItems.splice(idx, 1);
//         setItems(newItems);
//       } catch (e) {
//         console.error(e.message);
//       }
//     };
//     deleteToDo(id);
//   };
