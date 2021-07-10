import styled from 'styled-components';
import background from '../../../image/main_background.png';

export interface DivProps {
  height?: string;
  width?: string;
  margin?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

interface DivisionBoxProps {
  marginBottom: number;
}

export interface ImageProps {
  src: string;
  height: string;
  width: string;
  margin: string;
}

interface TitleProps {
  height: string;
  width: string;
  fontSize: string;
  lineHeight: string;
  margin?: string;
}

interface ContentProps {
  height: string;
  width: string;
  color: string;
  fontSize: string;
  lineHeight: string;
}

export const FlexDiv = styled.div<DivProps>`
  height: ${(props: DivProps) => props.height};
  width: ${(props: DivProps) => props.width || '100%'};
  display: flex;
  justify-content: ${(props: DivProps) => props.justify || 'center'};
  align-items: ${(props: DivProps) => props.align || 'center'};
  flex-direction: ${(props: DivProps) => props.direction || 'row'};
  margin: ${(props: DivProps) => props.margin || '20px 0'};
`;

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
  font-family: SpoqaHanSans;
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

export const Image = styled.img.attrs((props: ImageProps) => ({ src: props.src }))`
  height: ${(props: ImageProps) => props.height};
  width: ${(props: ImageProps) => props.width};
  margin: ${(props: ImageProps) => props.margin};
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

export const FooterDiv = styled.div`
  height: 154px;
  width: 1440px;
  border-top: 1px solid;
  border-top-color: #868e96;
`;
