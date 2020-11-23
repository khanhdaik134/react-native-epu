import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const BMI = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [level, setLevel] = useState(null);
  const compute = () => {
    let floatWeight = parseFloat(weight);
    let floatHeight = parseFloat(height);
    const caculateBmi = floatWeight / Math.pow(floatHeight / 100, 2);
    setBmi(caculateBmi);
    setLevel(caculateLevel(caculateBmi));
  }
  const caculateLevel = (value) => {
    if (value > 32) return 'Obese';
    if (value > 25 && value < 32) return 'Over Weight';
    if (value > 18.5 && value < 25) return 'Normal Weight';
    else return 'Under Weight';
  }
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.title}>Weight (KG)</Text>
        <TextInput style={styles.input} keyboardType='numeric' value={weight} onChangeText={setWeight} />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Height (CM)</Text>
        <TextInput style={styles.input} keyboardType='numeric' value={height} onChangeText={setHeight} />
      </View>
      <View style={styles.center}>
        <View style={styles.group}>
          <Text style={styles.title}>BMI: {bmi}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>Level: {level}</Text>
        </View>
        <View style={styles.group}>
          <TouchableOpacity style={styles.button} onPress={compute}>
            <Text style={styles.buttonText}>Compute</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default BMI

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  group: {
    marginTop: 20
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 20,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 30
  },
  input: {
    padding: 10,
    flex: 1,
    height: 40,
    borderWidth: 1
  },
  title: {
    fontSize: 20
  },
  center: {
    alignItems: 'center'
  }
})
