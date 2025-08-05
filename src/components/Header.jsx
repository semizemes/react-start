import reactImg from '../assets/react-core-concepts.png'

const reactWords = ['Fundamental', "Core", "Fucking impressive"]
function randomNumGenerator (max) {
  return Math.floor(Math.random() * (max));
}

function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactWords[randomNumGenerator(reactWords.length)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;