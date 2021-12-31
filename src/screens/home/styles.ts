import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.View `
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: row;
    justify-content: space-between;
`;

export const Main = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const MenssageHello = styled.Text `
    font-size: 25px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Roboto_700Bold};
`;

export const Button = styled.TouchableOpacity `
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.blue};
`;

