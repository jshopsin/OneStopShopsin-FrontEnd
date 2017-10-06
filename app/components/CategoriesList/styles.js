import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
    // paddingHorizontal: 15,
    // paddingVertical: 8,
    // backgroundColor: colors.row,
    // marginVertical: 2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignSelf: 'stretch',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 2,
    marginRight: 10,
  },
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})
