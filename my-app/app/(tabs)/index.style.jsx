import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 30,
  },

  // header
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "18%",
    marginBottom: "15%",
  },
  backIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  headerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "20%",
  },

  // infoBox
  infoBox: {
    color: "bule",
    width: "100%",
    height: "18%",
    backgroundColor: "#F7F5FF",
    marginTop: "2px",
    marginBottom: "2px",
    borderRadius: "8px",
  },
  parameterImageContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "33%",
    justifyContent: "center",
  },
  parameterImage: {
    height: 50,
    width: 50,
  },

  proceedButtonView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 85,
    width: "100%",
  },
  proceedButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 40,
    width: 200,
    backgroundColor: "#6342E8",
    borderRadius: 8,
  },
  proceedButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default styles;
