import axios from "axios";
import { useEffect, useState } from "react";
import { Cards } from "../cards";
import "./style.css";

export const ColumnVideos = ({ id, setId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  const api_key = "AIzaSyD-6549T79-4njzjcwnUw3SwhVEOx1M5c8";

  function getRelatedVideos() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&regionCode=br&maxResults=20&relatedToVideoId=${id}&type=video&key=${api_key}`
      )
      .then((res) => setRelatedVideos(res.data.items));
  }

  useEffect(() => {
    getRelatedVideos();
  }, [id]);

  console.log(relatedVideos);

  return (
    <div className="column-videos">
      <div className="column-buttons">
        <button>Todos</button>
        <button>Avatar</button>
        <button>Relacionados</button>
        <button>de omeleteve</button>
      </div>
      <div className="div-related">
        {relatedVideos.map((video) => {
          return (
            <Cards
              thumb={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              channel_name={video.snippet.channelTitle}
              id={video.id.videoId}
              setId={setId}
            />
          );
        })}
      </div>
    </div>
  );
};
