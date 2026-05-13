
import { Text, View } from "react-native";
import  {Link} from "expo-router";
import React from "react";
export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-background">
            <Text className="text-xl font-bold text-success">
                Welcome to Fit_Fusion!
            </Text>
            <Link  href="/onboarding" className="mt-4 rounded bg-primary text-white p-4 ">
                Go to Onboarding </Link>

            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4 ">
                Go to Sign in </Link>

            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4 ">
                Go to Sign up </Link>

            <Link href="/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4 ">Spotify subscription</Link>
            <Link href={{
                pathname: "/(tabs)/subscriptions/[id]",
                params: { id:"claude"}
            }}>
                Claude Subscription
            </Link>
        </View>
    );
}