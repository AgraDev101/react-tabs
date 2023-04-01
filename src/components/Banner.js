import style from "../styles/banner.module.scss"

const Banner = () => {
	return (
		<div className={style.container}>
			<div className={style.heading}>
				<b>Everything </b><light>you need for </light><b> any workflow</b>
			</div>
			<p>Easily build your ideal workflow with monday.com building blocks.</p>
		</div>

	)
}

export default Banner