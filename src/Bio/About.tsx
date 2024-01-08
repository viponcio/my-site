import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';


function About() {
    return (
    <div className="flex justify-center">
        <h1 className="text-lg absolute top-64">Olá! Muito prazer, sou a Vitória Poncio! Desenvolvedora front end.</h1>
        <div className="flex flex-row space-x-4 absolute top-72">
          <a href="https://www.linkedin.com/in/viponcio/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="3x"/></a>
          <a href={'mailto:vitoria.poncio@gmail.com'} rel='noopener noreferrer'><FontAwesomeIcon icon={faEnvelope} size="3x"/></a>
          <a href="https://github.com/viponcio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="3x"/></a>
        </div>
    </div>
  );    
}
export default About;
