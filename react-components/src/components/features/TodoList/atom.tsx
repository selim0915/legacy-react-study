import { atom, atomFamily, selectorFamily } from 'recoil';
import { isSameDay } from '../../../utils/date';

export interface Todo {
  id: string;
  content: string;
  done: boolean;
  date: Date;
}

export const todoListState = atom<Array<Todo>>({ // 할 일 목록
  key: 'todoListState',
  default: [],
});

export const selectedDateState = atom<Date>({ // 선택한 날짜
  key: 'selectedDateState',
  default: new Date(),
});

export const selectedTodoState = atom<Todo | null>({ // 선택한 할 일
  key: 'selectedTodoState',
  default: null,
});

export const filteredTodoListState = atomFamily<Array<Todo>, Date>({ // 선택한 날짜의 할 일 목록
  key: 'filteredTodoListState',
  default: selectorFamily({
    key: 'filteredTodoListState/default',
    get: (selectedDate) => ({ get }) => {
      const todoList = get(todoListState);

      return todoList.filter(todo => isSameDay(todo.date, selectedDate));
    }
  })
});