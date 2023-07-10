import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Parentpage from '../components/Parentpage';
import payment_main from '../mock/payment_main.json';
import PaymentContainer from '../components/PaymentContainer';
import PaymentChildren from '../components/PaymentChildren';
import MonthlyPayment from './../components/MonthlyPayment';
import {useNavigation} from '@react-navigation/native';
const Payment = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.body}>
      <Parentpage />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {payment_main.username}님의{'\n'}결제 관리 화면입니다.
        </Text>
      </View>
      <PaymentContainer title="결제 카드">
        {payment_main.card.map((data, index) => (
          <PaymentChildren
            key={index}
            imguri={data.cardimg}
            cardname={data.cardname}
            cardnumber={data.cardnumber}
          />
        ))}
      </PaymentContainer>

      <PaymentContainer
        title="적립 바코드"
        goto={() => navigation.push('AccumulationInformation')}>
        {payment_main.barcode.map((data, index) => (
          <PaymentChildren
            key={index}
            imguri={data.barcodeimg}
            barcodename={data.barcodename}
            barcodenum={data.barcodenum}
          />
        ))}
      </PaymentContainer>
      <PaymentContainer title="이번달 결제 내역">
        <PaymentChildren
          totalpayment={payment_main.totalpayment}></PaymentChildren>
      </PaymentContainer>
      <PaymentContainer title="월별 결제 내역">
        <MonthlyPayment monthlypayment={payment_main.monthlypayment} />
      </PaymentContainer>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
});
