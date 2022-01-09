import styled from 'styled-components';

interface EmptyTextProps {
    flex?: number;
    padding?: string;
    textAlign?: string;
}

export const EmptyText = styled.div<EmptyTextProps>`
    font-family: SpoqaHanSans;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #adb5bd;
    
    padding: ${(props: EmptyTextProps) => (props.padding)};
    text-align: ${(props: EmptyTextProps) => (props.textAlign)};
    flex: ${(props: EmptyTextProps) => (props.flex)};
`;