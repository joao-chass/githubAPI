import React from "react";
import * as S from "./styled";

function Profile() {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/36828679?v=4"
        alt="avatar of user"
      />
      <S.WrapperInfosUser>
        <div>
          <h1>jonh</h1>
          <S.WrapperUserName>
            <h3>UserName:</h3>
            <a href="#" target="_blank" rel="noreffer">
              joao-chas
            </a>
          </S.WrapperUserName>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Flowers</h4>
            <span>5</span>
          </div>
          <div>
            <h4>starreds</h4>
            <span>5</span>
          </div>
          <div>
            <h4>Floweings</h4>
            <span>5</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfosUser>
    </S.Wrapper>
  );
}

export default Profile;
