import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

interface SignupDetailTemplateProps {
  title: String;
  children: ReactNode;
}

export const SignupDetailTemplate: FC<SignupDetailTemplateProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{children}</Body>
    </Container>
  );
};

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  font-size: 18px;
  color: #212529;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Body = styled.div`
  color: #495057;
`;
