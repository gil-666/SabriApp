import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007aff',
        tabBarStyle: { height: 60 }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home",headerShown:false }}
      />
    </Tabs>
  );
}