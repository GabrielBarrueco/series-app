import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    background: #1c1c26;
    flex: 1;
    align-items: center;
`;

export const SerieImage = styled.Image`
    background: #FFF;
    height: 300px;
    width: 190px;
    align-self: center;
    border-radius: 4px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-top: 24px;
`;

export const SerieTitle = styled.Text`   
    font-size: 26px;
    color: #FFF;
`;

export const SerieDescription = styled.Text`
    font-size: 20px;    
    padding: 14px;
    margin: 8px;
    border-radius: 8px;
    color: #FFF;
`;

export const YearText = styled.Text`
    font-size: 22px;
    font-weight: bold;
`;

export const NumbersText = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #FFF;
`;

export const InfoContainer = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const InfoStyle = styled.View`
    width: 23%;
    border-radius: 8px;
    padding: 8px;
    align-items: center;
    margin: 2px;
`;

export const InfoTitle = styled.Text`
    font-size: 18px;      
`;
