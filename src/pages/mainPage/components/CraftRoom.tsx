import React, { useEffect, useState } from "react";
import CheckboxInput from "../../../components/CheckboxInput";
import Input from "../../../components/Input";
import { FIRESTORE_COLLECTIONS } from "../../../constants/firestore";
import { Topic } from "../../../entities/topics";
import UseInput from "../../../hooks/UseInput";
import { getAllDocsOnCollections } from "../../../services/firebase/firestore";

const CraftRoom = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
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
  };

  const getTopics = async () => {
    const topicArray: Topic[] = [];

    (await getAllDocsOnCollections(FIRESTORE_COLLECTIONS.topics)).forEach(
      (doc) => {
        const topic = doc.data();
        console.log(topic);
        topicArray.push(topic);
      }
    );

    setTopics((prev) => [...topicArray]);
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <form action="submit" onSubmit={handleCraftNewRoom}>
      <CheckboxInput></CheckboxInput>

      <Input {...gameTitleInput}></Input>
      <button>방 만들기</button>
    </form>
  );
};

export default CraftRoom;
