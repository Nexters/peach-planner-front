import styled from 'styled-components';
import { FlexDiv } from 'lib/pages/components/style/style';
// import background from 'public/assets/img/img_background.png';
import background from 'public/banner.png';
import Link from 'next/link';

export default () => {
  return (
    <Link href="https://blog.naver.com/peachplanner/222637086412">
      <a target={'_blank'}>
        <TopBox>
          {/* <FlexDiv margin={'97px 0 0 73px'} justify="flex-start" align="start" direction="column">
        <Title>
          나와 맞는 웨딩플래너, <br></br>피치플래너에서 찾아보세요
        </Title>
        <Content>
          한번뿐인 결혼식,믿을 수 있는 웨딩플래너를 찾기 힘드신가요? <br></br>피치플래너에서 검증된 웨딩플래너를
          찾아보세요.
        </Content>
      </FlexDiv> */}
        </TopBox>
      </a>
    </Link>
  );
};

const TopBox = styled.div`
  height: 320px;
  width: 1100px;
  border-radius: 10px;
  background-image: url(${background.src});
`;

const Title = styled.div`
  height: 72px;
  width: auto;
  color: #000000;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 36px;
  margin: 0 0 14px 0;
`;

const Content = styled.span`
  height: 44px;
  width: auto;
  color: #343a40;
  font-size: 14px;
  line-height: 22px;
`;
