import React, {useRef} from 'react';
import {AppState, AppStateStatus} from 'react-native';
import 'react-native-gesture-handler';
import {SWRConfig} from 'swr';
import RootStack from './src/routes/index';

export default function App() {
  const appState = useRef(AppState.currentState);

  return (
    <SWRConfig
      value={{
        isOnline() {
          return true;
        },
        provider: () => new Map(),
        isVisible() {
          /* Customize the visibility state detector */
          return true;
        },
        initFocus(callback) {
          const onAppStateChange = (nextAppState: AppStateStatus) => {
            /* If it's resuming from background or inactive mode to active one */
            if (
              appState.current.match(/inactive|background/) &&
              nextAppState === 'active'
            ) {
              callback();
            }
            appState.current = nextAppState;
          };

          // Subscribe to the app state change events
          AppState.addEventListener('change', onAppStateChange);

          return () => AppState.removeEventListener('change', onAppStateChange);
        },
      }}>
      <RootStack />
    </SWRConfig>
  );
}
