import { Link } from "react-router-dom";

const DetailsHeader = ({artistId, artistData, songData}) => {
  
  const artist = artistData?.artists[artistId]?.attributes
  
  return (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-tr from-blue-800 to-indigo-900 sm:h-48 h-28 rounded-lg" />
    <div className="absolute inset-0 flex items-center">
      <img src={artistId ? artist.artwork?.url.replace('{w}' , '500').replace('{h}', '500') : 
      songData?.images?.coverart} alt="Artist"
      className="sm:w-48 w-24 sm:h-48 h-24 rounded-full object-cover border-2 shadow-xl shadow-black" />
      <div className="ml-5">
        <p className="font-bold sm:text-3xl text-xl text-white">
          {artistId ? artist?.name : songData?.title}
        </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`} className="text-base text-gray-300 mt-3">
            <p>{songData?.subtitle}</p>
          </Link>
        )}

        <p className="text-base text-gray-300 mt-3">
          {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
        </p>
      </div>
    </div>
    <div className="w-full sm:h-44 h-8" />
  </div>
  )
};

export default DetailsHeader;
