import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './01_不使用hook/App';
// import App from './02_计数器的实现对比/App';
// import App from './03_useState的使用/App';
// import App from './04_useEffect的使用/App';
// import App from './05_useContext的使用/App';
// import { UserContext, ThemeContext } from './05_useContext的使用/context';
// import App from './06_useReducer的使用(少用)/App';
// import App from './07_useCallback的使用/App';
// import App from './08_useMemo的使用/App';
// import App from './09_useRef的使用/App';
// import App from './10_useImperativeHandle/App';
// import App from './11_useLayoutEffect/App';
import { UserContext, TokenContext } from './12_自定义hooks/context'
// import App from './12_自定义hooks/App';

import { Provider } from 'react-redux'
import store from './13_redux中的hooks/store'
import App from './13_redux中的hooks/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  <UserContext.Provider value={{name: 'xyz'}}>
    {/* <ThemeContext.Provider value={{age: 10}}> */}
    <TokenContext.Provider value={'abc'}>
      <Provider store={store}>
        <App />
      </Provider>
    </TokenContext.Provider>
  </UserContext.Provider>
);

