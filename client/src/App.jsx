import store from "./features/store";
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
