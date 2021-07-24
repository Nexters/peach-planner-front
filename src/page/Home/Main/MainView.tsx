import styled from 'styled-components';
import { ContentProps, TitleProps, ImageBoxProps } from '../../../component/CommonStyle/style';
import background from '../../../image/main_background.png';

interface DivisionBoxProps {
  marginBottom: number;
}

export const TopBox = styled.div`
  height: 320px;
  width: 1100px;
  border-radius: 10px;
  background-image: url(${background});
`;

export const DivisionBox = styled.span<DivisionBoxProps>`
  height: 56px;
  width: 1100px;
  margin-bottom: ${(props: DivisionBoxProps) => props.marginBottom};
  display: flex;
  justify-content: between;
  align-items: center;
`;

export const Title = styled.div<TitleProps>`
  height: ${(props: TitleProps) => props.height};
  width: ${(props: TitleProps) => props.width};
  color: #000000;
  font-size: ${(props: TitleProps) => props.fontSize};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${(props: TitleProps) => props.lineHeight};
  margin: ${(props: TitleProps) => props.margin};
`;

export const Content = styled.span<ContentProps>`
  height: ${(props: ContentProps) => props.height};
  width: ${(props: ContentProps) => props.width};
  color: ${(props: ContentProps) => props.color};
  font-size: ${(props: ContentProps) => props.fontSize};
  line-height: ${(props: ContentProps) => props.lineHeight};
`;

export const Image = styled.img.attrs((props: ImageBoxProps) => ({ src: props.src }))`
  height: ${(props: ImageBoxProps) => props.height};
  width: ${(props: ImageBoxProps) => props.width};
  margin: ${(props: ImageBoxProps) => props.margin};
  border-radius: 10px;
`;

export const Tag = styled.div`
  box-sizing: border-box;
  height: 25px;
  border: 1px solid #ced4da;
  display: flex;
  margin-top: 21px;
  margin-right: 8px;
  justify-content: center;
  align-items: center;
`;
