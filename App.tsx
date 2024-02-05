import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';
import { MoviesProvider } from './src/contexts/MoviesContexts';


export default function App() {
  return (
    <>
      <MoviesProvider>
        <Routes/>
        <StatusBar style="auto" translucent backgroundColor='#242a32'/>
      </MoviesProvider>
    </>
  );
}

