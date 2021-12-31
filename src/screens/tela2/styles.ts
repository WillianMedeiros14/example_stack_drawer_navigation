import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View `
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding-bottom: 8px;
    padding-left: 26px;
    padding-right: 26px;
    justify-content: flex-end;
    align-items: center;
`;

export const MenssageHello = styled.Text `
    font-size: 25px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Roboto_700Bold};
`;

