import styled from 'styled-components';
import { FlexDiv } from 'lib/pages/components/style/style';
// import background from 'public/assets/img/img_background.png';
import background from 'public/banner.png';
import background2 from 'public/og_img.png';
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default () => {
  return (
    <Carousel width={ 1100 } autoPlay infiniteLoop interval={ 5000 } showStatus={false}>
      <Link href="https://blog.naver.com/peachplanner/222637086412">
        <a target={ '_blank' }>
          <TopBox>
            <Img src={ background.src } />
          </TopBox>
        </a>
      </Link>
      <Link href="/">
        <a target={ '_blank' }>
          {/* TODO:: Modify it to image */}
          <TopBox>
            <Img src={ background2.src } style={{position:'absolute', left: 0}}/>
            <FlexDiv margin={ '97px 0 0 73px' } justify="flex-start" align="start" direction="column" style={{position:'absolute'}}>
              <Title>
                나와 맞는 웨딩플래너, <br></br>피치플래너에서 찾아보세요
              </Title>
              <Content>
                한번뿐인 결혼식,믿을 수 있는 웨딩플래너를 찾기 힘드신가요? <br></br>피치플래너에서 검증된 웨딩플래너를
                찾아보세요.
              </Content>
            </FlexDiv>
          </TopBox>
        </a>
      </Link>
    </Carousel>
  );
};

const Img = styled.img`
  object-fit: fill;
`;

const TopBox = styled.div`
  height: 320px;
  width: 1100px;
  border-radius: 10px;
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
