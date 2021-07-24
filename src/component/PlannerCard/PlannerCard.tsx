import heart from '../../image/main/ic_heart.svg';
import review from '../../image/main/ic_review.svg';
import blog from '../../image/main/ic_blog.svg';
import instagram from '../../image/main/ic_instagram.svg';
import { Content, FlexDiv, ImageBox, Title } from '../CommonStyle/style';

interface PlannerProps {
  width: string;
  imagePath: string;
  imageHeight: string;
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
    <FlexDiv width={props.width} direction="column" margin={props.margin}>
      <ImageBox src={props.imagePath} height={props.imageHeight} width={props.width} margin={'0'}></ImageBox>
      <FlexDiv
        justify="flex-start"
        align="start"
        height={props.subTextHeight}
        width={props.width}
        margin={'0'}
        direction="column"
      >
        <FlexDiv justify="flex-start" margin={'13px 0 0 0'}>
          <ImageBox src={heart} height={'13.29px'} width={'14.43px'} margin={'0 4px 0 0'}></ImageBox>
          <Content height={'18px'} width={'auto'} color={'#868E96'} fontSize={'12px'} lineHeight={'18px'}>
            {props.heartCount}
          </Content>
          <ImageBox src={review} height={'16px'} width={'16px'} margin={'0 4px 0 16px'}></ImageBox>
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
        <ImageBox src={instagram} height={'20px'} width={'20px'} margin={'0px 8px 0 0'}></ImageBox>
        <ImageBox src={blog} height={'20px'} width={'20px'} margin={'0px 8px 0 0'}></ImageBox>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerCard;
