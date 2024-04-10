import {useEffect, useState} from "react";
import {createTodo, deleteTodo, editTodo, getTodos} from "src/client/api";

export const useTodos = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
            .then(({data}) => setTodos(data));
    }, []);

    return {
        todos,
        createTodo: () => {
            createTodo("New Todo Item", "allow").then(() => getTodos().then(({data}) => setTodos(data)))
        },
        editTodo: (id: number, edit: string) => {
            editTodo(id, edit).then(() => getTodos().then(({data}) => setTodos(data)))
        },
        deleteTodo: (id: number) => {
            deleteTodo(id).then(() => getTodos().then(({data}) => setTodos(data)))
        },
    }
}