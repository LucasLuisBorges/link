import React from 'react';
import * as S from './styled';

export const Link = ({ url, text, className = '' }) => {
  return (
    <S.LinkContent href={url} target="_blank" className={className}>
      {text}
    </S.LinkContent>
  );
};
