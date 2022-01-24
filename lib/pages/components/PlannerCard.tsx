import heart from 'public/assets/svg/ic_heart.svg';
import review from 'public/assets/svg/ic_review.svg';
import blog from 'public/assets/svg/ic_blog.svg';
import instagram from 'public/assets/svg/ic_instagram.svg';
import EmptyHeart from 'public/assets/svg/ic_heart_line.svg';
import FillHeart from 'public/assets/svg/ic_heart_fill.svg';
import { FlexDiv } from './style/style';
import styled from 'styled-components';
import { usePeachTokenState, useUserTypeState } from 'lib/atoms/AuthStatus';
import { pick, PickRequest } from 'lib/api/Pick';
import PhotoDefault from 'public/assets/svg/img_photo_default.svg';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface PlannerProps {
  size: string;
  imagePath: string;
  margin: string;
  heartCount: number;
  reviewCount: number;
  name: string;
  organization: string;
  region: string;
  id: number;
  facebookLink?: string;
  blogLink?: string;
  instagramLink?: string;
  postLiked?: boolean;
  mutate: (data: any) => any;
}

const PlannerCard = (props: PlannerProps) => {
  const history = useRouter();
  const [isClickedHeart, setIsClickedHeart] = useState(false);
  const userState = useUserTypeState();

  const handlePlannerClick = () => {
    const plannerId = props.id;
    history.push(`/planner/${plannerId}/detail`);
  };

  const handlePickClick = () => {
    const plannerId = props.id;
    const request: PickRequest = {
      targetId: plannerId,
      targetCategoryType: 'PLANNER',
      toBePick: !props.postLiked
    };
    props.mutate(request);
  };

  const splitRegion = (origin: string) => {
    const regions = origin.split(',');
    return regions.length > 3 ? `${regions[0]}, ${regions[1]}, ${regions[2]}, ...` : origin;
  };

  return (
    <FlexDiv width={props.size} direction="column" margin={props.margin}>
      <PlannerImageContainer>
        <PlannerImage
          src={props.imagePath ? props.imagePath : PhotoDefault}
          width={props.size}
          height={props.size}
          onClick={handlePlannerClick}
        />
        {userState[0] && userState[0] === 'USER' ? (
          <PickBox onClick={handlePickClick}>
            {props.postLiked ? (
              <PickIcon src={FillHeart}></PickIcon>
            ) : (
              <EmptyHeartIcon src={EmptyHeart}></EmptyHeartIcon>
            )}
          </PickBox>
        ) : (
          <></>
        )}
      </PlannerImageContainer>
      <FlexDiv justify="flex-start" align="start" width={props.size} margin={'0'} direction="column">
        <FlexDiv justify="flex-start" margin={'13px 0 0 0'}>
          <HeartIcon src={heart}></HeartIcon>
          <Count>{props.heartCount}</Count>
          <ReviewIcon src={review}></ReviewIcon>
          <Count>{props.reviewCount}</Count>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'5px 0 0 0'}>
          <Title onClick={handlePlannerClick}>{props.name}</Title>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'8px 0 0 0'}>
          <DetailTitle>소속</DetailTitle>
          <DetailContent>{props.organization}</DetailContent>
        </FlexDiv>
        <FlexDiv justify="flex-start" margin={'8px 0 0 0'}>
          <DetailTitle>지역</DetailTitle>
          <DetailContent>{splitRegion(props.region)}</DetailContent>
        </FlexDiv>
      </FlexDiv>
      <FlexDiv justify="flex-start" margin={'12px 0 0 0'}>
        {props.instagramLink ? (
          <a href={props.instagramLink}>
            <SnsIcon src={instagram} />
          </a>
        ) : (
          <></>
        )}
        {props.blogLink ? (
          <a href={props.blogLink}>
            <SnsIcon src={blog} />
          </a>
        ) : (
          <></>
        )}
      </FlexDiv>
    </FlexDiv>
  );
};

export default PlannerCard;

const PlannerImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
interface PlannerImageProps {
  src: string;
  width: string;
  height: string;
}

const PlannerImage = styled(Image).attrs((props: PlannerImageProps) => ({ src: props.src }))`
  width: ${(props: PlannerImageProps) => props.width}};
  height: ${(props: PlannerImageProps) => props.height}};
  border-radius: 10px;
  cursor: pointer; 
  position: relative;
  object-fit: cover;
`;

const PickBox = styled.div`
  height: 32px;
  width: 32px;
  /* background-color: rgba(0, 0, 0, 0.3); */
  border-radius: 3px;
  /* background-color: #212529; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const PickIcon = styled(Image).attrs((props: ImageProps) => ({ src: props.src }))`
  height: 26px;
  width: 26px;
`;

const EmptyHeartIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 26px;
  width: 26px;
`;

interface ImageProps {
  src: string;
}

const HeartIcon = styled(Image).attrs((props: ImageProps) => ({ src: props.src }))`
  height: 13.29px;
  width: 14.43px;
  margin: 0 4px 0 0;
`;

const ReviewIcon = styled(Image).attrs((props: ImageProps) => ({ src: props.src }))`
  height: 16px;
  width: 16px;
  margin: 0 4px 0 16px;
`;

const SnsIcon = styled(Image).attrs((props: ImageProps) => ({ src: props.src }))`
  height: 20px;
  width: 20px;
  margin: 0 8px 0 0;
  cursor: pointer;
`;

const Title = styled.div`
  height: 24px;
  width: auto;
  color: #000000;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  cursor: pointer;
`;

const Count = styled.span`
  height: 18px;
  width: auto;
  color: #868e96;
  font-size: 12px;
  line-height: 18px;
`;

const DetailTitle = styled.span`
  height: 20px;
  width: 56px;
  color: #868e96;
  font-size: 14px;
  line-height: 20px;
`;

const DetailContent = styled.span`
  height: 20px;
  width: auto;
  color: #000000;
  font-size: 14px;
  line-height: 20px;
`;
