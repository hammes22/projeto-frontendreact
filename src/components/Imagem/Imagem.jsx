import { ImagemContainer } from "./ImagemStyled";

export default function Imagem({ img, alt, }) {
    return (
        <ImagemContainer>
            <img src={require(`../../imagens/${img}`)} alt={alt}/>
        </ImagemContainer>
    )
}