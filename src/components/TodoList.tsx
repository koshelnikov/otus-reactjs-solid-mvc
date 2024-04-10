import React from "react";
import {Button} from "src/components/button/button";
import {ToDoItem} from "src/components/ToDoItem/ToDoItem";
import {ToDoItemEditable} from "src/components/ToDoItemEditable/ToDoItemEditable";
import {useTodos} from "src/hooks/useTodos";

export const TodoList = () => {
    const {todos, createTodo, editTodo, deleteTodo} = useTodos();

    return (
        <div>
            <h1>My Todos:</h1>

            <Button
                icon={(
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                            stroke="#1C274C" stroke-width="2"/>
                        <path d="M14 11H11M11 11H8M11 11V8M11 11V14" stroke="#1C274C" stroke-width="2"
                              stroke-linecap="round"/>
                    </svg>)}
                onClick={() => createTodo()}
            />

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.edit === 'allow' && <ToDoItemEditable
                            title={todo.title}
                            onRemove={() => {deleteTodo(todo.id)}}
                            onEdit={() => {editTodo(todo.id)}}
                            editName={'Edit'}
                        />
                        }

                        {todo.edit === 'disallow' && <ToDoItem
                            title={todo.title}
                            onRemove={() => {deleteTodo(todo.id)}}
                        />
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}