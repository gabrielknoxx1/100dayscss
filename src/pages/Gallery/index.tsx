import { useState } from "react";
import { challenges } from "../../challenges";
import "./styles.scss";
export const Gallery = () => {
  const [challengeDay, setChallengeDay] = useState(0);
  return (
    <div className="container">
      <div>
        <button type="button" onClick={() => setChallengeDay(challengeDay - 1)}>
          Anterior
        </button>
        <h1>Day 01</h1>
        <button type="button" onClick={() => setChallengeDay(challengeDay + 1)}>
          Próximo
        </button>
      </div>
      <section className="content">
        {challenges[challengeDay].component}
      </section>
    </div>
  );
};
