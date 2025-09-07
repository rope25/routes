import { Routes, Route, Navigate, NavLink, Outlet } from "react-router-dom";
import ListaCancionesPreferidas from "../components/ListaCancionesPreferidas/ListaCancionesPreferidas";
import Analitica from "../components/analitica/Analitica";
import ContactForm from "../components/ContactForm/ContactForm";
import Home from "../components/home/home";

function Layout() {
  return (
    <>
      <header style={{ padding: "12px 16px", borderBottom: "1px solid #eee" }}>
        <nav style={{ display: "flex", gap: 12 }}>
          <NavLink
            to="/home"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1d4ed8" : "#111827",
              fontWeight: isActive ? 700 : 500,
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/listadecancionespreferidas"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1d4ed8" : "#111827",
              fontWeight: isActive ? 700 : 500,
            })}
          >
            Lista canciones
          </NavLink>
        
          <NavLink
            to="/CpmtactForm"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1d4ed8" : "#111827",
              fontWeight: isActive ? 700 : 500,
            })}
          >
            Form
          </NavLink>
          <NavLink
            to="/analytics"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#1d4ed8" : "#111827",
              fontWeight: isActive ? 700 : 500,
            })}
          >
            Analytics
          </NavLink>
        </nav>
      </header>

      {/* Punto donde se pintará la ruta hija activa */}
      <main style={{ padding: 16 }}>
        <Outlet />
      </main>
    </>
  );
}

function NotFound() {
  return (
    <>
      <p className="error404">404 · Ruta no encontrada</p>
      <img src="/error404.png" alt="Not Found" className="error404-image" />
    </>
  );
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Ruta padre sin path explícito: sólo sirve el Layout */}
      <Route element={<Layout />}>
        {/* index: cuando visites exactamente "/" redirige a /home */}
        <Route index element={<Navigate to="/home" replace />} />
        {/* Rutas hijas */}
        <Route path="/listadeCancionesPreferidas" element={<ListaCancionesPreferidas />} />
        <Route path="/analytics" element={<Analitica />} />
        <Route path="/ContactForm" element={<ContactForm />} />
        <Route path="/home" element={<Home />} /> 

        {/* comodín: 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}