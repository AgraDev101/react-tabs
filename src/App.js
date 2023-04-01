import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./styles/main.module.scss"
import Banner from "./components/Banner";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className={style.body}>
      <Banner />
	  <Tabs />
    </div>
  );
}

export default App;
