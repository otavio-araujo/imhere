import { Text, View, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export default function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Otávio Araújo</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
