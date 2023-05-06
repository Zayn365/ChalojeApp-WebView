import { WebView } from 'react-native-webview'

export default function WebViews(){
  const handleWebViewError = (error) => {
        console.error(error);
      };
    
      const handleWebViewLoad = (event) => {
        console.log(event.nativeEvent);
      };
  return (
       <WebView 
         source={{ uri: 'https://chaloge.businessfuelprovider.com/' }}
         onError={handleWebViewError}
         onLoad={handleWebViewLoad}
         />
  );
};
