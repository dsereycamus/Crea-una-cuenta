import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./SocialButton.css";

const SocialButton = ({ icon }) => {
  let socialIcon = null;

  switch (icon) {
    case "facebook":
      socialIcon = <FontAwesomeIcon icon={faFacebook} />;
      break;
    case "github":
      socialIcon = <FontAwesomeIcon icon={faGithub} />;
      break;
    case "linkedin":
      socialIcon = <FontAwesomeIcon icon={faLinkedin} />;
      break;
    default:
      socialIcon = null;
  }

  return <button className="social-button">{socialIcon}</button>;
};

export default SocialButton;
