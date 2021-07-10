import React from 'react';
import styled from 'styled-components';
import PButton from './PButton';

const UserInfoIcon = ({ title, detail, buttonText }) => {
  return (
    <Container>
      이미지
      <InnerContainer>
        <Title detail={detail}>{title}</Title>
        {detail && <Detail>{detail}</Detail>}
        {buttonText && (
          <PButton fontSize="12px" height="31px" width="83px" padding="5.5px">
            {buttonText}
          </PButton>
        )}
      </InnerContainer>
    </Container>
  );
};

export default UserInfoIcon;

const Container = styled.div`
  margin: 13px 0 16px 0;
  display: flex;
`;

const InnerContainer = styled.div`
  margin-left: 17px;
`;

const Title = styled.div`
  margin-bottom: ${({ detail }) => (detail ? '5px' : '10.5px')};
  font-size: 16px;
`;

const Detail = styled.div`
  font-size: 16px;
  color: #495057;
`;
