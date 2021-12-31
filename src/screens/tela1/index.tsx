import React from 'react';
import { StatusBar } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootStackParamList } from '../../routes/routes';

import { 
    Container,
    Header,
    ButtonOptions,
    Icon,
    IconUser
} from './styles';

type Props = DrawerScreenProps<RootStackParamList>;

export function Tela1({ navigation }:Props){

    function handleOpenDrawer(){
        navigation.openDrawer();
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#013088"
            />
            <Header>
                <ButtonOptions onPress={handleOpenDrawer}>
                    <Icon
                        name="menu"
                    />
                </ButtonOptions>
                <ButtonOptions>
                    <Icon
                        name="home"
                    />
                </ButtonOptions>
                <ButtonOptions>
                    <Icon
                        name="bell"
                    />
                </ButtonOptions>
                <ButtonOptions>
                    <IconUser
                        name="user-circle"
                    />
                </ButtonOptions>
            </Header>

        </Container>
    );
}