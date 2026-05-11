import React from 'react';
import { View, Text } from 'react-native';
import {Link} from "expo-router"

const Signup = () => {
    return (
        <View>
            <Text>sign in</Text>
            <Link href="/sign-up"> Sign in</Link>
        </View>
    );
};

export default Signup;
