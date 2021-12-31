import styled from 'styled-components/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';

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
    padding-left: 20px;
    padding-right: 20px;
`;

export const MenssageHello = styled.Text `
    font-size: 25px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.Roboto_700Bold};
`;

export const Main = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonOptions = styled.TouchableOpacity `
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const Icon = styled(Feather) `
    font-size: 20px;
`;

export const IconUser = styled(FontAwesome5) `
    font-size: 20px;
`;