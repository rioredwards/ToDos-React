import { getTodos, updateTodo } from '../services/todos.js';
import { todoActions } from './todo-slice.js';

export const fetchAllTodos = () => {
  return async (dispatch) => {
    const fetchTodos = async () => {
      try {
        const response = await getTodos();
        return response;
      } catch (error) {
        console.error(error.message);
      }
    };

    const todoData = await fetchTodos();
    dispatch(todoActions.replaceTodos(todoData));
  };
};

export const sendTodoUpdate = (todo) => {
  return async () => {
    const fetchTodos = async () => {
      try {
        await updateTodo(todo);
      } catch (error) {
        console.error(error.message);
      }
    };

    await fetchTodos();
  };
};

// useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const response = await getListItems();
//         setItems(response);
//       } catch (e) {
//         console.error(e.message);
//       }
//     };
//     fetchItems();
//   }, []);

//   const handleCompleteToDo = (id, complete) => {
//     const completeToDo = async (id, complete) => {
//       try {
//         const response = await toggleListItem(id, complete);
//         const newItems = [...items];
//         const idx = newItems.findIndex((item) => item.id === id);
//         newItems[idx] = response;
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
//         const response = await editListItem(id, description);
//         const newItems = [...items];
//         const idx = newItems.findIndex((item) => item.id === id);
//         newItems[idx] = response;
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
