import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const SearchBarContainer = styled.View`
    background: #DDD;
    width: 90%;
    margin-top: 10px;
    border-radius: 4px;
`;

export const SearchBarStyle = styled.TextInput`
    padding: 8px;    
    height: 40px;
`;

export const HeaderContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    background: #DDD;
    padding: 4px;
    align-items: center;
`;
