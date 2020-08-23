import React, { useState } from 'react';
import {View, Text} from 'react-native';
import { SearchBarStyle, SearchBarContainer, HeaderContainer, SearchButton } from './styles'

type Props = {
    term?: string;
    onTermChange: (term: string) => void;
    onTermSubmit: () => void;
};
const SearchBar: React.FC<Props> = ({term, onTermChange, onTermSubmit}) => {
    return(
        <SearchBarContainer>
            <SearchBarStyle 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"            
            value={term}
            onChangeText={onTermChange}    
            onEndEditing={onTermSubmit}
            />
        </SearchBarContainer>        
    )
}

export default SearchBar