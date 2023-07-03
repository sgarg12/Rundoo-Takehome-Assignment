import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { SupplierForm } from './components/SupplierForm';
import { ThankYouPage } from './components/ThankYouPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="supplier" />,
  },
  {
    path: '/supplier',
    element: <SupplierForm />,
  },
  {
    path: '/thank-you',
    element: <ThankYouPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
