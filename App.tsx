import React from "react"
import { Text, View } from "react-native"

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#131016",
        flex: 1,
      }}
    >
      <Text
        key="1"
        style={{
          color: "#FDFCFE",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 48,
        }}
      >
        Nome do evento:
      </Text>
      <Text key="2" style={{ color: "#6B6B6B", fontSize: 16 }}>
        Segunda, 01 de outubro de 2024
      </Text>
    </View>
  )
}
