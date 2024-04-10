import React from "react";
import {useTodos} from "src/hooks/useTodos";
import {ToDoListView} from "src/components/ToDoList/ToDoListView";

export const TodoList = () => {
    const {todos, createTodo, editTodo, deleteTodo} = useTodos();

    return (
        <ToDoListView todos={todos} onCreate={() => createTodo()} onEdit={(id, edit) => editTodo(id, edit)}
                      onRemove={(id) => deleteTodo(id)}
        />
    )
}