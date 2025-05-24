import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import "./profile.css";
import { PlayerNameCard } from "./../../components/Card/Card";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const PlayerOneOptions = [
    ["🍎", "🍊", "🍌"],
    ["🍕", "🍔", "🌭"],
    ["🍣", "🍜", "🥟"],
    ["🥗", "🍲", "🥘"],
    ["🍩", "🍪", "🍰"],
    ["🥤", "☕", "🧃"]
  ]
  const playerTwoOptions = [
    ["🚗", "🚙", "🚕"],
    ["🚌", "🚎", "🚐"],
    ["🚓", "🚑", "🚒"],
    ["🚜", "🚛", "🚚"],
    ["🏍️", "🛵", "🚲"],
    ["✈️", "🚁", "🚀"]
  ]

  const [firstPlayerName, setFirstPlayerName] = useState(null);
  const [secondPlayerName, setSecondPlayerName] = useState(null);

  const [firstPlayerEmoji, setFirstPlayerEmoji] = useState(`🍎,🍊,🍌`);
  const [secondPlayerEmoji, setSecondPlayerEmoji] = useState(`🚗,🚙,🚕`);

  const PlayerOneName = useRef(null);
  const PlayerTwoName = useRef(null);

  function handleNameSubmit(setter, ref) {
    setter(ref.current.value);
    ref.current.value = "";
  }
  useEffect(()=>{
    setFirstPlayerEmoji(`🍎,🍊,🍌`)
    setSecondPlayerEmoji(`🚗,🚙,🚕`)
    setFirstPlayerName(null)
    setSecondPlayerName(null)
  },[])

  useEffect(() => {
    if (firstPlayerName !== null && secondPlayerName !== null && firstPlayerEmoji && secondPlayerEmoji) {
      localStorage.setItem("firstPlayerName", firstPlayerName);
      localStorage.setItem("secondPlayerName", secondPlayerName);
      localStorage.setItem("firstPlayerEmoji", firstPlayerEmoji);
      localStorage.setItem("secondPlayerEmoji", secondPlayerEmoji);
      navigate('/game')
    }
    console.log(firstPlayerName,secondPlayerName,firstPlayerEmoji,secondPlayerEmoji)
  },[firstPlayerName,secondPlayerName,firstPlayerEmoji,secondPlayerEmoji,navigate])



  return (
    <div className="screen">
      <motion.div
        className="profile-div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {!firstPlayerName ? (<PlayerNameCard
          title="Player One"
          label="Enter your name"
          inputRef={PlayerOneName}
          handleClick={() => handleNameSubmit(setFirstPlayerName, PlayerOneName)}
          setEmogiState={setFirstPlayerEmoji}
          emogiState={firstPlayerEmoji}
          options={PlayerOneOptions}
        />) : (
          <PlayerNameCard
            title="Player Two"
            label="Enter your name"
            inputRef={PlayerTwoName}
            handleClick={() => handleNameSubmit(setSecondPlayerName, PlayerTwoName)}
            setEmogiState={setSecondPlayerEmoji}
            emogiState={secondPlayerEmoji}
            options={playerTwoOptions}
          />
        )}
        
      </motion.div>
    </div>
  );
}

export default Profile;
