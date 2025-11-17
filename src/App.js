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

// Andmoov Business - Écrans professionnels
import BusinessHome from './screens/Business/BusinessHome';
import CoursierDashboard from './screens/Business/Coursier/CoursierDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page - Page de présentation pour investisseurs */}
        <Route path="/" element={<LandingPage />} />

        {/* Application Mobile - Routes directes (backward compatible) */}
        <Route path="/app" element={
          <CartProvider>
            <MobileFrame>
              <Dashboard />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/course" element={
          <CartProvider>
            <MobileFrame>
              <Course />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/colis" element={
          <CartProvider>
            <MobileFrame>
              <Colis />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/resto" element={
          <CartProvider>
            <MobileFrame>
              <Resto />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/resto/:id" element={
          <CartProvider>
            <MobileFrame>
              <RestaurantDetail />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/panier" element={
          <CartProvider>
            <MobileFrame>
              <Panier />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/commandes" element={
          <CartProvider>
            <MobileFrame>
              <Commandes />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/compte" element={
          <CartProvider>
            <MobileFrame>
              <Compte />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        <Route path="/business-old" element={
          <CartProvider>
            <MobileFrame>
              <Business />
              <FloatingCartButton />
            </MobileFrame>
          </CartProvider>
        } />

        {/* Andmoov Business - Écrans professionnels (format mobile avec MobileFrame) */}
        <Route path="/business" element={
          <CartProvider>
            <MobileFrame>
              <BusinessHome />
            </MobileFrame>
          </CartProvider>
        } />
        <Route path="/business/coursier" element={
          <CartProvider>
            <MobileFrame>
              <CoursierDashboard />
            </MobileFrame>
          </CartProvider>
        } />
        <Route path="/business/chauffeur" element={
          <CartProvider>
            <MobileFrame>
              <CoursierDashboard />
            </MobileFrame>
          </CartProvider>
        } />
        <Route path="/business/restaurateur" element={
          <CartProvider>
            <MobileFrame>
              <CoursierDashboard />
            </MobileFrame>
          </CartProvider>
        } />
        <Route path="/business/point-relais" element={
          <CartProvider>
            <MobileFrame>
              <CoursierDashboard />
            </MobileFrame>
          </CartProvider>
        } />
        <Route path="/business/expediteur" element={
          <CartProvider>
            <MobileFrame>
              <CoursierDashboard />
            </MobileFrame>
          </CartProvider>
        } />
      </Routes>
    </Router>
  );
}

export default App;
