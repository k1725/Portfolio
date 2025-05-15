// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <Hero />}</>;
};

export default Home;
