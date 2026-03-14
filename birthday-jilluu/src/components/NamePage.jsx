import { useState } from "react";
import StarField from "./StarField";
import Popup from "./Popup";

export default function NamePage() {
  const [message, setMessage] = useState(null);

  const actions = {
    J: "📅 March Calendar\n\n1 2 3 4 5 6 7\n8 9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31",
    I: "You are the most beautiful part of my life ❤️",
    L1: "I Love You more than words can say 💕",
    L2: "Every moment with you is magical ✨",
    U1: "You make my world brighter 🌸",
    U2: "I promise to always stand with you 💖",
    KISS: "I am sorry for everything I did before... please forgive me 😘"
  };

  return (
    <div className="night">

      <StarField />

      <div className="moon"></div>

      <div className="name3d">
        <span onClick={() => setMessage(actions.J)}>J</span>
        <span onClick={() => setMessage(actions.I)}>I</span>
        <span onClick={() => setMessage(actions.L1)}>L</span>
        <span onClick={() => setMessage(actions.L2)}>L</span>
        <span onClick={() => setMessage(actions.U1)}>U</span>
        <span onClick={() => setMessage(actions.U2)}>U</span>
        <span onClick={() => setMessage(actions.KISS)}>😘</span>
      </div>

      {message && <Popup text={message} close={() => setMessage(null)} />}

    </div>
  );
}