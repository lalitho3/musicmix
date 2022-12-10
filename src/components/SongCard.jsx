import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong  } from "../redux/features/playerSlice";

const SongCard = ({song, isPlaying, activeSong, i, data}) => {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = () => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
  }

  return (
    <div className="flex flex-col w-[250px] md:w-[150px] p-4 shadow-lg bg-white bg-opacity-10 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-auto group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
        ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick} />
        </div>
        <img src={song.images?.coverart} alt="MusicMix 2022" />
      </div>
      <div className="mt-4 flex flex-col ">
        <p className="font-semibold text-lg text-gray-300 truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm text-gray-400 truncate mt-1">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists' }>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  )

}

export default SongCard;
