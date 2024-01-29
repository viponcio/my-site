import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faCss3, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import 'react-tippy/dist/tippy.css';

function Experience() {
  
  return (
      
    <div className="text-gray-800 mb-10">
        <h1 className="text-lg text-center mt-4">Experiência com:</h1>
        <div className="flex align-center gap-3 justify-center mt-4">
          <div className="tooltip" data-tip="ReactJS">
            <FontAwesomeIcon icon={faReact} size="3x"/>
          </div>  
          <div className="tooltip" data-tip="Java Script">
            <FontAwesomeIcon icon={faJs} size="3x"/>
          </div>
          <div className="tooltip" data-tip="Css">  
            <FontAwesomeIcon icon={faCss3} size="3x"/>
          </div>  
          <div className="tooltip" data-tip="Html">
            <FontAwesomeIcon icon={faHtml5} size="3x"/>
          </div>
          <div className="tooltip" data-tip="Tailwind">
            <img className="size-12" src="../tailwind-icon.png" ></img>
          </div>            
        </div>
    </div>
  );    
}
export default Experience;