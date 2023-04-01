import React from 'react';
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from '@emotion/styled/macro';

import TodoList from '../../features/TodoList';

import { filteredTodoListState, selectedDateState } from '../../features/TodoList/atom';
import { isSameDay } from '../../../utils/date';
import { todoFormModalOpenState } from '../../features/TodoFormModal/atom';
import { todoStatisticsModalOpenState } from '../../features/TodoStatisticsModal/atom';

const TableData = styled.td`
  text-align: center;
  color: #C9C8CC;
  padding: 8px;
  position: relative;
`;

const DisplayDate = styled.div<{ isToday?: boolean; isSelected?: boolean; }>`
  color: ${({ isToday }) => isToday && '#F8F7FA'};
  background-color: ${({ isToday, isSelected }) => isSelected ? '#7047EB' : isToday ? '#313133' : ''};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const Container = styled.div``;

interface Props {
  date: Date;
}

const CalendarDay: React.FC<Props> = ({ date }) => {
  const today = new Date();

  const selectedDate = useRecoilValue(selectedDateState);
  const todoList = useRecoilValue(filteredTodoListState(date));

  const setSelectedDate = useSetRecoilState(selectedDateState);
  const setTodoFormModalOpen = useSetRecoilState(todoFormModalOpenState);
  const setTodoStatisticsModalOpen = useSetRecoilState(todoStatisticsModalOpenState);

  const handleTodoFormModalOpen = (d: number) => {
    setSelectedDate(new Date(selectedDate.setDate(d)));
    setTodoFormModalOpen(true);
  };

  const handleDateSelect = (d: number) => {
    setSelectedDate(new Date(selectedDate.setDate(d)));
  }

  const handleTodoStatisticsModalOpen = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event.stopPropagation();

    setTodoStatisticsModalOpen(true);
  }

  return (
    <TableData
      key={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
      align="center"
      onDoubleClick={() => handleTodoFormModalOpen(date.getDate())}
    >
      <Container>
        <DisplayDate
          isSelected={isSameDay(selectedDate, date)}
          isToday={isSameDay(date, today)}
          onClick={() => handleDateSelect(date.getDate())}
          onDoubleClick={handleTodoStatisticsModalOpen}
        >
          {date.getDate()}
        </DisplayDate>
        <TodoList
          items={todoList}
        />
      </Container>
    </TableData>
  )
}

export default CalendarDay;