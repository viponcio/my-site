import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About(IconProp) {
    FontAwesomeIcon.icon: IconProp
    return (
    <div className="flex justify-center">
        <h1 className="text-lg absolute top-64">Olá! Muito prazer, sou a Vitória Poncio! Desenvolvedora front end.</h1>
        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
    </div>
  );
}
export default About;
