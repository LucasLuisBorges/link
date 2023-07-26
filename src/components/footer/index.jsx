import * as S from './styled';

export const Footer = () => {
  return (
    <div>
      <S.TitleLastVideo className="mt-5 mb-3">Último Vídeo</S.TitleLastVideo>
      <S.ImageLastVideo src="footer.png" alt="Image footer" />
      <div className="my-5 text-center">Criado por @Lucas 2xL</div>
    </div>
  );
};
