import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import { getStringedDate } from '../util/getStringedDate';
import useDiary from '../hooks/useDiary';
import useTitle from '../hooks/useTitle';

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(id);

  useTitle(`${id}번의 일기 보기`);

  if (!curDiaryItem) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        leftChild={<Button text={'뒤로가기'} onClick={() => nav(-1)} />}
        title={title}
        rightChild={<Button text={'수정하기'} onClick={() => nav(`/edit/${id}`)} type={'POSITIVE'} />}
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;