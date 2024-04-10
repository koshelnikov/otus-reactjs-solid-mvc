import {useEffect, useState} from "react";
import {createTodo, editTodo, getTodos} from "src/client/api";

export const useTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
            .then(({data}) => setTodos(data));
    }, []);

    return {
        todos,
        createTodo: () => {
            createTodo('solid', "New Todo Item").then(() => getTodos().then(({data}) => setTodos(data)))
        },
        editTodo: (id: number) => {},
        deleteTodo: (id: number) => {}
    }
}