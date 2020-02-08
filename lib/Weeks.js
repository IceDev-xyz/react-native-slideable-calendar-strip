import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width;
const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
const WEEK_en = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
export default ({ isChinese, weekStartsOn }) => {
  const week_localized = isChinese ? WEEK : WEEK_en;
  const weekStartsOnMinnor = weekStartsOn % 7;
  const weekTranformed = [
    ...week_localized.slice(weekStartsOnMinnor),
    ...week_localized.slice(0, weekStartsOnMinnor),
  ];
  return (
    <View style={{
      width,
      height: 10,
      flexDirection: 'row',
    }}>
      {weekTranformed.map(day =>
        <View style={{
          flex: 1,
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }} key={day}>
          <Text style={{
            color: 'gray',
            fontSize: 10,
          }}>{day}</Text>
        </View>
      )}
    </View>
  );
}
