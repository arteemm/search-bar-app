import React from 'react';
import { MainPage, ErrorPage, AboutPage, CardPage } from './pages/index';
import { Layout } from './components/index';
import { useForm, FormProvider } from 'react-hook-form';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="details" element={<CardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
