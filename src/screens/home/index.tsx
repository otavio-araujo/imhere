import React from "react"
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { styles } from "./styles"
import Participant from "../../components/Participant"

export default function Home() {
  const participants = [
    "Rodrigo",
    "Otávio",
    "Vitor",
    "Joaquim",
    "Maike",
    "Diego",
    "Rogério",
    "Carlos",
    "Mathias",
    "Rebeca",
    "Fernanda",
    "Angela",
  ]
  function handleParticipantAdd() {
    return console.warn("Clicou no botão adicionar")
  }

  function handleParticipantRemove(name: string) {
    return console.warn(`Clicou no botão remover ${name}`)
  }
  return (
    <View style={styles.container}>
      <Text key="1" style={styles.eventName}>
        Nome do evento:
      </Text>

      <Text key="2" style={styles.eventDate}>
        Segunda, 01 de outubro de 2024
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView>
    </View>
  )
}
