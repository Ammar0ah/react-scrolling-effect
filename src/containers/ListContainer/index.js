import React, { useEffect, useLayoutEffect, useState } from "react";
import Card from "../../components/Card";
import * as S from "./styles";

Array.prototype.repeat = function (what, L) {
  while (L) this[--L] = what;
  return this;
};
const ListContainer = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const activate = (index) => {
    setActiveIndex(index);
  };

  return (
    <S.Container>
      {data.map((item, ind) => {
        return (
          <Card
            activateItem={activate}
            index={ind}
            activeIndex={activeIndex}
            key={item.id}
            url={item.url}
            title={item.title}
          />
        );
      })}
    </S.Container>
  );
};

export default ListContainer;
