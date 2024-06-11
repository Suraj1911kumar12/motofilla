

import PageRoutes from "./Routes/Routes";
import Sidebar from "./layout/Sidebar";
import AuthRoutes from "./Routes/AuthRoutes";
import { UseAuth } from "./Context/AuthContext";
import { useEffect } from "react";



function App() {
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.clear()
  //   }, 10000);
  //   return () => clearTimeout(timeout)
  // }, [])
  const auth = UseAuth();
  const isUser = auth.isUserAuthenticated

  return (
    <>
      {
        isUser ? <>
          <div className="flex bg-slate-50">
            <Sidebar />
            <main className="w-full h-screen overflow-hidden">
              <PageRoutes />
              
            </main>
          </div>
        </>
          :
          <>
            <main className="w-full h-screen overflow-hidden">
              <AuthRoutes />
            </main>
          </>
      }
    </>

  );
}

export default App;
