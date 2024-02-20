import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import message from './message.ts'

  const {name, role} = message();

function About() {
    return (
      <div className="max-w-4xl mx-auto mt-16">
        <p className="text-2xl md:text-4xl text-pink text-center text-gray-800">{name}</p>
        <p className="text-xl text-center leading-relaxed mt-4 text-gray-800">{role}</p>
          <div className="flex align-center gap-3 justify-center mt-4">
            <a href="https://www.linkedin.com/in/viponcio/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="3x"
              className="m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            /></a>
            <a href={'mailto:vitoria.poncio@gmail.com'} rel='noopener noreferrer'><FontAwesomeIcon icon={faEnvelope} size="3x"
              className="m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            /></a>
            <a href="https://github.com/viponcio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="3x"
              className="m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            /></a>
          </div>
      </div>
  );    
}
export default About;