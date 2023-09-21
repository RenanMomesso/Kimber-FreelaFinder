import { StripeProvider } from '@stripe/stripe-react-native';
import { Amplify } from 'aws-amplify';
import React from 'react';
import { Linking, LogBox, StatusBar, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ApolloWrapper from './src/apollo/Client';
import config from './src/aws-exports';
import ContextProvider from './src/context/useContext';
import GlobalQueriesProvider from './src/context/useQueries';
import MainStackNavigation from './src/navigations/MainStackNavigator';



const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  const response = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === 'success') {
    Linking.openURL(response.url);
  }
};

const updatedConfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: 'freelafinder://',
    redirectSignOut: 'freelafinder://',
    urlOpener,
  }
}

Amplify.configure(updatedConfig)
const App = () => {

  LogBox.ignoreAllLogs(true);

  return (
    <StripeProvider
      publishableKey='pk_test_51MW4U1FwHjvHJVKvXITnasiChyCi8qlEKqGMfMbGlnD6Jr9z55BtgBZvTl17Glq3LzJWes3fS99SmC45y64vtOCr00y9Ylq48G'
      merchantIdentifier='merchant.com.freelafinder'
    >
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ApolloWrapper>
            <ContextProvider>
              <GlobalQueriesProvider>
                <View style={{ flex: 1 }}>
                  <StatusBar backgroundColor={"white"} barStyle="dark-content" translucent />
                  <MainStackNavigation />
                </View>
              </GlobalQueriesProvider>
            </ContextProvider>
          </ApolloWrapper>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </StripeProvider>
  )
};

export default App;
