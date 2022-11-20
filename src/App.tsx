import Button from "./components/Button";
import Container from "./components/Container";
import GameCard from "./components/GameCard";
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
      <Container>
        <div>hello i'm container</div>
        <GameCard></GameCard>
      </Container>
    </div>
  );
}

export default App;
