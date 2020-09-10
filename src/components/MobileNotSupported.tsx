import React, { useCallback } from "react";
import { Image, View } from "react-native";
import { Icon, SocialIcon } from "react-native-elements";

import * as Linking from "expo-linking";

import { Spacing } from "../constants/dimension";
import useColors from "../hooks/useColors";
import FlexView from "./FlexView";
import { Title } from "./Header";
import Text from "./Text";

const MobileNotSupported = () => {
    const { background } = useColors();
    return (
        <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: background,
                height: "100%",
                padding: Spacing.normal
            }}>
            <Title />
            <Image source={require("../../assets/sushiswap.jpg")} style={{ width: 192, height: 192 }} />
            <Text style={{ marginTop: Spacing.normal }}>Mobile devices not supported yet.</Text>
            <Social />
        </View>
    );
};

const Social = () => {
    const onPressTwitter = useCallback(() => Linking.openURL("https://twitter.com/LevxApp"), []);
    const onPressGithub = useCallback(() => Linking.openURL("https://github.com/lev-x"), []);
    const onPressDiscord = useCallback(() => Linking.openURL("https://discord.gg/3QKsgf"), []);
    return (
        <FlexView style={{ marginTop: Spacing.large, marginBottom: Spacing.huge, justifyContent: "center" }}>
            <Icon
                type={"material-community"}
                name={"github-face"}
                color={"white"}
                reverseColor={"black"}
                reverse={true}
                raised={true}
                onPress={onPressGithub}
            />
            <SocialIcon type="twitter" onPress={onPressTwitter} />
            <Icon
                type={"material-community"}
                name={"discord"}
                color={"#7289da"}
                reverse={true}
                raised={true}
                onPress={onPressDiscord}
            />
        </FlexView>
    );
};

export default MobileNotSupported;
