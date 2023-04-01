import { useState } from "react";
import style from "../styles/tabs.module.scss"
import Robot from "../assets/robot.svg"
import Chart from "../assets/bar-chart-line-fill.svg"
import Clip from "../assets/clipboard.svg"
import Layout from "../assets/layout-three-columns.svg"
import Plug from "../assets/plug.svg"
import Puzzle from "../assets/puzzle.svg"
import Views from "../assets/views_icon.svg"
import video from '../assets/video.mp4'


const Tabs = () => {

	const [toggle, setToggle] = useState(1)
	const updateToggle = (id) => {
		setToggle(id)
	}

	return (
		<div className={style.main}>
			<ul className={style.list}>
				<li onClick={() => updateToggle(1)}><img src={Clip} alt="Clip" /><p>Boards</p></li>
				<li onClick={() => updateToggle(2)}><img src={Layout} alt="Layout" /><p>Views</p></li>
				<li onClick={() => updateToggle(3)}><img src={Chart} alt="Chart" /><p>Dashboards</p></li>
				<li onClick={() => updateToggle(4)}><img src={Plug} alt="Plug" /><p>Integration</p></li>
				<li onClick={() => updateToggle(5)}><img src={Robot} alt="Robot" /><p>Automations</p></li>
				<li onClick={() => updateToggle(6)}><img src={Puzzle} alt="Puzzle" /><p>Apps</p></li>
				<li onClick={() => updateToggle(7)}><img src={Views} alt="Views" /><p>Docs</p></li>
			</ul>
			<div className={toggle === 1 ? style.content : style.no}>
				<video width="640px" height="420px" loop autoplay>
					<source src={video} type="video/mp4"/>
				</video>
				<div className={style.content1}>
					<div className={style.content2}><img fill="blue" src={Clip} alt="Plug" /><h2>Boards</h2></div>
					<p>Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.</p>
				</div>
			</div>
			<div className={toggle === 2 ? style.content : style.no}>
				<video width="640px" height="420px" loop autoplay>
					<source src={video} type="video/mp4"/>
				</video>
				<div className={style.content1}>
					<div className={style.content2}><img src={Layout} alt="Layout" /><h2>Views</h2></div>
					<p>Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.</p>
				</div>
			</div>
			<div className={toggle === 3 ? style.content : style.no}>
				<video width="640px" height="420px" loop autoplay>
					<source src={video} type="video/mp4"/>
				</video>
				<div className={style.content1}>
					<div className={style.content2}><img src={Chart} alt="Chart" /><h2>Dashboards</h2></div>
					<p>Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.</p>
				</div>
			</div>
			<div className={toggle === 4 ? style.content : style.no}>
				<video width="640px" height="420px" loop autoplay>
					<source src={video} type="video/mp4"/>
				</video>
				<div className={style.content1}>
					<div className={style.content2}><img src={Plug} alt="Plug" /><h2>Integrations</h2></div>
					<p>Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.</p>
				</div>
			</div>
			<div className={toggle === 5 ? style.content : style.no}>
				<video width="640px" height="420px" loop autoplay>
					<source src={video} type="video/mp4"/>
				</video>
				<div className={style.content1}>
					<div className={style.content2}><img src={Robot} alt="Robot" /><h2>Automations</h2></div>
					<p>Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.</p>
				</div>
			</div>
			<div className={toggle === 6 ? style.content : style.no}>
				<video width="640px" height="420px" loop autoplay>
					<source src={video} type="video/mp4"/>
				</video>
				<div className={style.content1}>
					<div className={style.content2}><img src={Puzzle} alt="Puzzle" /><h2>Apps</h2></div>
					<p>Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more. </p>
				</div>
			</div>
			<div className={toggle === 7 ? style.content : style.no}>
				<video width="640px" height="420px" loop autoplay>
					<source src={video} type="video/mp4"/>
				</video>
				<div className={style.content1}>
					<div className={style.content2}><img src={Views} alt="Views" /><h2>Docs</h2></div>
					<p>Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.</p>
				</div>
			</div>
		</div>
	)
}

export default Tabs;