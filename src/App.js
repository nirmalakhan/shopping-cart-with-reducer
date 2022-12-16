import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Menu from "./Menu";
import reducer from "./reducer";
import Basket from "./Basket";
import Home from "./Home";
import Boots from "./Boots";

const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="boots" element={<Boots />} />
          </Routes>
          <Basket />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
