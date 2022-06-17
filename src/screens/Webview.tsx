import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {WebView} from 'react-native-webview';
import {routerProps} from '../routes/RootStackParams';
import {Colors} from '../styles';

export default function Webview({navigation, route}: routerProps<'Webview'>) {
  const {url} = route.params;

  // black zoom
  const INJECTED_JAVASCRIPT = `(function() {
    const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);
    window.postMessage = function(data) {
      window.ReactNativeWebView.postMessage(data);
    };
  })();`;

  return (
    <View style={styles.container}>
      <View style={styles.containerArrow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>

      <WebView
        source={{uri: url}}
        style={styles.webViewStyle}
        scalesPageToFit
        injectedJavaScript={INJECTED_JAVASCRIPT}
        onMessage={event => {
          if (event.nativeEvent.data === 'close') {
            navigation.goBack();
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.WHITE, flex: 1},
  containerArrow: {
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  webViewStyle: {
    flex: 1,
  },
});
