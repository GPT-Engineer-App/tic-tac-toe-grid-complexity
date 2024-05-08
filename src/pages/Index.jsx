import React, { useState, useEffect } from "react";

const Index = () => {
  const [opponentMove, setOpponentMove] = useState({ row: null, col: null });
  const [validActions, setValidActions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        opponentRow: 1,
        opponentCol: 2,
        validActions: [
          { row: 0, col: 0 },
          { row: 1, col: 1 },
        ],
      };
      setOpponentMove({ row: data.opponentRow, col: data.opponentCol });
      setValidActions(data.validActions);
    };

    fetchData();
  }, []);

  const chooseAction = () => {
    const chosenAction = validActions[Math.floor(Math.random() * validActions.length)];
    console.log(`Chosen action: ${chosenAction.row} ${chosenAction.col}`);
  };

  return (
    <div>
      <h1>Game Move</h1>
      <button onClick={chooseAction}>Choose Random Action</button>
    </div>
  );
};

export default Index;
