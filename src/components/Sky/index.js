import React, {Fragment} from "react";

import * as S from "./styles";

const Sky = ({ stars = 100, renderTitle,  background="black", color="white", fixed }) => {
  const s = new Array(stars).fill(true);
  return (
    <Fragment>
      <S.Sky background={background} fixed={fixed}>
        {s.map((star, index) => (
          <S.Star
            key={index}
            left={`${100 * Math.random()}%`}
            top={`${100 * Math.random()}%`}
            dimension={`${3 * Math.random()}px`}
            color={color}
          />
        ))}
        {renderTitle && typeof renderTitle === 'function' && renderTitle()}
      </S.Sky>
      {fixed && <S.Space></S.Space>}
    </Fragment>
  );
};

export default Sky