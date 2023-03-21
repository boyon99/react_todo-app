import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {

  const [value, setValue] = useState('')
  // 한 번 함수를 만들고 재사용할 수 있도록 구현
  const onChange = useCallback(e => {
    console.log("onChange")
    setValue(e.target.value)
  }, [])

  // 전송하기
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue("")
      // submit 이벤트는 브라우저에서 새로고침을 발생시키는데 이를 방지하기 위해 함수 호출
      e.preventDefault()
    }, [onInsert, value]
  )
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;