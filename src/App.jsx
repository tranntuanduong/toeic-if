import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        style={{
          background: "red",
          marginBottom: "100px",
        }}
      >
        LOOOO
      </div>
      <iframe
        src="https://toeic-test.netlify.app/user-exams?examType=1&ssid=h7VKvUrUDvEguN2Gggc0+jbSaQou2/V9jgVsuLwiklkLuCyHSG1KVeIGJImCBqlIk3kwKIhQF5xrAcIKxI19OZw5zHJWuYIdmALJgxQw/elqezTo0Fmja3E4O8Ul5X/uyBYYWU9tWCcgaruTUktkt6SNbLYWBOx9ZpTZc81+zawnCFYfiyGbeoemKVXVjnlELdQVdwL2un2nn5kv72yLXWnkOHGwxPdFNH3L+JEgXV8VC8stPOjzO/Qflw+O7p2m1RhJ9ohhg5jBg2xpD3CIhszyMWEm/vxviX2jWd//CL9KCp3DHBYSggnrOnOCb7hFNl/FSk6c3Mj2nY+K1flhhg=="
        title="W3Schools Free Online Web Tutorials"
        style={{
          width: "1000px",
          height: "600px",
        }}
      ></iframe>
    </div>
  );
}

export default App;
