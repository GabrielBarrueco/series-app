import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home'
import Detail, { DetailParams } from '../pages/Detail'

export type RoutesParamList
 = {
    Home :undefined;
    Detail: DetailParams;
};

const Stack = createStackNavigator<RoutesParamList>();

const MainRoutes: React.FC = () => {
    return (        
        <Stack.Navigator 
            initialRouteName="Home" 
            screenOptions={ {headerShown: true, headerStyle: {
                backgroundColor: '#363649',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },}             
        }>
            <Stack.Screen name="Home" component={Home} options={{ title: 'Series' }}/>
            <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>        
    );
};

export default MainRoutes;