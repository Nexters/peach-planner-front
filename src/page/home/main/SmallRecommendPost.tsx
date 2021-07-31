import styled from 'styled-components';
import { Content, FlexDiv, Title } from '../../../component/style/style';

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
        <Title height={'27px'} width={'auto'} fontSize={'20px'} lineHeight={'29px'}>
          {title}
        </Title>
        <Content
          height={'40px'}
          width={'254px'}
          color={'#495057'}
          fontSize={'14px'}
          lineHeight={'20px'}
          margin="8px 0 0 0"
        >
          {content}
        </Content>
        <FlexDiv margin={'0'} width={'auto'} direction="row">
          <Tag>
            <Content
              height={'18px'}
              width={'auto'}
              color={'#000000'}
              fontSize={'12px'}
              lineHeight={'18px'}
              margin="4px 9px 4px 9px"
            >
              {tag[0]}
            </Content>
          </Tag>
          <Tag>
            <Content
              height={'18px'}
              width={'auto'}
              color={'#000000'}
              fontSize={'12px'}
              lineHeight={'18px'}
              margin="4px 9px 4px 9px"
            >
              {tag[1]}
            </Content>
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
