import styled from 'styled-components';
import { FlexDiv } from '../../../component/style/style';
import snap1 from './dummy/snap1.png';
import snap2 from './dummy/snap2.png';
import snap3 from './dummy/snap3.png';
import snap4 from './dummy/snap4.png';
import SmallRecommendPost from './SmallRecommendPost';

const RecommendPost = () => {
  return (
    <FlexDiv margin={'40px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 8px 0'}>
        <Title>추천 포스트</Title>
      </FlexDiv>
      <FlexDiv margin={'0 0 0px 0'} justify="flex-start" align="start">
        <FlexDiv margin={'0'} justify="flex-start" align="start" direction="column">
          <Image src={snap1}></Image>
          <PostTitle>자연을 담는 사진가</PostTitle>
          <PostContent>상쾌한 여름, 김상호 작가의 제주도 스냅일기를 소개합니다.</PostContent>
        </FlexDiv>
        <FlexDiv margin={'0'} width={'414px'} justify="start" align="start" direction="column">
          <SmallRecommendPost
            title="제주도에서 함께한 순간들"
            content="노을바다를 담은 제주도에서 웨딩촬영 현장을 공개합니다."
            img={snap2}
            tag={['#제주도', '#노을']}
          ></SmallRecommendPost>
          <SmallRecommendPost
            title="알면서도 모르는 곳, 올림픽 공원"
            content="올림픽 공원, 자주 가보셨나요? 웨딩 촬영 장소로도 좋은 올림픽 공원을 소개합니다."
            img={snap3}
            tag={['#올림픽 공원', '#서울']}
          ></SmallRecommendPost>
          <SmallRecommendPost
            title="손꼽히는 촬영 장소 5곳"
            content="흔하지 않은 장소를 찾고계신가요? 대한민국 웨딩촬영 명소 5곳을 소개합니다."
            img={snap4}
            tag={['#제주도', '#핫 플레이스']}
          ></SmallRecommendPost>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};

export default RecommendPost;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 385px;
  width: 646px;
  margin: 0;
  border-radius: 10px;
`;

const Title = styled.div`
  height: 29px;
  width: auto;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 29px;
`;

const PostTitle = styled.div`
  height: 41px;
  width: auto;
  color: #000000;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 41px;
  margin: 14px 0 11px 0;
`;

const PostContent = styled.span`
  height: 20px;
  width: 646px;
  color: #495057;
  font-size: 14px;
  line-height: 20px;
`;
