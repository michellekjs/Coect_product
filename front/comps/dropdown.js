import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = props => {
  const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);

  React.useEffect(() => {
      if (props.visibility) {
          setVisibilityAnimation(true);
      } else {
          setTimeout(() => {
              setVisibilityAnimation(false);
          }, 400);
      }
  }, [props.visibility]);

  return (
      <article className={`${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}>
          { visibilityAnimation && props.children }
      </article>
  )
};

export default Dropdown;