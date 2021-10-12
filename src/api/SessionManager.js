import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN = 'ACCESS_TOKEN';

export class SessionManager {
  static access_token = '';

  static setUserToken(userToken) {
    try {
      SessionManager.access_token = userToken;
      AsyncStorage.setItem(ACCESS_TOKEN, JSON.stringify(userToken));
    } catch (error) {
      console.log(error);
    }
  }

  static getUserToken() {
    try {
      return SessionManager.access_token;
    } catch (error) {
      console.log(error);
      return '';
    }
  }

  static async verifyToken() {
    try {
      if (SessionManager.access_token) {
        return SessionManager.access_token;
      }

      const userToken = await AsyncStorage.getItem(ACCESS_TOKEN);
      if (userToken) {
        SessionManager.access_token = JSON.parse(userToken);
      }

      return SessionManager.access_token;
    } catch (error) {
      console.log(error);
      return '';
    }
  }

  static clear() {
    SessionManager.access_token = '';
    SessionManager.user = '';
    AsyncStorage.removeItem(ACCESS_TOKEN);
  }
}
