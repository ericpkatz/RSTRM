import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'
import User from './User'
import Setting from './Setting'


export default function HomeStack() {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Home} />
            <HomeStack.Screen name="User" component={User} />
            <HomeStack.Screen name="Setting" component={Setting} />
        </HomeStack.Navigator>
    );
}
