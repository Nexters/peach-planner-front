import React from 'react';
import styled from 'styled-components';

const PartnerItem = ({ data }) => {
  return (
    <Container>
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs33kicMrwTO3bQTdskuUlvJRK9JAgmaGjZw&usqp=CAU" />
      <Title>{data.name}</Title>
      <Detail>{data.location}</Detail>
    </Container>
  );
};

export default PartnerItem;

const Container = styled.div`
  flex: 1;
`;

const Image = styled.img`
  border-radius: 10px;
  width: 160px;
  height: 160px;
`;

const Title = styled.div`
  margin-top: 8px;
  font-size: 13px;
`;

const Detail = styled.div`
  font-size: 12px;
  color: #495057;
`;
