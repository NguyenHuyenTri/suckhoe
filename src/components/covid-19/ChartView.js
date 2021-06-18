import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const ChartLine = ({height, style, color,height_line}) => {
  return (
    <View style={[styles.line, {height}, style]}>
      <View style={[styles.fill, {height: height_line, backgroundColor: color}]} />
    </View>
  );
};

const ChartView = ({title, num, color , arrownum }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title} {' '}
                <Text style={{fontSize:12}}><Icon name='arrow-up' size={10} color={color} /> {arrownum}</Text>
        </Text>
        <Text style={[styles.number, {color}]}>{num}</Text>
      </View>
      {/* <View style={styles.chart}>
        <View style={styles.chartContainer}>
          {Array(1)
            .fill(0)
            .map((e, i) => {
              return (
                <ChartLine
                  key={i.toString()}
                  height={100}
                  height_line={100}
                  style={[i == 14 && {marginRight: 0}]}
                  color={color}
                />
              );
            })}
        </View>
      </View> */}
    </View>
  );
};

export default ChartView;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width:'49%',
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderRadius: 10,
    justifyContent:'center'
  },
  header:{
   
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom:5
  },
  number: {
    fontSize: 20,
    fontWeight: '500',
    color: '#E25858',
  },

  chart: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chartContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'flex-end',
  },

  line: {
    width: 5,
    height: 100,
    backgroundColor: '#EAEAE8',
    justifyContent: 'flex-end',
    marginRight: 4,
  },

  fill: {
    height: 20,
 
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 10,
  },
});