import React from "react";
import moment from "moment";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

type DateTrackerProps = {
   name: string;
   startDate: Date;
};

const calculateDaysFromStart = (startDate: Date): string => {
   const daysAgo = Math.floor(
      moment.duration(moment().diff(startDate)).asDays()
   );
   return `${daysAgo} days ago`;
};

const DateTracker = (props: DateTrackerProps) => {
   return (
      <View style={styles.container}>
         <View>
            <Text style={styles.headerText}>{props.name}</Text>
         </View>
         <View style={styles.valueContainer}>
            <Text style={styles.valueText}>
               {calculateDaysFromStart(props.startDate)}
            </Text>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: "85%",
      height: 100,
      margin: 5,
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "black",
      elevation: 10,
      borderRadius: 5,
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      alignItems: "center",
      justifyContent: "space-around",
   },
   valueContainer: {
      marginBottom: 10,
   },
   headerText: {
      fontSize: 22,
      fontWeight: "700",
   },
   valueText: {
      fontSize: 18,
   },
});

export default DateTracker;
