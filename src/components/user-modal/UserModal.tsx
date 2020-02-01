import React from 'react';
import {Link} from 'react-router-dom';

import './UserModal.css';
import {Props} from './types';

const UserModal: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Link to={"/"} className="UserModal UserModal__backLink"/>
      <div className="UserModal">
        <div className="UserModal__window">
          Модалка
        </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(UserModal);