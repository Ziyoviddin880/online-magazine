import { useEffect, useState } from "react";
import http from "../services/http";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const req = await http.get(url);
        console.log(req);
        setData(req);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setErr(err);
      }
    };
    fetchData();
  }, []);
  return { data, loading, err };
}
