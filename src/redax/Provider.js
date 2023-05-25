import { Provider } from "react-redux";
import store from '../store'

export default function Providers({children}){
  <Provider store={store}>
    {children}
  </Provider>
}