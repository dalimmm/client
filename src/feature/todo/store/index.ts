import { create } from 'zustand';

interface TodoState {
  todos: Todo[];
}

export const todoStore = create<TodoState>(() => ({
  todos: [],
}));
