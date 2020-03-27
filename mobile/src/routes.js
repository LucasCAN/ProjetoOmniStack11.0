import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import incidents from './pages/incidents';
import Detail from './pages/Detail';


export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screnOptions={{headerShown: false}}>
                <AppStack.Screen name="Incidents" component={incidents} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>

    );
}