import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#B8DFD8',
    borderRadius: 40,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    padding: 20,
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#E8F6EF',
    fontSize: 15,
  },
  btn: {
    backgroundColor: '#E8F6EF',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    shadowOpacity: 0.45,
    shadowOffset: {height: 0, width: 0},
    shadowRadius: 0.5,
  },
  headerStyle: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F6EF',
    paddingHorizontal: 10,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  LoginText: {
    fontWeight: 'bold',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
