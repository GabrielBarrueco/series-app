import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import api from '../../api/tmdb';
import { RoutesParamList } from '../../routes/main.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, InfoContainer, SerieImage, SerieTitle, SerieDescription, YearText,  NumbersText, InfoStyle, InfoTitle } from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';

type DetailNavigationProps = StackNavigationProp<RoutesParamList, 'Detail'>;

export type DetailParams = {
    id: string;
};
 
interface DetailProps {
    route: { params: DetailParams };
    navigation: DetailNavigationProps;
}

interface selectedSerie {    
    id: string,
    name: string,
    overview: string,
    poster_path: string,
    first_air_date: Date,
    vote_average: number,
    number_of_seasons: number,
    number_of_episodes: number    
}

const Detail: React.FC<DetailProps> = (props) => {
    const [result, setResult] = useState<selectedSerie>(Object)

    const { navigation, route } = props;
    const { params } = route;
    const { id } = params;      

    useEffect(() => {
        async function loadSelectedSeries(): Promise<void> {
            const response = await api.get(`/tv/${id}`);
            //console.log(response.data.results);
            setResult(response.data);                     
        }
        loadSelectedSeries();
    }, [])    

    return(        
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>                 
                <SerieImage source={{uri : `http://image.tmdb.org/t/p/w342${result.poster_path}`}}/>                      
                <InfoContainer>
                    <InfoStyle>
                        <Text style={{color: '#FFF'}}>Seasons</Text>
                        <NumbersText>{result.number_of_seasons}</NumbersText>
                    </InfoStyle>
                    <InfoStyle>
                        <Text style={{color: '#FFF'}}>Episodes</Text>
                        <NumbersText>{result.number_of_episodes}</NumbersText>
                    </InfoStyle>                 
                    <InfoStyle>
                        <Text style={{color: '#FFF'}}>First Year</Text>
                        <NumbersText>{moment(result.first_air_date).format('YYYY')}</NumbersText>
                    </InfoStyle> 
                    <InfoStyle>
                        <Text style={{color: '#FFF'}}>Rating</Text>
                        <NumbersText>{result.vote_average}</NumbersText>
                    </InfoStyle>                    
                </InfoContainer> 
                <InfoContainer>
                    <SerieDescription>{result.overview}</SerieDescription>
                </InfoContainer>  
            </ScrollView>          
        </Container>
    
        
    );
};

export default Detail;