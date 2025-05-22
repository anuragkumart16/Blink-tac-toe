import React from "react";
import "./splash.css";
import Button from "../../components/Button/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/profile')
  }
  return (
    <div className="screen">
      <div className="splash-holder">
        <motion.h1
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="big-text"
        >
          real
        </motion.h1>
        <motion.h1
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="big-text"
        >
          friends
        </motion.h1>
        <motion.h1
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="big-text"
        >
          real fun
        </motion.h1>
        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="div"
        >
          <Button onclick={handleClick}>Get Started</Button>
        </motion.div>
      </div>
    </div>
  );
}

export default Splash;
