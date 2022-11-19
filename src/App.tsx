import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div>
      <h1>Balance Game</h1>
      <Button>START</Button>
      <Input onChange={onInputChange} />
    </div>
  );
}

export default App;
