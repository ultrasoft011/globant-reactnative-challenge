import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { useFetchQuote } from "./hooks/useFetchQuote";

export default function App() {
  const data = useFetchQuote();
  const [quote, setQuote] = useState("Quotes are here..");
  const [character, setAuthor] = useState("Andrés Felipe Ballesteros");
  let quoteMessage = data.map((element) => element.quote);
  let byAuthor = data.map((element) => element.character);

  const handleOnPress = () => {
    let number = Math.floor(Math.random() * data.length);
    console.log(number);
    setQuote(quoteMessage[number]);
    setAuthor(byAuthor[number]);
  };

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");
    console.log(randomColor);
    return `#${randomColor}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Anime quotes</Text>
      <Text style={styles.quote}>"{quote}"</Text>
      <Text style={styles.character}>by {character}</Text>
      <Button
        onPress={handleOnPress}
        title="Get a quote"
        color={generateColor()}
      ></Button>
      {/* {console.log(data[0].anime)} */}
      {/* {data.map((element) => {
        return <Text>{element.anime}</Text>;
      })} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
  },

  quote: {
    fontSize: 20,
    margin: 30,
    justifyContent: "space-around",
  },

  character: {
    marginBottom: 10,
  },
});
