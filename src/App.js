import { CircularProgress, Grid } from "@mui/material";
import "./App.css";
import JobCard from "./components/JobCard";
import useFetch from "./api/util";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [offset, setOffset] = useState(0);
  const { loading, error, list } = useFetch(offset);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setOffset((prev) => prev + 10);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        rowSpacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {list.map((data, index) => (
          <Grid item>
            <JobCard key={data.jdUid} jobData={data} />
          </Grid>
        ))}
        {loading && (
          <p>
            <CircularProgress color="warning" />
            Loading...
          </p>
        )}
        <div ref={loader} />
        {error && <p>Error occurred...</p>}
      </Grid>
    </div>
  );
}

export default App;
