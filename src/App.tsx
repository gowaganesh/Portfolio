import { lazy, Suspense } from "react";
import Navbar from "./components/layout/navbar";
import { Route, Routes } from 'react-router-dom';
import { constants } from "./lib/utils/constants/constants";
import ProjectsPage from "./components/project";
import { ThemeProvider } from "./lib/theme/appThemeProvider";
const HomePage = lazy(() => import("./components/home/index"));
const AboutPage = lazy(() => import("./components/about/index"));

function App() {

  const { ABOUT, HOME, AWARDS, CERTIFICATIONS, EDUCATION, PROJECTS } = constants.ROUTES;

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
      key: AWARDS,
      path: AWARDS,
      component: <AboutPage />,
    },
    {
      key: CERTIFICATIONS,
      path: CERTIFICATIONS,
      component: <AboutPage />,
    },
    {
      key: EDUCATION,
      path: EDUCATION,
      component: <AboutPage />,
    },
    {
      key: PROJECTS,
      path: PROJECTS,
      component: <ProjectsPage />,
    }
  ];

  return (
    <ThemeProvider>
      <main className="h-full w-full scroll-auto">
        <Navbar />
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
      </main>
    </ThemeProvider>
  );
}

export default App;
