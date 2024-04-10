import React, {useEffect, useState} from "react";
import axios from "axios";

export const TodoList = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/todos')
            .then(({data}) => setTodos(data));
    }, []);

    return (
        <div>
            <h1>My Todos:</h1>
            <button onClick={() => {
                axios.post(`http://localhost:3000/todos/`, {
                    edit: 'allow',
                    title: "New Todo Item"
                })
                    .then(() => {
                        axios.get('http://localhost:3000/todos')
                            .then(({data}) => setTodos(data));
                    });
            }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z" stroke="#1C274C" stroke-width="2"/>
                    <path d="M14 11H11M11 11H8M11 11V8M11 11V14" stroke="#1C274C" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.title}</span>
                        {todo.edit === 'allow' && (
                            <>
                                <button onClick={() => {
                                    axios.patch(`http://localhost:3000/todos/${todo.id}`, {edit: 'disallow'})
                                        .then(() => {
                                            axios.get('http://localhost:3000/todos')
                                                .then(({data}) => setTodos(data));
                                        });
                                }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21 21H12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>Disallow</span></button>
                            </>
                        )}

                        <button onClick={() => {
                            axios.delete(`http://localhost:3000/todos/${todo.id}`)
                                .then(() => {
                                    axios.get('http://localhost:3000/todos')
                                        .then(({data}) => setTodos(data));
                                });
                        }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0004 9.5L17.0004 14.5M17.0004 9.5L12.0004 14.5M4.50823 13.9546L7.43966 17.7546C7.79218 18.2115 7.96843 18.44 8.18975 18.6047C8.38579 18.7505 8.6069 18.8592 8.84212 18.9253C9.10766 19 9.39623 19 9.97336 19H17.8004C18.9205 19 19.4806 19 19.9084 18.782C20.2847 18.5903 20.5907 18.2843 20.7824 17.908C21.0004 17.4802 21.0004 16.9201 21.0004 15.8V8.2C21.0004 7.0799 21.0004 6.51984 20.7824 6.09202C20.5907 5.71569 20.2847 5.40973 19.9084 5.21799C19.4806 5 18.9205 5 17.8004 5H9.97336C9.39623 5 9.10766 5 8.84212 5.07467C8.6069 5.14081 8.38579 5.2495 8.18975 5.39534C7.96843 5.55998 7.79218 5.78846 7.43966 6.24543L4.50823 10.0454C3.96863 10.7449 3.69883 11.0947 3.59505 11.4804C3.50347 11.8207 3.50347 12.1793 3.59505 12.5196C3.69883 12.9053 3.96863 13.2551 4.50823 13.9546Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </button>
                    </li>
                ))}
            </ul>


        </div>
    )
}