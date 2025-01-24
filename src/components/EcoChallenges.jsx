import React, { useState } from "react";
import './EcoChallenges.css'; // Optional: Add your CSS file for styling

const EcoChallenges = () => {
  const [ecoPoints, setEcoPoints] = useState(0);
  const [challenges] = useState([
    {
      id: 1,
      name: "Reduce Plastic Use",
      description: "Cut down on single-use plastic and earn points.",
      points: 10
    },
    {
      id: 2,
      name: "Recycle Paper",
      description: "Recycle paper to help reduce deforestation.",
      points: 15
    },
    {
      id: 3,
      name: "Save Water",
      description: "Use less water during daily activities.",
      points: 20
    },
    {
      id: 4,
      name: "Use Energy Efficiently",
      description: "Switch off lights when not in use.",
      points: 25
    }
  ]);

  const handleChallengeCompletion = (points) => {
    setEcoPoints(ecoPoints + points);
  };

  return (
    <div className="eco-challenges">
      <h1>Eco Challenges</h1>
      <p>Participate in weekly challenges to reduce waste and win eco-points!</p>

      <div className="eco-points">
        <h2>Your Eco Points: {ecoPoints}</h2>
      </div>

      <div className="challenges-list">
        {challenges.map((challenge) => (
          <div className="challenge" key={challenge.id}>
            <h3>{challenge.name}</h3>
            <p>{challenge.description}</p>
            <button
              onClick={() => handleChallengeCompletion(challenge.points)}
              className="join-btn"
            >
              Complete Challenge (+{challenge.points} points)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoChallenges;
