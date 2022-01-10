import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.form
        initial={{ x: "50%", opacity: 0, scaleX: 0.5 }}
        animate={{ x: 0, opacity: 1, scaleX: 1 }}
        animate={{ translateX: 100, translateZ: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
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
