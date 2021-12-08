import styled from 'styled-components';
import UserPageSideMenu from '../user/mypage/UserPageSideMenu';

const UserMyPage = () => {
  return (
    <Container>
      <InnerContainer>
        <UserPageSideMenu></UserPageSideMenu>
        <ContentContainer></ContentContainer>
      </InnerContainer>
    </Container>
  );
};

export default UserMyPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  direction: row;
`;
