import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckboxInput from "../../../components/CheckboxInput";
import Input from "../../../components/Input";
import { FIRESTORE_COLLECTIONS } from "../../../constants/firestore";
import { Game } from "../../../entities/game";
import { Gamer } from "../../../entities/gamer";
import { Topic } from "../../../entities/topics";
import UseInput from "../../../hooks/UseInput";
import UseRemoveItem from "../../../hooks/UseRemoveItem";
import { WAIT_GAME_PAGE } from "../../../router/routePath";
import {
  getAllDocsOnCollections,
  setNewGame,
} from "../../../services/firebase/firestore";

interface CraftRoomProps {
  user: Gamer;
}

const CraftRoom = ({ user }: CraftRoomProps) => {
  const navigate = useNavigate();

  const [topics, setTopics] = useState<Topic[]>([]);
  const [checkedTopics, setCheckedTopics] = useState<string[]>([]);
  const gameTitle = UseInput("");

  const gameTitleInput = {
    inputId: "gameTitle",
    labelName: "gameTitle",
    placeholder: "이름을 입력해주세요",
    value: gameTitle.value,
    handleChange: gameTitle.onChange,
  };

  const handleCraftNewRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation 진행하기
    const newGame = {
      gameId: new Date(),
      title: gameTitle.value,
      topic: checkedTopics,
      max_members: 8,
      members: [user],
    };

    navigateWithFireStoreRef(newGame);
  };

  const navigateWithFireStoreRef = async (newGame: Game) => {
    const docRef = await setNewGame(newGame);
    navigate(`${WAIT_GAME_PAGE}/${docRef}`);
  };

  const handleCheckboxClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const { name, checked } = e.currentTarget;
    if (checked) {
      setCheckedTopics((prev) => [...prev, name]);
    } else {
      const removedArray = UseRemoveItem({
        array: checkedTopics,
        target: name,
      });
      setCheckedTopics((prev) => [...removedArray]);
    }
  };

  const makeTopicsArray = async () => {
    const topicArray: Topic[] = [];

    (await getAllDocsOnCollections(FIRESTORE_COLLECTIONS.topics)).forEach(
      (doc) => topicArray.push(doc.data())
    );

    setTopics((prev) => [...topicArray]);
  };

  useEffect(() => {
    makeTopicsArray();
  }, []);

  return (
    <form action="submit" onSubmit={handleCraftNewRoom}>
      <CheckboxInput
        topics={topics}
        handleCheckboxClick={handleCheckboxClick}
      ></CheckboxInput>
      <p>{checkedTopics}</p>

      <Input {...gameTitleInput}></Input>
      <button>새로운 방으로 들어가기</button>
    </form>
  );
};

export default CraftRoom;
