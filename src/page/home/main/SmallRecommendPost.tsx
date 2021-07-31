import styled from 'styled-components';
import { FlexDiv } from '../../../component/style/style';

interface Props {
  title: string;
  content: string;
  img: string;
  tag: string[];
}

const SmallRecommendPost = ({ title, content, img, tag }: Props) => {
  return (
    <FlexDiv margin={'0 0 56px 0'} width={'414px'} justify="space-between" align="start" direction="row">
      <FlexDiv margin={'0'} justify-content="flex-start" align="start" direction="column">
        <Title>{title}</Title>
        <Content>{content}</Content>
        <FlexDiv margin={'0'} width={'auto'} direction="row">
          <Tag>
            <TagContent>{tag[0]}</TagContent>
          </Tag>
          <Tag>
            <TagContent>{tag[1]}</TagContent>
          </Tag>
        </FlexDiv>
      </FlexDiv>
      <Image src={img}></Image>
    </FlexDiv>
  );
};

export default SmallRecommendPost;

const Tag = styled.div`
  box-sizing: border-box;
  height: 25px;
  border: 1px solid #ced4da;
  display: flex;
  margin-top: 21px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
`;

interface ImageProps {
  src: string;
}

const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: 120px;
  width: 120px;
  margin: 0;
  border-radius: 10px;
`;

const Title = styled.div`
  height: 27px;
  width: auto;
  color: #000000;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 29px;
`;

const Content = styled.span`
  height: 40px;
  width: 254px;
  color: #495057;
  font-size: 14px;
  line-height: 20px;
  margin: 8px 0 0 0;
`;

const TagContent = styled.span`
  height: 18px;
  width: auto;
  color: #000000;
  font-size: 12px;
  line-height: 18px;
  margin: 4px 9px 4px 9px;
`;
