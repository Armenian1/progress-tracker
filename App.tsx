import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import DateTracker from "./components/DateTracker";
import AddDateTrackerForm from "./views/AddDateTrackerForm";

export default function App() {
   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
   return (
      <SafeAreaView style={styles.container}>
         <DateTracker name="firstThing" startDate={new Date(2022, 5, 13)} />
         <DateTracker name="firstThing" startDate={new Date(2022, 8, 23)} />
         <DateTracker name="firstThing" startDate={new Date(2022, 8, 23)} />
         <AddDateTrackerForm
            isVisible={isModalVisible}
            setIsVisible={(isVisible) => setIsModalVisible(isVisible)}
         />
         <Button
            title={"Add New Schedule"}
            onPress={() => setIsModalVisible(true)}
         />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      alignItems: "center",
      justifyContent: "flex-start",
   },
});
