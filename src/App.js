import { useState } from "react";

import Navbar from "./container/Navbar";
import AppLayoutWrapper from "./common/wrapper/AppLayoutWrapper";
import Bookmarks from "./container/Bookmarks";
import Reader from "./container/Reader";
import Signin from "./container/Signin";

import "./App.css";

function App() {

  const [state, setState] = useState({
    auth: true,
    currentUser: "Avinash",
    currentDocument: null,
    documents: [
      {
        id: 1,
        name: "Java textbook",
        url: "https://gfgc.kar.nic.in/sirmv-science/GenericDocHandler/138-a2973dc6-c024-4d81-be6d-5c3344f232ce.pdf"
      },
      {
        id: 2,
        name: "React textbook",
        url: "https://www.newline.co/fullstack-react/assets/media/sGEMe/MNzue/30-days-of-react-ebook-fullstackio.pdf"
      }
    ]
  })

  const openReader = document =>
    setState(previousState => ({
      ...previousState,
      currentDocument: document,
    }))


  const setAuth = (auth, user) =>
    setState(previosState => ({
      ...previosState,
      auth: auth,
      currentUser: user
    }))

  return (
    <>
      <Navbar setAuth={setAuth} auth={state.auth} />
      {
        state.auth ?
          <AppLayoutWrapper
            sidebarComponent={
              <Bookmarks
                username={state.currentUser}
                openReader={openReader}
                documents={state.documents}
              />
            }
            mainComponent={
              <Reader
                content={state.currentDocument}
              />
            }
          /> :
          <Signin setAuth={setAuth} />
      }
    </>
  );
}

export default App;
