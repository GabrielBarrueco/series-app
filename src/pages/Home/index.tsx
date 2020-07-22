import React, {useState, useEffect} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { RoutesParamList } from '../../routes/main.routes';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, SerieContainer, Serie, SerieList, SerieImage, SerieTitle } from './styles'

import api from '../../api/tmdb';

type HomeNavigationProps = StackNavigationProp<RoutesParamList, 'Home'>;

interface HomeScreenProps {
    navigation: HomeNavigationProps;
}

interface Serie {    
    id: string,
    name: string,
    description: string,
    poster_path: string,
    releaseDate: Date,
    VoteAverage: number    
}

const Home: React.FC<HomeScreenProps> = () => {
    const [series, setSeries] = useState<Serie[]>([]);
    const navigation = useNavigation();

    function toDetail(id : string) {
        navigation.navigate("Detail", { id });
    }

    useEffect(() => {
        async function loadSeries(): Promise<void> {
            const response = await api.get('/discover/tv?language=pt-BR&sort_by=popularity.desc&page=1');
            //console.log(response.data.results);
            setSeries(response.data.results);
        }
        loadSeries();
    }, []);

    return(
        <Container>
            <SerieContainer>
                <SerieList 
                    data={series}
                    keyExtractor={serie => serie.id}
                    renderItem={({ item }) => (
                        <Serie onPress={() => toDetail(item.id)}>
                            <SerieImage source={{uri: `http://image.tmdb.org/t/p/w342${item.poster_path}`}} />   
                            <SerieTitle>{item.name}</SerieTitle>              
                        </Serie>
                    )}                
                />
            </SerieContainer>                    
        </Container>
    );
};

export default Home;
