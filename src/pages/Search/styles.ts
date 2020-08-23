import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Serie {    
    id: string,
    name: string,
    description: string,
    poster_path: string,
    releaseDate: Date,
    VoteAverage: number    
}

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background: #1c1c26;`;


export const SerieContainer = styled.View`
    border-radius: 5px;
    margin-top: 60px;
    flex: 1;
    flex-direction: row;
`;

export const SerieList = styled( FlatList as new () => FlatList<Serie>,).attrs({ numColumns: 2,})`
    flex: 1;
    padding: 0 10px;
`;

export const Serie = styled.TouchableOpacity`
    background: #363649;
    padding: 16px 16px;
    border-radius: 5px;
    margin: 8px;
    flex: 1;
`;

export const SerieImage = styled.Image`
    background: #DDD;
    height: 182px;
    width: 122px;
    align-self: center;
`;

export const SerieTitle = styled.Text`
    font-size: 14px;
    margin-top: 10px;
    color: #FFF;
    font-weight: bold;
`;
