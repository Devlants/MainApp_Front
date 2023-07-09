import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BarChart, Grid } from 'react-native-svg-charts'

const MonthlyPayment = () => {

  const fill = 'rgb(134, 65, 244)'
  const data = [50, 10, 40, 95]

  return (
    <View style={styles.container}>
      <BarChart style={{ height: 200 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
      </BarChart>
    </View>
  );
};

export default MonthlyPayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
