import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import Clock from "./ClockComponent/Clock";
import ClockDisplay from "./ClockComponent/ClockDisplay";
import ActivityFinder from "./ActivityFinder";
import RefCounter from "./RefCounter";
import RefCounter2 from "./RefCounter2";
import BitcoinRates from "./Lab1/BitcoinRates";
import VideoPlayer from "./VideoPlayer";
import ReducerCounter from "./ReducerCounter";
import PostListReducer from "./PostListReducer";
import PostListState from "./PostListState";
import SubscribeForm from "./SubscribeForm";
import SubscribeForm2 from "./SubscribeForm2";
import LoginForm from "./LoginForm";
import ActivityFinder2 from "./ActiviyFinder2";
import BitcoinRates2 from "./Lab2/BitcoinRates2";
import LoginForm2 from "./LoginForm2";
import { MyThemeProvider } from "./context/MyThemeContext";
import { EmojiProvider } from "./Lab3/EmojiContext";
import BitcoinRates3 from "./Lab3/BitcoinRates3";
import Emoji from "./Lab3/Emoji";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./NavBar";
import Lab4Routes from "./Lab4/routes/Lab4Routes";
import Lab4NavBar from "./Lab4/Lab4NavBar";
import Lab5Routes from "./Lab5/routes/Lab5Routes";
import Lab5NavBar from "./Lab5/Lab5NavBar";

function App() {
  return (
    <>
      {/*  provider component is at thp level */}
      <UserProvider>
        <MyThemeProvider>
          <Lab5NavBar />
          <Lab5Routes />
          <Lab4NavBar />
          <Lab4Routes />
          <NavBar />
          <AppRoutes />
          <EmojiProvider>
            <BitcoinRates3 />
            <Emoji />
          </EmojiProvider>

          <LoginForm2 />
          <BitcoinRates2 />
          <ActivityFinder2 />
          <LoginForm />
          <SubscribeForm2 />
          <SubscribeForm />
          <PostListState />
          <PostListReducer />
          <ReducerCounter />
          <VideoPlayer />
          <RefCounter2 />
          <RefCounter />
          <BitcoinRates />
          <ActivityFinder />
          {/* <Clock />*/}
          <ClockDisplay />
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
