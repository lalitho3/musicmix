import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/shazamCore";

const SongDetails = () => {

    const dispatch = useDispatch();

    const {id} = useParams();
    
    const {activeSong, isPlaying} = useSelector((state) => state.player); 

    const { data: songData, isFetching: isFetchingSong } = useGetSongDetailsQuery(id);

    const {data, isFetching: isFetchingRelated, error} = useGetSongRelatedQuery(id);

    const handlePauseClick = () => {
        dispatch(playPause(false));
      }
    
      const handlePlayClick = () => {
        dispatch(setActiveSong({song, data, i}));
        dispatch(playPause(true));
    }

    if(isFetchingSong || isFetchingRelated) return <Loader title={'Estamos buscando lo que necesitas, espera un momento...'} />

    if(error) return <Error />

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10">
                <h2 className="text-white text-3xl font-bold">Letra:</h2>
                <div className="mt-5">
                    {
                        songData?.sections[1].type === 'LYRICS' ? 
                        songData?.sections[1].text.map((line, i) => (
                            <p key={i} className="text-gray-300 text-base my-1">{line}</p>
                    )) :

                        <p className="text-white">No hay letra disponible</p>
                    }
                </div>
            </div>

            <RelatedSongs
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
             />
        </div>
    )

}

export default SongDetails;
