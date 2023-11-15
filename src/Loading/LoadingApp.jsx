import Loading from "./Loading";
import { useEffect, useState } from "react";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};
export default App;
