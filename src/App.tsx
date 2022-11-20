import BigButton from "./components/BigButton";
import Container from "./components/Container";
import GameCard from "./components/GameCard";
import Input from "./components/Input";
import SmallButton from "./components/SmallButton";

function App() {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div>
      <h1>Balance Game</h1>
      <BigButton>START</BigButton>
      <Input onChange={onInputChange} />
      <Container>
        <div>hello i'm container</div>
        <GameCard></GameCard>
        <SmallButton>▶</SmallButton>
      </Container>
    </div>
  );
}

export default App;
