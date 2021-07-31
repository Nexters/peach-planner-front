import heart from '../assets/svg/ic_heart.svg';
import review from '../assets/svg/ic_review.svg';
import blog from '../assets/svg/ic_blog.svg';
import instagram from '../assets/svg/ic_instagram.svg';
import { Content, FlexDiv, Title } from './style/style';
import styled from 'styled-components';

interface PlannerProps {
  size: string;
  imagePath: string;
  subTextHeight: string;
  margin: string;
  heartCount: number;
  reviewCount: number;
  name: string;
  organization: string;
  region: string;
}

const PlannerCard = (props: PlannerProps) => {
  return (
    <FlexDiv width={props.size} direction="column" margin={props.margin}>
      <PlannerImage src={props.imagePath} height={props.size}></PlannerImage>
      <FlexDiv
        justify="flex-start"
        align="start"
        height={props.subTextHeight}
        width={props.size}
        margin={'0'}
        direction="column"
      >
        <FlexDiv justify="flex-start" margin={'13px 0 0 0'}>
          <HeartIcon src={heart}></HeartIcon>
          <Content height={'18px'} width={'auto'} color={'#868E96'} fontSize={'12px'} lineHeight={'18px'}>
            {props.heartCount}
          </Content>
          <ReviewIcon src={review}></ReviewIcon>
          <Content height={'18px'} width={'auto'} color={'#868E96'} fontSize={'12px'} lineHeight={'18px'}>
            {props.reviewCount}
          </Content>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'5px 0 0 0'}>
          <Title height={'24px'} width={'auto'} fontSize={'16px'} lineHeight={'24px'}>
            {props.name}
          </Title>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'8px 0 0 0'}>
          <Content height={'20px'} width={'56px'} color={'#868E96'} fontSize={'14px'} lineHeight={'20px'}>
            소속
          </Content>
          <Content height={'20px'} width={'auto'} color={'#000000'} fontSize={'14px'} lineHeight={'20px'}>
            {props.organization}
          </Content>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'8px 0 0 0'}>
          <Content height={'20px'} width={'56px'} color={'#868E96'} fontSize={'14px'} lineHeight={'20px'}>
            지역
          </Content>
          <Content height={'20px'} width={'auto'} color={'#000000'} fontSize={'14px'} lineHeight={'20px'}>
            {props.region}
          </Content>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv justify="flex-start" margin={'0'}>
        <SnsIcon src={instagram}></SnsIcon>
        <SnsIcon src={blog}></SnsIcon>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerCard;

interface PlannerImageProps {
  src: string;
  height: string;
}

const PlannerImage = styled.img.attrs((props: PlannerImageProps) => ({ src: props.src }))`
  height: ${(props: PlannerImageProps) => props.height}};
  width: 100%;
`;

interface ImageProps {
  src: string;
}

const HeartIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 13.29px;
  width: 14.43px;
  margin: 0 4px 0 0;
`;

const ReviewIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 16px;
  width: 16px;
  margin: 0 4px 0 16px;
`;

const SnsIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 20px;
  width: 20px;
  margin: 0 8px 0 0;
`;
