import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import { DiaryDispatchContext } from '../App';
import useDiary from '../hooks/useDiary';
import useTitle from '../hooks/useTitle';

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  useTitle(`${id}번 일기 수정하기`);
  const curDiaryItem = useDiary(id);

  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요?')) {
      onDelete(id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(
        id,
        new Date(input.createdDate).getTime(),
        input.emotionId,
        input.content
      );
      nav('/', { replace: true });
    }
  };

  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      <Header
        leftChild={<Button text={'뒤로가기'} onClick={() => nav(-1)} />}
        title={'일기 수정하기'}
        rightChild={<Button text={'삭제하기'} onClick={onClickDelete} type={'NEGATIVE'} />}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;