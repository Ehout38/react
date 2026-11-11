import { BrowserRouter, Route, Routes } from 'react-router';
import { ThemeProvider } from './context/ThemeContext';
import { GameProvider } from './context/GameContext';
import Shop from './components/Shop';
import Layout from './components/Layout';
import TaskManager from './components/TaskManager';
import { Home, About, Contacts, NotFound } from './pages/BasicPages';
import { CategoryList, CategoryItems, ItemDetails } from './pages/CatalogPages';
import { ShopPage, CartPage } from './pages/ShopPages';
import { FormStep1, FormStep2, FormStep3, Summary, RequireStep } from './pages/GamePages';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Shop>
          <GameProvider>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="shop" element={<ShopPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="categories" element={<CategoryList />} />
                <Route path="categories/:categoryId" element={<CategoryItems />} />
                <Route path="categories/:categoryId/items/:itemId" element={<ItemDetails />} />
                <Route path="register/step-1" element={<FormStep1 />} />
                <Route path="register/step-2" element={<RequireStep step={2}><FormStep2 /></RequireStep>} />
                <Route path="register/step-3" element={<RequireStep step={3}><FormStep3 /></RequireStep>} />
                <Route path="register/summary" element={<RequireStep step={4}><Summary /></RequireStep>} />
                <Route path="tasks" element={<TaskManager />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </GameProvider>
        </Shop>
      </BrowserRouter>
    </ThemeProvider>
  );
}
