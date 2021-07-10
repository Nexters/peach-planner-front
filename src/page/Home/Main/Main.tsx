import { Image, DivisionBox, Title, FlexDiv, TopBox, Content, Tag, Footer } from './MainView';
import planner1 from '../../../image/planner1.png';
import planner2 from '../../../image/planner2.png';
import planner3 from '../../../image/planner3.png';
import snap1 from '../../../image/snap1.png';
import snap2 from '../../../image/snap2.png';
import snap3 from '../../../image/snap3.png';
import snap4 from '../../../image/snap4.png';
import logo from '../../../image/logo.svg';

const Main = () => {
  return (
    <FlexDiv margin={'0'} direction="column">
      <TopBox>
        <FlexDiv margin={'97px 0 0 73px'} justify="flex-start" align="start" direction="column">
          <Title height={'72px'} width={'271px'} fontSize={'24px'} lineHeight={'36px'} margin={'0 0 14px 0'}>
            나와 맞는 웨딩플래너, <br></br>피치플래너에서 찾아보세요
          </Title>
          <Content height={'44px'} width={'351px'} color={'#343A40'} fontSize={'14px'} lineHeight={'22px'}>
            한번뿐인 결혼식,믿을 수 있는 웨딩플래너를 찾기 힘드신가요? <br></br>피치플래너에서 검증된 웨딩플래너를
            찾아보세요.
          </Content>
        </FlexDiv>
      </TopBox>
      <FlexDiv width={'1100px'} margin={'40px 0 0 0'}>
        <DivisionBox marginBottom={8}>
          <Title height={'29px'} width={'97px'} fontSize={'20px'} lineHeight={'29px'}>
            신규 플래너
          </Title>
        </DivisionBox>
      </FlexDiv>
      <FlexDiv width={'1100px'} margin={'0'} direction="column">
        <DivisionBox marginBottom={27}>
          <Title height={'29px'} width={'97px'} fontSize={'20px'} lineHeight={'29px'}>
            인기 플래너
          </Title>
        </DivisionBox>
        <FlexDiv margin={'0'} justify="flex-start" direction="row">
          <Image height={'258px'} width={'458px'} margin={'0 28px 0 0'} src={planner2}></Image>
          <Image height={'258px'} width={'458px'} margin={'0 28px 0 0'} src={planner3}></Image>
          <Image height={'258px'} width={'458px'} margin={'0 28px 0 0'} src={planner1}></Image>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv width={'1100px'} margin={'64px 0 0 0'} direction="row">
        <DivisionBox marginBottom={8}>
          <Title height={'29px'} width={'97px'} fontSize={'20px'} lineHeight={'29px'}>
            추천 플래너
          </Title>
        </DivisionBox>
      </FlexDiv>
      <FlexDiv width={'1100px'} margin={'40px 0 0 0'} direction="column">
        <DivisionBox marginBottom={8}>
          <Title height={'29px'} width={'97px'} fontSize={'20px'} lineHeight={'29px'}>
            추천 포스트
          </Title>
        </DivisionBox>
        <FlexDiv margin={'0 0 120px 0'} justify="space-between" align="start">
          <FlexDiv margin={'0'} width={'646px'} direction="column">
            <Image height={'385px'} width={'646px'} margin={'0 28px 0 0'} src={snap1}></Image>
            <Title margin={'14px 0 11px 0'} height={'41px'} width={'646px'} fontSize={'28px'} lineHeight={'41px'}>
              자연을 담는 사진가
            </Title>
            <Content height={'20px'} width={'646px'} color={'#495057'} fontSize={'14px'} lineHeight={'20px'}>
              상쾌한 여름, 김상호 작가의 제주도 스냅일기를 소개합니다.
            </Content>
          </FlexDiv>
          <FlexDiv margin={'0'} width={'414px'} justify="start" align="start" direction="column">
            <FlexDiv margin={'0 0 56px 0'} width={'414px'} justify="space-between" align="start" direction="row">
              <FlexDiv margin={'0'} justify-content="flex-start" align="start" direction="column">
                <Title height={'27px'} width={'254px'} fontSize={'20px'} lineHeight={'29px'}>
                  제주도에서 함께한 순간들
                </Title>
                <Content height={'40px'} width={'254px'} color={'#495057'} fontSize={'14px'} lineHeight={'20px'}>
                  노을바다를 담은 제주도에서 웨딩촬영 현장을 공개합니다.
                </Content>
                <FlexDiv margin={'0'} width={'auto'} direction="row">
                  <Tag>
                    <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
                      #제주도
                    </Content>
                  </Tag>
                  <Tag>
                    <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
                      #노을
                    </Content>
                  </Tag>
                </FlexDiv>
              </FlexDiv>
              <Image height={'120px'} width={'120px'} margin={'0'} src={snap2}></Image>
            </FlexDiv>
            <FlexDiv margin={'0 0 56px 0'} width={'414px'} justify="space-between" align="start" direction="row">
              <FlexDiv margin={'0'} justify-content="flex-start" align="start" direction="column">
                <Title height={'27px'} width={'254px'} fontSize={'20px'} lineHeight={'29px'}>
                  제주도에서 함께한 순간들
                </Title>
                <Content height={'40px'} width={'254px'} color={'#495057'} fontSize={'14px'} lineHeight={'20px'}>
                  노을바다를 담은 제주도에서 웨딩촬영 현장을 공개합니다.
                </Content>
                <FlexDiv margin={'0'} width={'auto'} direction="row">
                  <Tag>
                    <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
                      #제주도
                    </Content>
                  </Tag>
                  <Tag>
                    <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
                      #노을
                    </Content>
                  </Tag>
                </FlexDiv>
              </FlexDiv>
              <Image height={'120px'} width={'120px'} margin={'0'} src={snap3}></Image>
            </FlexDiv>
            <FlexDiv margin={'0'} width={'414px'} justify="space-between" align="start" direction="row">
              <FlexDiv margin={'0'} justify-content="flex-start" align="start" direction="column">
                <Title height={'27px'} width={'254px'} fontSize={'20px'} lineHeight={'29px'}>
                  제주도에서 함께한 순간들
                </Title>
                <Content height={'40px'} width={'254px'} color={'#495057'} fontSize={'14px'} lineHeight={'20px'}>
                  노을바다를 담은 제주도에서 웨딩촬영 현장을 공개합니다.
                </Content>
                <FlexDiv margin={'0'} width={'auto'} direction="row">
                  <Tag>
                    <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
                      #제주도
                    </Content>
                  </Tag>
                  <Tag>
                    <Content height={'18px'} width={'auto'} color={'#000000'} fontSize={'12px'} lineHeight={'18px'}>
                      #노을
                    </Content>
                  </Tag>
                </FlexDiv>
              </FlexDiv>
              <Image height={'120px'} width={'120px'} margin={'0'} src={snap4}></Image>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
      <Footer>
        <FlexDiv margin={'36px 170px 0 170px'} align="start" direction="column">
          <Image height={'24.55px'} width={'140.58px'} margin={'0'} src={logo}></Image>
          <FlexDiv margin={'37px 0 0 0'} justify="space-between" align="start" direction="row">
            <FlexDiv margin={'0'} justify="start" align="start" direction="row">
              <Content height={'22px'} width={'52px'} color={'#343A40'} fontSize={'14px'} lineHeight={'22px'}>
                이용약관
              </Content>
              <Content height={'22px'} width={'102px'} color={'#343A40'} fontSize={'14px'} lineHeight={'22px'}>
                개인정보처리방침
              </Content>
            </FlexDiv>
            <FlexDiv margin={'0'} justify="start" align="start" direction="row">
              <Content height={'22px'} width={'278px'} color={'#495057'} fontSize={'5px'} lineHeight={'22px'}>
                COPYRIGHT© Peachplanner ALL RIGHT RESERVED
              </Content>
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </Footer>
    </FlexDiv>
  );
};

export default Main;
