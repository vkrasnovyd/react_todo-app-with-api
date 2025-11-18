import React, { createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { TodoItem } from '../TodoItem';
import { Todo } from '../../types/Todo';
import { StateSetter } from '../../types/StateSetter';

interface Props {
  visibleTodos: Todo[];
  setTodos: StateSetter<Todo[]>;
  setError: (msg: string, timeout?: number) => void;
}

export const TodoList: React.FC<Props> = ({
  visibleTodos,
  setTodos,
  setError,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      <TransitionGroup>
        {visibleTodos.map((todo: Todo) => {
          const nodeRef = createRef<HTMLDivElement>();

          return (
            <CSSTransition
              key={todo.id}
              timeout={200}
              classNames="item"
              nodeRef={nodeRef}
            >
              <TodoItem
                todo={todo}
                nodeRef={nodeRef}
                setTodos={setTodos}
                setError={setError}
              />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </section>
  );
};
