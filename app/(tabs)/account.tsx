import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function account() {
  return (
    <View>
      <Link href="/accountInfo">
        <Text>Account Inforamtion</Text>
      </Link>
    </View>
  );
}
