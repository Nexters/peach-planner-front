import styled from 'styled-components';
import { Content, FlexDiv, Image, Title } from './Main/MainView';
import heart from '../../image/main/ic_heart.svg';
import review from '../../image/main/ic_review.svg';
import blog from '../../image/main/ic_blog.svg';
import instagram from '../../image/main/ic_instagram.svg';

interface PlannerProps {
  imagePath: string;
  heartCount: number;
  reviewCount: number;
  name: string;
  organization: string;
  region: string;
}

const PlannerCard = (props: PlannerProps) => {
  return (
    <FlexDiv justify="flex-start" align="start" direction="column" margin={'0'}>
      <Image src={props.imagePath} height={'254px'} width={'254px'} margin={'0'}></Image>
      <FlexDiv justify="flex-start" align="start" height="150px" width="254px" margin={'0'} direction="column">
        <FlexDiv justify="flex-start" margin={'13px 0 0 0'}>
          <Image src={heart} height={'13.29px'} width={'14.43px'} margin={'0 4px 0 0'}></Image>
          <Content height={'18px'} width={'12px'} color={'#868E96'} fontSize={'12px'} lineHeight={'18px'}>
            {props.heartCount}
          </Content>
          <Image src={review} height={'16px'} width={'16px'} margin={'0 4px 0 16px'}></Image>
          <Content height={'18px'} width={'12px'} color={'#868E96'} fontSize={'12px'} lineHeight={'18px'}>
            {props.reviewCount}
          </Content>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'5px 0 0 0'}>
          <Title height={'24px'} width={'254px'} fontSize={'16px'} lineHeight={'24px'}>
            {props.name}
          </Title>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'8px 0 0 0'}>
          <Content height={'20px'} width={'56px'} color={'#868E96'} fontSize={'14px'} lineHeight={'20px'}>
            소속
          </Content>
          <Content height={'20px'} width={'190px'} color={'#000000'} fontSize={'14px'} lineHeight={'20px'}>
            {props.organization}
          </Content>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'8px 0 0 0'}>
          <Content height={'20px'} width={'56px'} color={'#868E96'} fontSize={'14px'} lineHeight={'20px'}>
            지역
          </Content>
          <Content height={'20px'} width={'190px'} color={'#000000'} fontSize={'14px'} lineHeight={'20px'}>
            {props.region}
          </Content>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'12px 0 0 0'}>
          <Image src={instagram} height={'20px'} width={'20px'} margin={'14px 8px 0 0'}></Image>
          <Image src={blog} height={'20px'} width={'20px'} margin={'14px 8px 0 0'}></Image>
        </FlexDiv>
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerCard;
