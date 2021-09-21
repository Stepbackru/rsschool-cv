import './style.css';

const AboutMe = (props) => {
  return (
    <div className="aboutMe">
    <div className="about">
      <ul className="about__list">
        <li className="about__item">
          <p className="about__age">Age:</p><span>27</span>
        </li>
        <li className="about__item">
          <p className="about__country">Country:</p><span>Russia</span>
        </li>
        <li className="about__item">
          <p className="about__city">City:</p><span>Moscow</span>
        </li>
      </ul>
    </div>
    <div className="hr"></div>
    <section className="langs">
      <h3 className="langs__caption">Languages</h3>
      <div className="langs__item">
        <div className="langs__title">
          <p className="langs__name">Russian</p>
          <span>100%</span>
        </div>
        <div className="aboutMe__progress">
          <div className="aboutMe__progress-border">
            <div className="aboutMe__progress-line aboutMe__progress-line_rus"></div>
          </div>
        </div>
      </div>
      <div className="langs__item">
        <div className="langs__title">
          <p className="langs__name">English</p>
          <span>40%</span>
        </div>
        <div className="aboutMe__progress">
          <div className="aboutMe__progress-border">
            <div className="aboutMe__progress-line aboutMe__progress-line_eng"></div>
          </div>
        </div>
      </div>
    </section>
    <div className="hr"></div>
    <section className="skills">
      <h3 className="skills__caption">Skills</h3>
      <div className="skills__item">
        <div className="skills__title">
          <p className="skills__name">HTML</p>
          <span>100%</span>
        </div>
        <div className="aboutMe__progress">
          <div className="aboutMe__progress-border">
            <div className="aboutMe__progress-line aboutMe__progress-line_html"></div>
          </div>
        </div>
      </div>
      <div className="skills__item">
        <div className="skills__title">
          <p className="skills__name">CSS</p>
          <span>98%</span>
        </div>
        <div className="aboutMe__progress">
          <div className="aboutMe__progress-border">
            <div className="aboutMe__progress-line aboutMe__progress-line_css"></div>
          </div>
        </div>
      </div>
      <div className="skills__item">
        <div className="skills__title">
          <p className="skills__name">JavaScript</p>
          <span>90%</span>
        </div>
        <div className="aboutMe__progress">
          <div className="aboutMe__progress-border">
            <div className="aboutMe__progress-line aboutMe__progress-line_js"></div>
          </div>
        </div>
      </div>
      <div className="skills__item">
        <div className="skills__title">
          <p className="skills__name">Git</p>
          <span>70%</span>
        </div>
        <div className="aboutMe__progress">
          <div className="aboutMe__progress-border">
            <div className="aboutMe__progress-line aboutMe__progress-line_git"></div>
          </div>
        </div>
      </div>
      <div className="skills__item">
        <div className="skills__title">
          <p className="skills__name">MySQL 8</p>
          <span>30%</span>
        </div>
        <div className="aboutMe__progress">
          <div className="aboutMe__progress-border">
            <div className="aboutMe__progress-line aboutMe__progress-line_mysql"></div>
          </div>
        </div>
      </div>
    </section>
  </div>);
}

export default AboutMe;
