import { Tabs } from "expo-router";
import React from "react";
import { House } from "~/components/icons/House";
import { Wallet } from "~/components/icons/Wallet";
import { Header } from "~/components/ui/header";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: ({ route, options }) => (
          <Header title={options.title ?? route.name} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: "Accounts",
          tabBarIcon: ({ color }) => <Wallet color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="creditcard.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cashflow"
        options={{
          title: "Cash Flow",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="chart.bar.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="budget"
        options={{
          title: "Budget",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="map.fill" color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}
