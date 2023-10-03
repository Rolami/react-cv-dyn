import cvData from "./cvData.json";
import PersonalInfo from "./Components/CV/PersonalInfo";
import SecretWordDetector from "./Components/CV/SecretWordDetector";
import './App.css';

export default function App() {
  handleClick() {
    alert('Why would you do that?', this)
    return; // Add this line to fix the error
  };

  return (
    <div className="App">
      <h1>Robin react cv</h1>
      <SecretWordDetector />

      <button onClick={() => this.handleClick()}>
        Don't click me
      </button>


      <h1 className="section-title">Contact Info</h1>
      <section>
        <article>
          <PersonalInfo data={cvData.personalInformation} />
        </article>
      </section>

      <h1 className="section-title">Education</h1>
      <section>
        {/* Map over education data and create articles */}
        {cvData.education.map((educationItem, index) => (
          <article key={`education-${index}`}>
            <h3>{educationItem.school}</h3>
            <p>{educationItem.degree}</p>
            <p>{educationItem.year}</p>
          </article>
        ))}
      </section>

      <h1 className="section-title">Work experience</h1>
      <section>
        {/* Map over experience data and create articles */}
        {cvData.experience.map((experienceItem, index) => (
          <article key={`experience-${index}`}>
            <h3>{experienceItem.company}</h3>
            <p>{experienceItem.position}</p>
            <p>{experienceItem.year}</p>
          </article>
        ))}
      </section>

    </div>
  );
}
