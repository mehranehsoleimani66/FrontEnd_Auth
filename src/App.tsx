// Packages
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Pages
import Header from './components/header';
import store from './lib/store/query-client';
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import HomePage from './pages/home';
import Products from './pages/products';
// Store

const App = () => {
  return (
    <QueryClientProvider client={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
};

export default App;
