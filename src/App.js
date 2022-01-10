import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.form
        animate={{
          opacity: 0,
          translateX: 50,
          translateX: 100,
          translateZ: 0,
          scaleX: 0.5,
          translateZ: 0,
        }}
      >
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </motion.form>
    </div>
  );
}

export default App;
