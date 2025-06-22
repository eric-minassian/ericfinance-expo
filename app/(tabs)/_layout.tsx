import { Tabs } from "expo-router";
import React from "react";
import { ChartNoAxesColumn } from "~/components/icons/Chart";
import { CreditCard } from "~/components/icons/CreditCard";
import { House } from "~/components/icons/House";
import { Layers } from "~/components/icons/Layers";
import { Map } from "~/components/icons/Map";
import { Text } from "~/components/ui/text";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <House color={color} />,
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color }) => <Layers color={color} />,
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color }) => <CreditCard color={color} />,
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
        }}
      />
      <Tabs.Screen
        name="cash-flow"
        options={{
          title: "Cash Flow",
          tabBarIcon: ({ color }) => <ChartNoAxesColumn color={color} />,
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color }) => <Map color={color} />,
          headerLeft: () => <Text>Left</Text>,
          headerRight: () => <Text>Right</Text>,
        }}
      />
    </Tabs>
  );
}
