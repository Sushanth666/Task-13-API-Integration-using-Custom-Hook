import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();

      if (data.length === 0) {
        throw new Error("No Data Found");
      }

      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [url]);

  return {
    users,
    loading,
    error,
    fetchUsers,
  };
};

export default useFetchData;