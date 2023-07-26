import React from 'react';
import * as S from './styled';

export const Card = ({ src, title, text }) => {
  return (
    <S.CardContent className="text-center">
      <S.Image src={src} alt="Perfil" />
      <S.Title className="my-3">{title}</S.Title>
      <S.Text>{text}</S.Text>
    </S.CardContent>
  );
};
