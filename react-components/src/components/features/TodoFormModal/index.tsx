import React, { useRef, useState } from 'react';
import styled from '@emotion/styled/macro';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil'
import { v4 as uuidv4} from 'uuid';

import { todoFormModalOpenState } from './atom';
import Modal from '../../common/Modal/Modal';
import { selectedDateState, todoListState } from '../TodoList/atom';
import { getSimpleDateFormat } from '../../../utils/date';

const Container = styled.div`
  width: 100vw;
  max-width: 386px;
  padding: 8px;
`;

const Date = styled.small`
  display: block;
  color: #C9C8CC;
`;

const InputTodo = styled.input`
  padding: 16px 24px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  color: #C9C8CC;
  caret-color: #C9C8CC;
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181A;
  ${Date} + ${InputTodo} {
    margin-top: 24px;
  }
;
`;

const TodoFormModal: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [todo, setTodo] = useState<string>('');

  const selectedDate = useRecoilValue(selectedDateState);
  const todoList = useRecoilValue(todoListState);

  const [isOpen, setIsOpen] = useRecoilState(todoFormModalOpenState);

  const reset = () => {
    setTodo('');
    inputRef.current?.focus();
  }

  const handleClose = () => setIsOpen(false);

  const addTodo = useRecoilCallback(({ snapshot, set }) => () => {
    const todoList = snapshot.getLoadable(todoListState).getValue();

    const newTodo = { id: uuidv4(), content: todo, done: false, date: selectedDate };

    set(todoListState, [...todoList, newTodo]);
  }, [todo, selectedDate, todoList]);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
      reset();
      handleClose();
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Container>
        <Card>
          <Date>{getSimpleDateFormat(selectedDate)}</Date>
          <InputTodo ref={inputRef} placeholder="새로운 이벤트" onKeyPress={handleKeyPress} value={todo} onChange={handleChange} />
        </Card>
      </Container>
    </Modal>
  )
}

export default TodoFormModal;
