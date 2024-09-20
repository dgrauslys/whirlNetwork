import React from "react";
import { ContentWrapper, ImageWrapper, TextWrapper, UserWrapper, MCopy } from "./styles";
import { Copy, HeaderText } from "../constants";
import { useNavigate } from 'react-router-dom';


function UserBlock({user, counter}) {
    const { id, name, imageUrl, shortCopy } = user;
    const navigate = useNavigate();
    const paddingAmount = counter % 2 !== 0 ? '25' : '0';

    const goToLocation = (location) => {
      navigate(location);
    };

    const goToMemberPage = (id) => {
      goToLocation(`/member?id=${id}`);
    };

  return (
    <UserWrapper>
        {counter % 2 !== 0 && <ImageWrapper imageUrl={imageUrl} onClick={() => goToMemberPage(id)} />}
        <ContentWrapper paddingAmount={paddingAmount}>
            <HeaderText onClick={() => goToMemberPage(id)}>{name} {counter}</HeaderText>
            <TextWrapper><MCopy>{shortCopy}</MCopy></TextWrapper>
        </ContentWrapper>
        {counter % 2 == 0 && <ImageWrapper imageUrl={imageUrl} />}


    </UserWrapper>

  );
}

export default UserBlock;