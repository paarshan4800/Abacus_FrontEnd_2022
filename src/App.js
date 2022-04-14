import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Cookies from "js-cookie";
// import "./App.css";
import { createStore, combineReducers } from "redux";
import AppRoutes from "./routes";
import { Provider, useSelector } from "react-redux";
import Reducer from "./redux/Reducer";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import background from "./images/bgg.jpg";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "./pages/Loading/Loading";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { logOut } from "./api/auth";

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
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="App">
        <Loading />
      </div>
    );
  }

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
                      <div
                        style={{
                          paddingTop: "90px",
                          backgroundImage: `url(${background})`,
                          backgroundSize: "contain",
                          backgroundRepeat: 1,
                        }}
                      >
                        {" "}
                        <Navbar width={width} clickLogout={logOut} />
                        <AppRoutes />
                        <ToastContainer
                          position="bottom-center"
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
