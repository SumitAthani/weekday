import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useFetch(offset) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        { limit: 10, offset }
      );
      setList((old) => [...old, ...res.data.jdList]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, [offset]);

  useEffect(() => {
    sendQuery(offset);
  }, [offset, sendQuery]);

  return { loading, error, list };
}

export default useFetch;
