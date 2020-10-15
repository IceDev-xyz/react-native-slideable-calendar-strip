import React from 'react';
import {
  View,
  Text,
  Dimensions
} from 'react-native';
const width = Dimensions.get('window').width;
const WEEK_es = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
const WEEK_en = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export default ({ isSpanish, weekStartsOn }) => {
  const week_localized = isSpanish ? WEEK_es : WEEK_en;
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
