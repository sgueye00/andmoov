import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import MobileFrame from './components/MobileFrame';
import FloatingCartButton from './components/FloatingCartButton';
import LandingPage from './screens/LandingPage';
import Dashboard from './screens/Dashboard';
import Course from './screens/Course';
import Colis from './screens/Colis';
import Resto from './screens/Resto';
import RestaurantDetail from './screens/RestaurantDetail';
import Panier from './screens/Panier';
import Commandes from './screens/Commandes';
import Compte from './screens/Compte';
import Business from './screens/Business';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page - Page de présentation pour investisseurs */}
        <Route path="/" element={<LandingPage />} />

        {/* Application Mobile - Routes avec MobileFrame */}
        <Route path="/app/*" element={
          <CartProvider>
            <MobileFrame>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/course" element={<Course />} />
                <Route path="/colis" element={<Colis />} />
                <Route path="/resto" element={<Resto />} />
                <Route path="/resto/:id" element={<RestaurantDetail />} />
                <Route path="/panier" element={<Panier />} />
                <Route path="/commandes" element={<Commandes />} />
                <Route path="/compte" element={<Compte />} />
                <Route path="/business" element={<Business />} />
              </Routes>
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />
      </Routes>
    </Router>
  );
}

export default App;
