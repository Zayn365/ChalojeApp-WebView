
import { NativeRouter , Routes , Route } from 'react-router-native'
import HomeScreen from './components/HomeScreen';
import WebViews from './components/WebViews';

export default function App() {
  return <>
   <NativeRouter>
     <Routes>
       <Route exact path='/' element={<HomeScreen />} />
       <Route exact path='/webview' element={<WebViews />} />  
     </Routes>
   </NativeRouter>
   </>
}


