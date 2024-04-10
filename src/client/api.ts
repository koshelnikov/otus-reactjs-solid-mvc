import axios from "axios";

export const getTodos = async () => axios.get('http://localhost:3000/todos')
export const createTodo = async (type: string, title: string) => axios.post('http://localhost:3000/todos', {title, type})
export const deleteTodo = async (id: number) => axios.delete(`http://localhost:3000/todos/${id}`)
export const editTodo = async (id: number, type: string) => axios.patch(`http://localhost:3000/todos/${id}`, {type})

