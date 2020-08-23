import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import api from '../../api/tmdb'

import { 
    Container,    
    SerieContainer,
    SerieList,
    Serie,
    SerieImage,
    SerieTitle
} from './styles';

import SearchBar from '../../components/SearchBar'

interface Serie {    
    id: string,
    name: string,
    description: string,
    poster_path: string,
    releaseDate: Date,
    VoteAverage: number,    
}

export interface Term {
    term: string,
}

const Search: React.FC = () => {
    const [result, setResult] = useState<Serie[]>([]);
    const [term, setTerm] = useState('');
    const navigation = useNavigation();

    async function getResult(term: string): Promise<void>{        
        const response = await api.get(`/search/tv?page=1&query=${term}`)       
        setResult(response.data.results) 
        //console.log(response.data.results)
    }

    function toDetail(id : string) {
        navigation.navigate("Detail", { id });
    }

    return(
        <Container>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => getResult(term)}
            />
            <SerieContainer>                
                <SerieList 
                data={result}
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
    )
};

export default Search;