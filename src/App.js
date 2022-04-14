import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Button } from 'react-bootstrap';
import './App.css';
function App() {
  let [input_val, setInputVal] = useState('');
  let [list, setList] = useState(['코딩하기', '밥을먹기', '술을먹기']);
  let [confirmButton, setConfirmButton] = useState(false);
  let [deleteButton, setDeleteButton] = useState(false);
  const register = () => {
    let new_list = [...list];
    new_list.push(input_val);
    setList(new_list);
  };

  // 확인버튼 눌렀을때 하나씩 없어지는거 구현
  const confrimList = (i, n) => {
    confirmButton(true);
    let new_list = list.filter((a) => {});
    new_list = [...new_list];
    setList(new_list);
  };
  // 삭제버튼 눌렀을때 하나씩 없어지는거 구현
  const deleteList = (i, n) => {
    deleteButton(true);
    let new_list = list.splice(i, n + 2);
    new_list = [...new_list];
    setList(new_list);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>Todo List</h1>
        <h3>Add Todo</h3>
        <div className='row'>
          <input
            placeholder='할 일을 입력하시오'
            className='col-6 mt-3 input'
            type='text'
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
          />
        </div>
        <div className='row'>
          <button className='mt-3 col-1' type='submit' onClick={register}>
            등록하기
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='row mt-5'>
          <ListGroup as='ol' numbered>
            {list.map((a, i) => {
              return (
                <ListGroup.Item className='list col-11' as='li' key={i}>
                  {a}
                  <Button
                    onClick={confrimList}
                    className='confirm col-2'
                    variant='primary'
                  >
                    확인
                  </Button>{' '}
                  <Button
                    onClick={deleteList}
                    className='delete col-2'
                    variant='danger'
                  >
                    삭제
                  </Button>{' '}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}

export default App;
