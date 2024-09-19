import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Box,
  Button,
  HStack,
  Text,
  TextInput,
} from "@react-native-material/core";

export default function App() {
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [resultState, setResultState] = React.useState(false);
  const [resultText, setResultText] = React.useState("");

  //sei que não é necessário fazer isso, mas acho que fica mais organizado :D

  //funções
  const somar = () => {
    setResult(Number(value1) + Number(value2));
    setResultText(value1 + " + " + value2 + " = ");
    setResultState(true);
  };

  const subtrair = () => {
    setResult(Number(value1) - Number(value2));
    setResultText(value1 + " - " + value2 + " = ");
    setResultState(true);
  };

  const multiplicar = () => {
    setResult(Number(value1) * Number(value2));
    setResultText(value1 + " x " + value2 + " = ");
    setResultState(true);
  };

  const dividir = () => {
    setResult(Number(value1) / Number(value2));
    setResultText(value1 + " / " + value2 + " = ");
    setResultState(true);
  };

  const limpar = () => {
    setResult(0);
    setResultState(false);
    setValue1(0);
    setValue2(0);
  };

  return (
    <View style={styles.container}>
      <Text variant='h4' style={styles.title}>
        Calculadora
      </Text>
      <TextInput
        label='Valor 1'
        variant='outlined'
        style={styles.txtInput}
        color='black'
        onChangeText={setValue1}
        keyboardType='numeric'
        value={value1}
      />
      <TextInput
        label='Valor 2'
        variant='outlined'
        style={styles.txtInput}
        color='black'
        onChangeText={setValue2}
        keyboardType='numeric'
        value={value2}
      />
      <HStack m={10} spacing={10}>
        <Button
          variant='outlined'
          title='Somar'
          style={styles.buttonOperators}
          color='#000'
          uppercase={false}
          onPress={somar}
        />
        <Button
          variant='outlined'
          title='Subtrair'
          style={styles.buttonOperators}
          color='#000'
          uppercase={false}
          onPress={subtrair}
        />
      </HStack>
      <HStack m={10} spacing={10}>
        <Button
          variant='outlined'
          title='Dividir'
          style={styles.buttonOperators}
          color='#000'
          uppercase={false}
          onPress={dividir}
        />
        <Button
          variant='outlined'
          title='Multiplicar'
          style={styles.buttonOperators}
          color='#000'
          uppercase={false}
          onPress={multiplicar}
        />
      </HStack>
      <HStack m={10} spacing={10}>
        <Button
          title='Limpar'
          style={styles.buttonOperators}
          color='error'
          uppercase={false}
          onPress={limpar}
        />
      </HStack>
      {resultState && (
        <Box style={styles.boxResult}>
          <Text variant='h6' style={styles.resultText}>
            {" "}
            {resultText}
          </Text>
          <Text variant='h6' style={styles.resultText}>
            {" "}
            {result}
          </Text>
        </Box>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  title: {
    marginTop: 50,
  },
  txtInput: {
    margin: 8,
    width: 320,
  },
  buttonOperators: { width: 150 },
  resultText: {
    margin: 5,
  },
  boxResult: {
    width: 200,
    marginTop: 10,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
  },
});
