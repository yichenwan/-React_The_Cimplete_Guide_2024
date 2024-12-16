import reactImg from '../../assets/react-core-concepts.png';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import "./Header.css";

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  
export default function Header () {
    return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
  }