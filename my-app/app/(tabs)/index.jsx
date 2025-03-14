import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./index.style.jsx"; // Import styles

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        {/* Back Button Icon */}
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3114/3114883.png",
          }}
          style={styles.backIcon}
        />
        <Text style={styles.headerText}>Enter Your Details</Text>
      </View>

      {/* infoBox */}
      <View style={styles.infoBox}>
        <View style={styles.parameterImageContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/4722/4722208.png",
            }}
            style={styles.parameterImage}
          ></Image>
        </View>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.parameterImageContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/599/599580.png",
            }}
            style={styles.parameterImage}
          ></Image>
        </View>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.parameterImageContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1785/1785348.png",
            }}
            style={styles.parameterImage}
          ></Image>
        </View>
      </View>
      <View style={styles.infoBox}>
        <View style={styles.parameterImageContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/17828/17828439.png",
            }}
            style={styles.parameterImage}
          ></Image>
        </View>
        <View style={styles.parameterTextContainer}>
          <Text></Text>
        </View>
      </View>

      {/* Proceed Button */}
      <View style={styles.proceedButtonView}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => alert("Proceed button pressed")}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/17360/17360531.png ",
            }}
            style={styles.backIcon}
          ></Image>
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
