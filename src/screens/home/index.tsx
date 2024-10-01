import React from "react"
import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"

export default function Home() {
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do evento:
      </Text>
      <Text key="2" style={styles.eventDate}>
        Segunda, 01 de outubro de 2024
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={"#6B6B6B"}
      />
    </View>
  )
}
