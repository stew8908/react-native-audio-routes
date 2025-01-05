import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-audio-routes' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

if (Platform.OS !== 'ios') {
  throw new Error('This functionality is only available on iOS devices.');
}

const AudioRoutes = NativeModules.AudioRoutes
  ? NativeModules.AudioRoutes
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export async function getAvailableAudioRoutes(): Promise<any> {
  try {
    const routes = await AudioRoutes.getAvailableAudioRoutes();
    return routes;
  } catch (error) {
    console.error('Error getting available audio routes:', error);
    throw error;
  }
}
