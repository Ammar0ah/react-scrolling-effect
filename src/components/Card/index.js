import React, { useEffect, useState } from "react";
import * as S from "./styles";

const Card = ({
  url,
  title,
  index,
  activeIndex,
  activateItem,
}) => {
  const ref = React.createRef();

  const handleClick = () => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      activateItem(index);
  };

  return (
    <S.Card
      ref={ref}
      onClick={handleClick}
      active={activeIndex === index}
    >
      <S.Title>{title}</S.Title>
      <S.Image src={url} />
    </S.Card>
  );
};

export default Card;
