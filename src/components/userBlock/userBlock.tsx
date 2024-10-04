import React, { useContext } from "react";
import { DesktopContext } from "../../hooks/contexts";
import { ContentWrapper, ImageWrapper, TextWrapper, UserWrapper, MCopy } from "./styles";
import { Copy, HeaderText } from "../constants";
import { useNavigate } from 'react-router-dom';
import UserMobileBlock from "./userMobileBlock";


function UserBlock({user, counter}) {
    const { id, name, imageUrl, shortCopy } = user;
    const isDesktop = useContext(DesktopContext);
    const navigate = useNavigate();
    const paddingAmount = counter % 2 !== 0 ? 25 : 0;

    const goToLocation = (location) => {
      navigate(location);
    };

    const goToMemberPage = (id) => {
      goToLocation(`/whirlNetwork/member/${id}`);
    };

  return (
    <>
    {isDesktop ? (
      <UserWrapper>
      {counter % 2 !== 0 && <ImageWrapper $isEven={false} $imageUrl={imageUrl} onClick={() => goToMemberPage(id)} />}
      <ContentWrapper $paddingAmount={paddingAmount}>
          <HeaderText onClick={() => goToMemberPage(id)}>{name}</HeaderText>
          <TextWrapper><MCopy>{shortCopy}</MCopy></TextWrapper>
      </ContentWrapper>
      {counter % 2 == 0 && <ImageWrapper $isEven={true} $imageUrl={imageUrl} onClick={() => goToMemberPage(id)} />}
  </UserWrapper>
    ) : (
      <UserMobileBlock user={user} />
    )}
</>

  );
}

export default UserBlock;