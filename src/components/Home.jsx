import { Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";

const AdminHello = lazy(() => import("./AdminHello"));

const Home = () => {
  const [admin, setAdmin] = useState(false);
  return (
    <main className="home">
      <h2>Home</h2>
      <button
        onClick={() => {
          import("../helper/sum").then((module) => {
            alert(module.sum(2, 2));
          });
        }}
      >
        Add 2+2
      </button>
      <button onClick={() => setAdmin((admin) => !admin)}>Toggle admin</button>
      <Suspense fallback={<h1>Loading...</h1>}>
        {admin ? (
          <>
            <AdminHello />

            <p>
              <Link to="/admin">Go to Admin</Link>
            </p>
          </>
        ) : (
          <h2>You are not an admin</h2>
        )}
      </Suspense>

      <p>
        <Link to="/about">Go to About</Link>
      </p>
      <p>
        <Link to="/transition">Go to Transition</Link>
      </p>
    </main>
  );
};
export default Home;
