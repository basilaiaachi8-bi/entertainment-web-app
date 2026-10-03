import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/movies"
            element={
              <MainLayout>
                <Movies />
              </MainLayout>
            }
          />
          <Route
            path="/tv-series"
            element={
              <MainLayout>
                <TvSeries />
              </MainLayout>
            }
          />
          <Route
            path="/bookmarked"
            element={
              <MainLayout>
                <Bookmarked />
              </MainLayout>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
