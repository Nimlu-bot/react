import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '@components/Footer.scss';
class Footer extends PureComponent {
  render() {
    return (
      <a className="footer-link" target="_blank" href="https://github.com/Nimlu-bot">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    );
  }
}

export default Footer;
