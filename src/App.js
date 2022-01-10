import "./App.css";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.form
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 20 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.15 }}
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
