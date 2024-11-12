import { lazy, Suspense } from "react";
import Navbar from "./components/layout/navbar";
import "./styles/App.css";
import { Route, Routes } from 'react-router-dom';
import { Container } from "@mui/material";
import { constants } from "./lib/utils/constants/constants";
const HomePage = lazy(() => import("./components/home/index"));
const AboutPage = lazy(() => import("./components/about/index"));

function App() {

  const { ABOUT, HOME , PROJECTS } = constants.ROUTES;
  
  const routeItems = [
    {
      key: HOME,
      path: HOME,
      component: <HomePage />,
    },
    {
      key: ABOUT,
      path: ABOUT,
      component: <AboutPage />,
    },
    {
      key: PROJECTS,
      path: PROJECTS,
      component: <AboutPage />,
    },
  ];

  return (
    <main className="h-full w-full">
      <Navbar />
      <Container sx={{py:3 , height:'100%'}}>
        <Routes>
          {routeItems.map((item) => (
            <Route
              path={item.path}
              element={
                <Suspense fallback={<></>}>
                  {item.component}
                </Suspense>
              }
              key={item.key}
            />
          ))}
        </Routes>
      </Container>
    </main>
  );
}

export default App;
