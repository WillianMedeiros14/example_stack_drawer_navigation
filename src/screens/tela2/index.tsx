import React, { useEffect, useState} from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';



import { 
    Container,
    Header,
    MenssageHello,
} from './styles';

export function Tela2(){
    const navigation = useNavigation();

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#013088"
            />
            <Header>
                <MenssageHello>Tela 2</MenssageHello>
            </Header>
        </Container>
    );
}