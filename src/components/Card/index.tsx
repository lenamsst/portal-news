import { Container, Titulo, Resumo, ButtonNoticia} from "./styles";

interface PropsCard {
    titulo: string;
    image: string;
    resumo: string;
    link: string;
}


export default function Card ({ titulo, image, resumo, link }: PropsCard) {
    return (
        <Container>
            <img src={image} alt="" />
            <div>
                <Titulo>{titulo}</Titulo>
                <Resumo>{resumo}</Resumo>
                <ButtonNoticia href={link}>Ir para noticia</ButtonNoticia>
            </div>
        </Container>


    )

}

