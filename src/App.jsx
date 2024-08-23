import Header from "./components/Header/Header";
import AddNote from "./components/Note/AddNote";
import AvailableNotes from "./components/Note/AvailableNotes";
import { NotesContextProvider } from "./store/notes-context";

function App() {
  return (
    <NotesContextProvider>
      <Header />
      <AddNote />
      <AvailableNotes />
    </NotesContextProvider>
  );
}

export default App;