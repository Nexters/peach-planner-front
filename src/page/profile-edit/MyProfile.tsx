import { FlexDiv, Content } from '../../component/style/style';
import LineAndTitle from './LindAndTitle';
import styled from 'styled-components';
import PlannerInputTitle from './PlannerInputTitle';
import { PlannerDescription } from '.';
import { PortfolioCollect } from './components/PortfolioCollect';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  summary: string;
  description: string;
  handleDescription: (e: any) => void;
  images: string[];
  setImages: Dispatch<SetStateAction<string[]>>;
}

const MyProfile = ({ summary, description, handleDescription, images, setImages }: Props) => {
  return (
    <FlexDiv width="632px" margin="0 0 72px 0" direction="column" justify="flex-start" align="start">
      <LineAndTitle title="내 프로필"></LineAndTitle>
      <PlannerInputTitle name="포트폴리오" margin="20px 0 8px 0"></PlannerInputTitle>
      <PortfolioCollect
        id="my-profile-portfolio"
        margin="0 0 24px 0"
        images={images}
        setImages={setImages}
        />
      <PlannerInputTitle name="플래너 한줄 소개" margin="20px 0 8px 0"></PlannerInputTitle>
      <Input name="summary" defaultValue={summary} onChange={handleDescription}></Input>
      <PlannerInputTitle name="플래너 소개" margin="24px 0 8px 0"></PlannerInputTitle>
      <TextArea name="description" defaultValue={description} onChange={handleDescription}></TextArea>
    </FlexDiv>
  );
};

export default MyProfile;

const Input = styled.input`
  box-sizing: border-box;
  height: 41px;
  width: 633px;
  border: 1px solid #ced4da;
  padding: 13px;
  border-radius: 3px;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ADB5BD;
    font-size: 13px;
  }
`;

export const TextArea = styled.textarea`
  box-sizing: border-box;
  height: 266px;
  width: 633px;
  padding: 13px;
  border: 1px solid #ced4da;
  border-radius: 3px;
  resize: none;
`;
