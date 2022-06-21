import "./Footer.css";
import { ExternalLink } from "react-external-link";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div className="main-footer">
      <ExternalLink
        href="mailto:charlyzayaslopez@gmail.com"
        className="external-mail"
      >
        <MailOutlineIcon sx={{ fontSize: 35 }} />
      </ExternalLink>
      <ExternalLink href="https://linkedin.com" className="external-linkedin">
        <LinkedInIcon sx={{ fontSize: 35 }} />
      </ExternalLink>
      <ExternalLink
        href="https://github.com/carloszyslpz"
        className="external-github"
      >
        <GitHubIcon sx={{ fontSize: 35 }} />
      </ExternalLink>
      <ExternalLink
        href="https://instagram.com/char.zys"
        className="external-insta"
      >
        <InstagramIcon sx={{ fontSize: 35 }} />
      </ExternalLink>
    </div>
  );
};

export default Footer;
