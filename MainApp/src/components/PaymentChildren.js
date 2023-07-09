import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const PaymentChildren = ({
  imguri,
  cardname,
  cardnumber,
  barcodename,
  barcodenum,
  totalpayment,
}) => {
  if (imguri) {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imguri}} />
        {cardname && !barcodename ? (
          <Text>
            {cardname}({cardnumber})
          </Text>
        ) : (
          <>
            <Text>{barcodenum}</Text>
            <Text> {barcodename}</Text>
          </>
        )}
      </View>
    );
  } else if (totalpayment) {
    return (
      <View style={styles.totalPaymentContainer}>
        <Text style={styles.totalPaymentText}>총 {totalpayment}원</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default PaymentChildren;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  totalPaymentContainer: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  totalPaymentText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
