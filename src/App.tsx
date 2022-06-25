import { BookRegister } from "./components/BookRegister";
import { BookRegistered } from "./components/BookRegistered";

function App() {
  return (
    <section className="w-screen h-screen bg-background flex items-center justify-between gap-2 p-6">
      <BookRegister />
      <BookRegistered />
    </section>
  );
}

export default App;
