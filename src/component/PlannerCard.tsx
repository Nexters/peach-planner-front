import heart from '../assets/svg/ic_heart.svg';
import review from '../assets/svg/ic_review.svg';
import blog from '../assets/svg/ic_blog.svg';
import instagram from '../assets/svg/ic_instagram.svg';
import EmptyHeart from '../assets/svg/ic_heart_line.svg';
import { FlexDiv } from './style/style';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { usePeachTokenState } from 'src/atoms/AuthStatus';
import { pick, PickRequest } from 'src/api/Pick';
import PhotoDefault from '../assets/svg/img_photo_default.svg';

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
  isPicked: boolean;
  facebookLink?: string;
  blogLink?: string;
  instagramLink?: string;
}

const PlannerCard = (props: PlannerProps) => {
  const { mutate, isLoading } = useMutation(pick, {
    onSuccess: (data) => {}
  });
  const tokenState = usePeachTokenState();
  const history = useHistory();

  const handlePlannerClick = () => {
    const plannerId = props.id;
    history.push(`/planner/${plannerId}`);
  };

  const handlePickClick = () => {
    const plannerId = props.id;
    const request: PickRequest = {
      targetId: plannerId,
      targetCategoryType: 'PLANNER',
      toBePick: true
    };
    mutate(request);
  };

  const splitRegion = (origin: string) => {
    const regions = origin.split(',');
    return regions.length > 3 ? `${regions[0]}, ${regions[1]}, ${regions[2]}, ...` : origin;
  };

  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <FlexDiv width={props.size} direction="column" margin={props.margin}>
      <PlannerImageContainer>
        <PlannerImage
          src={props.imagePath ? props.imagePath : PhotoDefault}
          height={props.size}
          onClick={handlePlannerClick}
        />
        {tokenState[0] ? (
          <PickBox onClick={handlePickClick}>
            <EmptyPickIcon src={EmptyHeart}></EmptyPickIcon>
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
          <SnsIcon src={instagram} onClick={() => handleClick(props.instagramLink!!)}></SnsIcon>
        ) : (
          <></>
        )}
        {props.blogLink ? <SnsIcon src={blog} onClick={() => handleClick(props.blogLink!!)}></SnsIcon> : <></>}
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
  height: string;
}

const PlannerImage = styled.img.attrs((props: PlannerImageProps) => ({ src: props.src }))`
  height: ${(props: PlannerImageProps) => props.height}};
  width: 100%;
  border-radius: 10px;
  cursor: pointer; 
  position: relative;
`;

const PickBox = styled.div`
  height: 32px;
  width: 32px;
  opacity: 0.3;
  border-radius: 3px;
  background-color: #212529;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const EmptyPickIcon = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 26px;
  width: 26px;
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
