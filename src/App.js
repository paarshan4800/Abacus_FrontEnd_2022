import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
// import "./App.css";
import { createStore, combineReducers } from "redux";
import AppRoutes from "./routes";
import { Provider, useSelector } from "react-redux";
import Reducer from "./redux/Reducer";
import { useDispatch } from "react-redux";
import { Navbar } from "./components";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import background from "./images/bgg.jpg";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const rootReducer = combineReducers({
  Reducer: Reducer,
});

const store = createStore(rootReducer);

export const AuthApi = React.createContext();
export const SetAuthApi = React.createContext();
export const Width = React.createContext();
export const Height = React.createContext();
export const NewLoad = React.createContext();
export const SetNewLoad = React.createContext();
export const NewLoadWorkshop = React.createContext();
export const SetNewLoadWorkshop = React.createContext();

// toast.configure();
function App() {
  const [auth, setauth] = useState(false);
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const [newload, setnewload] = useState(true);
  const [newloadworkshop, setnewloadworkshop] = useState(true);

  useEffect(() => {
    if (
      // Cookies.get("token") !== undefined &&
      // Cookies.get("details") !== undefined
      localStorage.getItem("apiToken") !== null
    ) {
      setauth(true);
    }

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  const updateWindowDimensions = () => {
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
  };

  return (
    <div className="App">
      <AuthApi.Provider value={auth}>
        <SetAuthApi.Provider value={setauth}>
          <Width.Provider value={width}>
            <NewLoad.Provider value={newload}>
              <SetNewLoad.Provider value={setnewload}>
                <NewLoadWorkshop.Provider value={newloadworkshop}>
                  <SetNewLoadWorkshop.Provider value={setnewloadworkshop}>
                    <BrowserRouter>
                      <Navbar width={width}/>
                      <div
                        style={{
                          paddingTop: "90px",
                          backgroundImage: `url(${background})`,
                          backgroundSize: "contain",
                          backgroundRepeat: 1,
                        }}
                      >
                        <AppRoutes />
                      </div>
                      <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                      />
                      <div>
                        <Footer />
                      </div>
                    </BrowserRouter>
                  </SetNewLoadWorkshop.Provider>
                </NewLoadWorkshop.Provider>
              </SetNewLoad.Provider>
            </NewLoad.Provider>
          </Width.Provider>
        </SetAuthApi.Provider>
      </AuthApi.Provider>
    </div>
  );
}

export default App;
