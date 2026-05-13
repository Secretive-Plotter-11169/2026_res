import React from 'react';
import { View, Text } from 'react-native';
import {Link} from "expo-router";

const MyComponent = () => {
    return (
        <View className="flex-1 items-center justify-center bg-background ">
            <Link href="" className="mt-4 rounded p-4 bg-green-400"> Onboarding</Link>
        </View>
    );
};

export default MyComponent;
