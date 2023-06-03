import './css/mob_display_menu.css'

export default function DisplayMenu ({showHUD, setHUD}){
	return (
		<div class={"display-menu " + showHUD}>
			<button onClick={() => setHUD(true)}>+</button>
		</div>
	);
}