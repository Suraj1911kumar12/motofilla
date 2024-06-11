import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarContextWrapper from "../src/utils/SidebarContext";
import App from "./App";
import { AuthProvider, useAuth } from '../src/Context/AuthContext'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <useAuth>
        <AuthProvider>
          <SidebarContextWrapper>
            <App />
          </SidebarContextWrapper>
        </AuthProvider>
      </useAuth>
    </Router>
  </React.StrictMode>
);
