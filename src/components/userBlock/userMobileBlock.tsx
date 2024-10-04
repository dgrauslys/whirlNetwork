import React from "react";
import { ContentWrapper, ImageWrapper, TextWrapper, UserWrapper, MCopy, UserMobileWrapper, ImageMobileWrapper, TextMobileWrapper } from "./styles";
import { Copy, HeaderText } from "../constants";
import { useNavigate } from 'react-router-dom';
import { baseUrl } from "../../constants";


function UserMobileBlock({user}) {
    const { id, name, imageUrl, shortCopy } = user;
    const navigate = useNavigate();
    const paddingAmount = 0;

    const goToLocation = (location) => {
      navigate(location);
    };

    const goToMemberPage = (id) => {
      goToLocation(`${baseUrl}member/${id}`);
    };

  return (
    <UserMobileWrapper>
        <ImageMobileWrapper $imageUrl={imageUrl} onClick={() => goToMemberPage(id)} $isEven={false} />
        <ContentWrapper $paddingAmount={paddingAmount}>
          <HeaderText align="center" onClick={() => goToMemberPage(id)}>{name}</HeaderText>
          <TextMobileWrapper><MCopy>{shortCopy}</MCopy></TextMobileWrapper>
      </ContentWrapper>
    </UserMobileWrapper>
  );
}

export default UserMobileBlock;