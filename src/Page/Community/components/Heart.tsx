import React, { useState, useEffect } from 'react';
import styles from '../scss/community.module.scss';
import fullHeart from '../image/fullHeart.png';
import emptyHeart from '../image/emptyHeart.png';
import { likesComment, unLikeComment } from '../../../apis/api/community.api';

interface HeartProps {
  id: number;
  isLiked: boolean;
  likeCount: number;
  type: 'comment' | 'video';
  onToggleLike: (id: number, isLiked: boolean) => void;
}

const Heart: React.FC<HeartProps> = ({
  id,
  isLiked,
  likeCount,
  onToggleLike,
}) => {
  const [isHeart, setHeart] = useState<boolean>(isLiked);
  const [isCnt, setCnt] = useState<number>(likeCount);

  useEffect(() => {
    // Props가 변경될 때 상태를 업데이트
    setHeart(isLiked);
    setCnt(likeCount);
  }, [isLiked, likeCount]);

  const toggleHeart = async () => {
    try {
      // 좋아요 상태 변경
      if (isHeart) {
        await unLikeComment(id);

        onToggleLike(id, false);
      } else {
        await likesComment(id);

        onToggleLike(id, true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isHeart ? (
        <img
          src={fullHeart}
          alt="liked"
          onClick={toggleHeart}
          className={styles.onHeart}
        />
      ) : (
        <img src={emptyHeart} alt="not liked" onClick={toggleHeart} />
      )}
      <div className={styles.cnt}>{isCnt}</div>
    </>
  );
};

export default Heart;
