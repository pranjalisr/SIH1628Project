
import React, { useEffect, useState } from "react";
import axios from "axios";
const Test = ({ userId }) => {
    const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/marks/${userId}`);
        setMarks(response.data.data);
      } catch (err) {
        setError("Failed to fetch marks.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarks();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
  
    <div>
      <h1>Marks for User: {userId}</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark._id}>
              <td>{mark.subject}</td>
              <td>{mark.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 

  )
}

export default Test