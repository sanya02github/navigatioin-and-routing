import React from 'react';
import {View, Text, Button} from 'react-native';
import MainLayout from'../layout/MainLayout';

const HomeScreen = ({navigation})=> {
    return (
        <MainLayout>
            <View>
                <Text>This is the Home Screen</Text>
                <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
};

export default HomeScreen;
