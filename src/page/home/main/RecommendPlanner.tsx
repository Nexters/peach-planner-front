import { useQuery } from 'react-query';
import { fetchRecommendedPlanners } from 'src/api/Planner';
import styled from 'styled-components';
import { FlexDiv } from '../../../component/style/style';

const RecommendedPlanner = () => {
  const { data: planners } = useQuery(['recommendedPlanners'], fetchRecommendedPlanners);

  return (
    <FlexDiv margin={'54px 0 0 0'} direction="column">
      <FlexDiv height={'56px'} justify="between" margin={'0 0 40px 0'}>
        <Title>추천 플래너</Title>
      </FlexDiv>
      <FlexDiv margin={'0'} justify="flex-start" direction="row">
        {planners ? (
          planners.map((planner, index) => {
            return (
              <PlannerCard key={index}>
                <Image src={planner.imgUrl}></Image>
                {planner.fontColor === 'WHITE' ? (
                  <WhiteDescription>
                    {planner.description.split('\\n').map((line, index) => {
                      return (
                        <span>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </WhiteDescription>
                ) : (
                  <Description>
                    {planner.description.split('\\n').map((line, index) => {
                      return (
                        <span>
                          {line}
                          <br />
                        </span>
                      );
                    })}
                  </Description>
                )}
                {planner.fontColor === 'WHITE' ? (
                  <WhitePlannerName>{planner.plannerName} 플래너</WhitePlannerName>
                ) : (
                  <PlannerName>{planner.plannerName} 플래너</PlannerName>
                )}
              </PlannerCard>
            );
          })
        ) : (
          <></>
        )}
      </FlexDiv>
    </FlexDiv>
  );
};

export default RecommendedPlanner;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 198px;
  width: 352px;
  margin: 0 22px 0 0;
  border-radius: 10px;
  position: absolute;
`;

const Title = styled.div`
  height: 29px;
  width: auto;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 29px;
  margin: 0 0 14px 0;
`;

const PlannerCard = styled.div`
  disply: flex;
  height: 198px;
  width: 352px;
  margin: 0 22px 0 0;
  cursor: pointer;
`;

const Description = styled.div`
  height: 48px;
  width: 167px;
  color: #000000;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  white-space: pre-wrap;
  margin-top: 30px;
  margin-left: 20px;
`;

const WhiteDescription = styled.div`
  height: 48px;
  width: 167px;
  color: #ffffff;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  position: absolute;
  white-space: pre-wrap;
  margin-top: 30px;
  margin-left: 20px;
`;

const PlannerName = styled.div`
  height: 18px;
  width: 240px;
  color: #000000;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  position: absolute;
  line-height: 18px;
  margin-left: 20px;
  margin-top: 86px;
`;

const WhitePlannerName = styled.div`
  height: 18px;
  width: 240px;
  color: #ffffff;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0;
  position: absolute;
  line-height: 18px;
  margin-left: 20px;
  margin-top: 86px;
`;
