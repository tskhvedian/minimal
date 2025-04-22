import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Colors } from "@/constants/Colors";
import { PortalHost } from "@rn-primitives/portal";

const drawerItems = [
  { label: "Bonuses", url: "bonuses", iconName: "checkmark-circle-outline" },
  { label: "Referrals", url: "referrals", iconName: "people-outline" },
  { label: "Payments", url: "payments", iconName: "card-outline" },
  {
    label: "Certifications",
    url: "certifications",
    iconName: "school-outline",
  },
  { label: "Availability", url: "availability", iconName: "calendar-outline" },
  { label: "Experience", url: "experience", iconName: "briefcase-outline" },
  {
    label: "Notification Settings",
    url: "notification-settings",
    iconName: "notifications-outline",
  },
  { label: "Settings", url: "settings", iconName: "settings-outline" },
  { label: "Help", url: "help", iconName: "help-circle-outline" },
];

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.backgroundAlt }}>
      <View className="bg-green-900 pt-20 pb-10 items-center justify-center">
        <View className="bg-white w-24 h-24 p-1 rounded-full drop-shadow-sm shadow-gray-900">
          <Image
            source={require("@/assets/images/user-image.jpeg")}
            className="w-full h-full rounded-full"
            resizeMode="contain"
          />
        </View>
        <View className="pt-5 gap-1 w-full">
          <Text className="text-center text-white text-2xl font-bold">
            Tornike
          </Text>
          <Text className="text-center text-white text-2xl font-bold">
            Tskhvediani
          </Text>
        </View>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          paddingTop: 8,
        }}
      >
        {drawerItems.map(({ label, url, iconName }, index) => (
          <View key={url}>
            <DrawerItem
              label={label}
              labelStyle={{
                fontSize: 14,
                fontWeight: "bold",
                color: "black",
                fontFamily: "WorkSans-Medium",
              }}
              icon={() => (
                <Ionicons
                  name={iconName as any}
                  size={18}
                  color="black"
                />
              )}
              onPress={() => {
                router.push(`/(drawer)/(tabs)/(menu)/${url}` as any);
              }}
            />
            {(index === 2 || index === 5) && (
              <View
                style={{
                  height: 1,
                  backgroundColor: "#E0E0E0",
                  marginHorizontal: 10,
                  marginVertical: 8,
                }}
              />
            )}
          </View>
        ))}
      </DrawerContentScrollView>
      <View
        className="items-center justify-center"
        style={{ paddingBottom: bottom + 20 }}
      >
        <Text className="text-gray-500 ">Shift v.0.1.8</Text>
      </View>
    </View>
  );
};

const DrawerLayout = () => {
  return (
    <>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerStyle: { width: 260 },
          headerStyle: {
            backgroundColor: Colors.greenPrimary,
          },
          headerTintColor: "white",
          headerTitle: () => (
            <View>
              <Image
                source={require("@/assets/images/logo-white.png")}
                className="w-20 h-8"
                resizeMode="contain"
              />
            </View>
          ),
          drawerType: "front",
          headerRight: () => <ThemeToggle />,
        }}
      />
      <PortalHost />
    </>
  );
};

export default DrawerLayout;
