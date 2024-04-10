import axios from "axios";

export const getTodos = async () => axios.get('http://localhost:3000/todos')
export const createTodo = async (title: string, edit: string) => axios.post('http://localhost:3000/todos', {title, edit})
export const deleteTodo = async (id: number) => axios.delete(`http://localhost:3000/todos/${id}`)
export const editTodo = async (id: number, edit: string) => axios.patch(`http://localhost:3000/todos/${id}`, {edit})

