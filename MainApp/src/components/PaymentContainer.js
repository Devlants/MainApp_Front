import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const PaymentContainer = ({title, children}) => {
  const childCount = React.Children.count(children);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.moreBtn}>
          <Text style={styles.moreBtnTitle}>더보기</Text>
        </TouchableOpacity>
      </View>
      {childCount === 1 ? (
        <View style={styles.section}>{children}</View>
      ) : (
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          horizontal={true}
          style={styles.section}>
          {children}
        </ScrollView>
      )}
    </View>
  );
};

export default PaymentContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  moreBtn: {
    backgroundColor: '#056CF2',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  moreBtnTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  section: {
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});
