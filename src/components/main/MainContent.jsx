import { Aside, Container, StyledMain } from "./styles"
import Image from 'next/image';
import gravata from "../../../public/assets/gravata.png"
import madeira from "../../../public/assets/madeira.png"
import { IoLogoWhatsapp } from 'react-icons/Io'
import { useEffect, useState } from "react";

export default function MainContent() {
    const [fundo, setFundo] = useState('')

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 900) {
                setFundo(gravata);
            } else {
                setFundo('');
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <StyledMain>
            <Container>

                <div className="box">
                    {fundo ? <Image
                        src={fundo}
                        alt="Imagem de fundo"
                        className="bg-image"
                        quality={100}
                    /> : null}
                    <Aside>
                        <h1 className="titulo">Consumidor</h1>
                        <p className="conteudo">Você conhece seus <u>direitos</u>?
                        </p>


                        <div className="container-icon">

                            <a href="https://wa.me/46991071608">
                                <IoLogoWhatsapp className="icon" alt="chat-whatsapp" />
                                Fale conosco
                            </a>
                        </div>
                    </Aside>
                </div>

            </Container>

        </StyledMain>
    )
}
