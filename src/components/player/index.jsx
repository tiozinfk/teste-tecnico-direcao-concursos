import axios from "axios";
import { useState } from "react";
import api from "../../services/api";
import "./index.css";

export const Player = () => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="480"
        id="player"
        src="https://www.youtube.com/embed/f5lX2Len6ys"
        title="Choice | Nicole pt. Xamã (CLIPE OFICIAL)"
        frameborder="0"
        allowFullScreen
      />
    </div>
  );
};