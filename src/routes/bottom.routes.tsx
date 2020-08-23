import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator<RoutesParamList>();

import MainRoutes from './main.routes';
import Search from '../pages/Search';

export type RoutesParamList
 = {
    Main :undefined;
    Search: undefined;
};

const TabsRoutes: React.FC = () => {
    return(
        <Tabs.Navigator tabBarOptions={{ activeBackgroundColor: '#1c1c26', inactiveBackgroundColor: '#1c1c26'}}>
            <Tabs.Screen name="Main" component={MainRoutes} options={
                {tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                        <Feather name="home" color={'#FFF'} size={22} /> 
                )}}
            />
            <Tabs.Screen name="Search" component={Search} options={
                {tabBarLabel: 'Search',
                tabBarIcon: ({ color, size }) => (
                        <Feather name="search" color={'#FFF'} size={22} /> 
                )}}
            />
        </Tabs.Navigator>
    )
};

export default TabsRoutes;