import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons'
function Footer() {
    return (
      <div className="text-center w-full md:mt-96 sm:mb-64">
          <h1 className="text-gray-600">Desenvolvido com <FontAwesomeIcon icon={faHeart} size="1x"/> por <a href="https://github.com/viponcio" target="_blank" rel="noopener noreferrer">Vitória Poncio</a> </h1>
      </div>
  );    
}
export default Footer;