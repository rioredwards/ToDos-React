import { createTodo, deleteTodo, getTodos, updateTodo } from '../services/todos.js';
import { todoActions } from './todo-slice.js';

export const getAllTodosAction = () => {
  return async (dispatch) => {
    const callGet = async () => {
      try {
        const response = await getTodos();
        return response;
      } catch (error) {
        console.error(error.message);
      }
    };

    const todoData = await callGet();
    dispatch(todoActions.replaceTodos(todoData));
  };
};

export const updateTodoAction = (todo) => {
  return async () => {
    const callUpdate = async () => {
      try {
        await updateTodo(todo);
      } catch (error) {
        console.error(error.message);
      }
    };

    await callUpdate();
  };
};

export const deleteTodoAction = (id) => {
  return async (dispatch) => {
    const callDelete = async () => {
      try {
        await deleteTodo(id);
      } catch (error) {
        console.error(error.message);
      }
    };

    await callDelete();
    dispatch(todoActions.removeTodo({ id }));
  };
};

export const createTodoAction = (description) => {
  return async (dispatch) => {
    const callCreate = async () => {
      try {
        const response = await createTodo(description);
        return response;
      } catch (error) {
        console.error(error.message);
      }
    };

    const newTodo = await callCreate();

    dispatch(todoActions.addTodo(newTodo));
  };
};

// export const deleteItemThunk = (itemId) => {
//   return async (dispatch, getState) => {
//     try {
//       // Perform the delete operation using an API call or some other mechanism
//       await deleteItemFromServer(itemId);

//       // Dispatch the delete action after successful delete operation
//       dispatch(deleteItem(itemId));
//     } catch (error) {
//       // Handle errors
//       console.error('Error deleting item:', error);
//     }
//   };
// };

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
