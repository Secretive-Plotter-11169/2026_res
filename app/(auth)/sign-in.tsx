import React from 'react';
import { View, Text } from 'react-native';
import {Link} from "expo-router"

const Signin = () => {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text>sign in</Text>
            <Link href="../(tabs)/index.tsx" className="p-4 m-4 rounded bg-primary text-white"> Go to Home</Link>
        </View>
    );
};

export default Signin;
