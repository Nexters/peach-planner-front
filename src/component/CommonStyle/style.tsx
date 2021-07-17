import styled from 'styled-components';

export interface DivProps {
  minHeight?: string;
  height?: string;
  width?: string;
  margin?: string;
  direction?: string;
  justify?: string;
  align?: string;
}

export const FlexDiv = styled.div<DivProps>`
  min-height: : ${(props: DivProps) => props.minHeight};
  height: ${(props: DivProps) => props.height};
  width: ${(props: DivProps) => props.width || '100%'};
  display: flex;
  justify-content: ${(props: DivProps) => props.justify || 'center'};
  align-items: ${(props: DivProps) => props.align || 'center'};
  flex-direction: ${(props: DivProps) => props.direction || 'row'};
  margin: ${(props: DivProps) => props.margin || '20px 0'};
`;

export interface ImageBoxProps {
  src: string;
  height: string;
  width: string;
  margin: string;
  radius?: string;
}

export const ImageBox = styled.img.attrs((props: ImageBoxProps) => ({ src: props.src }))`
  height: ${(props: ImageBoxProps) => props.height};
  width: ${(props: ImageBoxProps) => props.width};
  margin: ${(props: ImageBoxProps) => props.margin};
  border-radius: ${(props: ImageBoxProps) => (props.radius ? props.radius : '10px')};
`;

interface TitleProps {
  height: string;
  width: string;
  fontSize: string;
  lineHeight: string;
  margin?: string;
}

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

interface ContentProps {
  height: string;
  width: string;
  color: string;
  fontSize: string;
  lineHeight: string;
  margin?: string;
}

export const Content = styled.span<ContentProps>`
  height: ${(props: ContentProps) => props.height};
  width: ${(props: ContentProps) => props.width};
  color: ${(props: ContentProps) => props.color};
  font-size: ${(props: ContentProps) => props.fontSize};
  line-height: ${(props: ContentProps) => props.lineHeight};
  margin: ${(props: ContentProps) => props.margin};
  -webkit-user-select: none;
`;

interface HorizontalLineProps {
  height: string;
  width: string;
  margin: string;
  backgroundColor: string;
}

export const HorizontalLine = styled.hr<HorizontalLineProps>`
  height: ${(props: HorizontalLineProps) => props.height};
  width: ${(props: HorizontalLineProps) => props.width};
  margin: ${(props: HorizontalLineProps) => props.margin};
  background-color: ${(props: HorizontalLineProps) => props.backgroundColor};
`;

interface ProfileImageBoxProps {
  height: string;
  width: string;
}

export const ProfileImgBox = styled.div<ProfileImageBoxProps>`
  height: ${(props: ProfileImageBoxProps) => props.height};
  width: ${(props: ProfileImageBoxProps) => props.width};
  background-color: #adb5bd;
  border-radius: 100%;
`;

interface BoxProps {
  height: string;
  width: string;
}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  height: ${(props: BoxProps) => props.height};
  width: ${(props: BoxProps) => props.width};
  border: 1px solid #ced4da;
  border-radius: 3px;
  display: flex;
  justify-content: 'center';
  align-items: 'center';
`;
