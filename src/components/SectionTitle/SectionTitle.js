import React from 'react';
import classes from './SectionTitle.css';
import ArrowRight from 'react-icons/lib/md/keyboard-arrow-right';

const sectionTitle = ({ title }) => (
  <div className={[classes.title]}>
    <ArrowRight size={36} />
    {title}
  </div>
);

export default sectionTitle;
