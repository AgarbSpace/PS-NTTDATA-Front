import './styles/reset.scss';
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import React from 'react';
import { ThemeProvider } from '@ui5/webcomponents-react';
import MainPage from "./pages/MainPage";

export default function App() {
  setTheme('sap_horizon_dark')
  return (
    <ThemeProvider>
      <MainPage/>
    </ThemeProvider>
  );
}
