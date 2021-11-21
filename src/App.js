import "./App.css";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

// import { useLocalStorage } from "./hooks/localStorage";

function App() {
  return (
    <div className="App">
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
