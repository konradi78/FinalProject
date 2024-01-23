import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Импортируйте ваши страницы
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ProductsPage from './pages/ProductsPage';
import SalesPage from './pages/SalesPage';
import NotFoundPage from './pages/NotFoundPage'; // Импортируйте ваш компонент страницы 404

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes> {/* Используйте Routes вместо Switch */}
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Страница 404 */}
          {/* Добавьте больше маршрутов по мере необходимости */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;