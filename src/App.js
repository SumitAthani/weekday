import { Grid } from "@mui/material";
import "./App.css";
import JobCard from "./components/JobCard";
import useFetch from "./api/util";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);

  const getData = async () => {
    const res = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      { limit: 11, offset: 0 }
    );

    setList(res.data.jdList);
  };

  useEffect(() => {
    getData();
  });

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
      </Grid>
    </div>
  );
}

export default App;
