import styles from "./Carouseol.module.css"; // CSS 모듈화
import data from "../datas/carouselData";
import { useState } from "react";

const Carousel = () => {
  const [selectedBannerId, setSelectedBannerId] = useState(0); // 동적UI인 배너의 초기상태 할당
  const handleBtnClick = (id) => {
    setSelectedBannerId(id);
  };
  return (
    <div className={styles.mainContainer}>
      {data.map(
        (
          item //데이터 개수에 따라 자동 생성
        ) => (
          <a
            key={item.id}
            className={`${styles.banner} ${
              selectedBannerId !== item.id ? styles.hide : ""
            }`} //두 번째 class 모듈화 위해 템플릿리터럴 사용
            href="#골프정보" //수정 예정
          >
            <img src={item.imageUrl} alt={item.title} />
          </a>
        )
      )}
      <div className={styles.btnContainer}>
        {data.map(({ id }) => (
          <button
            key={id}
            className={`${styles.carouselBtn} ${
              selectedBannerId === id ? styles.active : ""
            }`}
            onClick={() => handleBtnClick(id)}
          >
            •
          </button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
