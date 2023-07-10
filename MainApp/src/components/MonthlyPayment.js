import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BarChart, XAxis} from 'react-native-svg-charts';
const MonthlyPayment = ({monthlypayment}) => {
  // data 집어넣기
  const fill = 'rgb(5, 108, 242)';
  var average = 0;
  monthlypayment.map((item, index) => {
    average += item.month_payment;
  });
  var data = [average / 3];
  var labels = ['평균'];
  monthlypayment.map((item, index) => {
    data.push(item.month_payment);
    labels.push(item.month);
  });

  return (
    <View style={styles.container}>
      <BarChart
        style={{height: 200}}
        data={data}
        svg={{fill}}
        contentInset={{top: 30, bottom: 30}}></BarChart>
      <XAxis
        style={{paddingTop: 10}}
        data={data}
        formatLabel={(value, index) => labels[index]} // 레이블 표시를 위해 formatLabel을 사용
        contentInset={{left: 50, right: 50}}
        svg={{fontSize: 16, fill: 'black', fontWeight: 'bold'}} // 레이블 스타일 설정
      />
      <View style={styles.footer}>
        <Text style={{fontWeight: 'bold'}}>저번 달은 평균보다</Text>
        <Text style={{color: '#F25D07', fontWeight: 'bold'}}>
          {data[3] - average}원{' '}
        </Text>
        <Text style={{fontWeight: 'bold'}}>많이 썼어요</Text>
      </View>
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
