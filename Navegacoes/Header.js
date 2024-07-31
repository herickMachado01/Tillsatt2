import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = ({ title, showImage, showNotificationIcon, onPressNotification }) => {
  return (
    <View style={styles.header}>
      {showImage && <Image source={require('../assets/TrocasON.png')} style={styles.Trocaicon} />}
      <Text style={styles.headerTitle}>{title}</Text>
      {showNotificationIcon && (
        <TouchableOpacity onPress={onPressNotification}>
          <Image source={require('../assets/icons/bell.png')} style={styles.notificationIcon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: '',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationIcon: {
    width: 30,
    height: 30,
    
  },
  Trocaicon: {
    width: 90,
    height: 90,
    marginTop:10,
    marginRight: 12, 
    marginLeft:-14
  },
});

export default Header;
