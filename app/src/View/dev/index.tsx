import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Dev = () => {
  return (
    <View style={styles.container}>
      <Text>Dev</Text>

      <View style={styles.box1}>
        <Text>style1</Text>
        <TouchableWithoutFeedback
          onPress={() => console.log('TouchableHighlight')}
        >
          <View>
            <Text style={{ color: 'white' }}>TouchableHighlight</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.box2}>
        <Text>style2</Text>
      </View>
      <View style={styles.box3}>
        <Text>style3</Text>
      </View>
    </View>
  );
};

export default Dev;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box1: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  box2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  box3: {
    flex: 1,
    backgroundColor: 'green',
  },
});
