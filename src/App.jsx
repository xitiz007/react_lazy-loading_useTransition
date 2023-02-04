import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { lazy, Suspense } from "react";
import SkeletionAdmin from "./components/skeletons/SkeletonAdmin";
import ErrorFallback from "./components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
const Admin = lazy(() => import("./components/Admin"));
const About = lazy(() =>
  import("./components/About").then((module) => ({ default: module.About }))
);
const Transition = lazy(() => import("./components/Transition"));

function App() {
  const navigate = useNavigate();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => navigate("/")}
    >
      <Suspense fallback={<SkeletionAdmin />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="transition" element={<Transition />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
