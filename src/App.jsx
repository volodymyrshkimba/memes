import { Navigate, Route, Routes } from "react-router-dom";

import TablePage from "./pages/TablePage";
import ListPage from "./pages/ListPage";

import Header from "./components/Header";

import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/table" replace />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </>
  );
}
