import React, { useState } from "react";
import {
   Modal,
   Text,
   TextInput,
   View,
   StyleSheet,
   Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import RNDateTimePicker from "@react-native-community/datetimepicker";
type AddDateTrackerFormProps = {
   isVisible: boolean;
   setIsVisible: (isVisible: boolean) => void;
};

const AddDateTrackerForm = (props: AddDateTrackerFormProps) => {
   const [activityName, setActivityName] = useState<string>("");
   const [startDate, setStartDate] = useState<Date>(new Date());

   return (
      <View>
         <Modal animationType="slide" visible={props.isVisible}>
            <View style={styles.centeredView}>
               <View style={styles.modalView}>
                  <View style={styles.headerContainer}>
                     <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>Add a New Event</Text>
                     </View>
                     <View style={styles.headerIconContainer}>
                        <AntDesign
                           name="close"
                           size={30}
                           color="#228f2d"
                           onPress={() => props.setIsVisible(false)}
                        />
                     </View>
                  </View>
                  <View style={styles.inputContainer}>
                     <Text style={styles.inputText}>Name</Text>
                     <TextInput
                        style={styles.textInputField}
                        value={activityName}
                        onChangeText={(value) => setActivityName(value)}
                     />
                  </View>
                  <View style={styles.inputContainer}>
                     <Text style={styles.inputText}>Start Date</Text>
                     <RNDateTimePicker
                        style={styles.dateInputField}
                        value={startDate}
                        onChange={(e, date) => setStartDate(date!)}
                     />
                  </View>
                  <View style={styles.inputContainer}>
                     <Pressable
                        style={styles.addEventButton}
                        onPress={() => props.setIsVisible(false)}
                     >
                        <Text style={styles.addEventButtonText}>Add Event</Text>
                     </Pressable>
                  </View>
               </View>
            </View>
         </Modal>
      </View>
   );
};

const styles = StyleSheet.create({
   centeredView: {
      flex: 1,
      marginTop: 22,
   },
   modalView: {
      flex: 1,
      margin: 20,
      padding: 35,
   },
   headerContainer: {
      flexDirection: "row",
   },
   headerTextContainer: {
      flex: 3,
   },
   headerIconContainer: {
      flex: 1,
      alignItems: "flex-end",
   },
   headerText: {
      fontSize: 26,
      fontWeight: "700",
   },
   inputContainer: {
      alignItems: "flex-start",
      paddingTop: 25,
   },
   inputText: {
      fontSize: 25,
   },
   textInputField: {
      borderRadius: 5,
      borderWidth: 1,
      padding: 10,
      marginTop: 10,
      width: "100%",
   },
   dateInputField: {
      width: 150,
      marginLeft: -28,
      marginTop: 10,
      fontSize: 15,
   },
   addEventButton: {
      marginTop: 30,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "#007AFF",
   },
   addEventButtonText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
   },
});

export default AddDateTrackerForm;
