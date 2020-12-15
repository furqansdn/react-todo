import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
  const onClickMode = (mode) => {
    return mode === props.MODE
      ? props.onModeChange('')
      : props.onModeChange(mode);
  };

  return (
    <div className='card-footer clearfix'>
      <div className='float-left'>
        <FontAwesomeIcon
          icon={faPlus}
          size='2x'
          className='btn--icon'
          onClick={() => onClickMode('add')}
        />
        <FontAwesomeIcon
          icon={faSearch}
          size='2x'
          className='btn--icon'
          onClick={() => onClickMode('search')}
        />
      </div>
      <div className='float-right'>Right</div>
    </div>
  );
};

export default Footer;
