import './style.css';

const LeftSideHeader = (props) => {

  return (
    <header className="info">
      <div className="info__photo">
        <img className="info__photo-image" src="./photo.jpg" alt="Alexander" />
      </div>
      <h1 className="info__name">Alexander Rybakov</h1>
      <h5 className="info__spec">Front-End Developer</h5>
      <div className="socials">
        <ul className="socials__list">
          <li className="socials__item">
            <a className="socials__link link-fb" href="#kek" aria-hidden="false">f</a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#kek">f</a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#kek">f</a>
          </li>
          <li className="socials__item">
            <a className="socials__link" href="#kek">f</a>
          </li>
        </ul>
      </div>
      <div className="hr"></div>
    </header>
  );
}

export default LeftSideHeader;
