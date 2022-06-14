import React from 'react';
import Icon from './icons';

export default function DownloadCV() {
  return (
    <a
      href="https://juanmatuscvs.s3.amazonaws.com/CV2022.pdf"
      className="text-white text-center flex items-center gap-3"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon name="download" />
      <p className="text-white">Download CV</p>
    </a>
  );
}
