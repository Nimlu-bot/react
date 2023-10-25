import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { PureComponent } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '@components/Footer.scss';
import ErrorButton from '@/components/ErrorButton';
class Footer extends PureComponent {
  render() {
    return (
      <div className="footer">
        <a
          className="footer-link"
          target="_blank"
          href="https://github.com/Nimlu-bot"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <ErrorButton />
      </div>
    );
  }
}

export default Footer;
