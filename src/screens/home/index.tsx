import React, { useState } from "react"
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { styles } from "./styles"
import Participant from "../../components/Participant"

export default function Home() {
  const [participants, setParticipants] = useState<string[]>(["João"])
  const [name, setName] = useState<string>("")

  function handleParticipantAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert(
        "Participante existente",
        `Já existe um participante com o nome de ${name}.`
      )
    }

    setParticipants((prevState) => [...prevState, name])
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Remover",
        onPress: () => {
          console.warn(`O particimante ${name} foi removido.`)
        },
        style: "destructive",
      },
    ])
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
          onChangeText={setName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantAdd(name)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione um participante a sua lista
            de participantes.
          </Text>
        )}
      />
    </View>
  )
}
