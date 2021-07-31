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
  margin: ${(props: DivProps) => props.margin};
`;

export interface TitleProps {
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
  font-size: ${(props: TitleProps) => props.fontSize};
  font-weight: bold;
  letter-spacing: 0;
  line-height: ${(props: TitleProps) => props.lineHeight};
  margin: ${(props: TitleProps) => props.margin};
`;

export interface ContentProps {
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
