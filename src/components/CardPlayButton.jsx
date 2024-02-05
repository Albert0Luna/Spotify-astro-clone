import { Play, Pause } from "./Player";
import {usePlayerStore} from "@/store/playerStore"

export function CardPlayButton ({ id, size = 'small' }) {
		const {
			currentMusic, 
			isPlaying, 
			setIsPlaying, 
			setCurrentMusic
		} = usePlayerStore(state => state)
		
		const isPlayingPlaylist = currentMusic?.playlist?.id === id

		const handleClick = () => {
			if (isPlayingPlaylist) {
				setIsPlaying(false)
				return
			}
			
			fetch(`./api/get-info-playlist.json?id=${id}`)
				.then(res => res.json())
				.then(data => {
					const {songs, playlist} = data
					setIsPlaying(true)
					setCurrentMusic({songs, playlist, song: songs[0]})
				})
		}

	return (
		<button 
			className="card-play-button p-3 rounded-full bg-green-500 hover:scale-105 transition hover:bg-green-400"
			onClick={handleClick}
		>
			{isPlayingPlaylist ? <Pause/> : <Play />}
		</button>
	)
}