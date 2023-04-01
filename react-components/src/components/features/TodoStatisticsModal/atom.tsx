import { atom, atomFamily, selectorFamily } from 'recoil';
import { filteredTodoListState } from '../TodoList/atom';

export const todoStatisticsModalOpenState = atom<boolean>({
  key: 'todoStatisticsModalOpenState',
  default: false
});

export const todoStatisticsState = atomFamily<{ total: number, done: number }, Date>({
  key: 'todoStatisticsState',
  default: selectorFamily({
    key: 'todoStatisticsState/default',
    get: (selectedDate) => ({ get }) => {
      const todoList = get(filteredTodoListState(selectedDate));

      return {
        total: todoList.length,
        done: todoList.filter(todo => todo.done).length || 0
      }
    }
  })
});
