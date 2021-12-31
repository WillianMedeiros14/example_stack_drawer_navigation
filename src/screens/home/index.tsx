import React, { useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
    Container,
    Header,
    Main,
    MenssageHello,
    Button
} from './styles';

export function Home(){
    const navigation = useNavigation();

    function handleNextPage(){
        navigation.navigate('Drawer');
    }

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#013088"
            />
            
            <Main>
                <Button onPress={handleNextPage}>
                    <MenssageHello>Ir para telas Drawer</MenssageHello>
                </Button>
            </Main>

        </Container>
    );
}