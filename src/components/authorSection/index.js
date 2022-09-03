import { AuthorContainer, AuthorH2, AuthorImage, AuthorImageContent, AuthorP, AuthorWrapper } from "./styles";
import avatar from '../../assets/images/avatar.png'
import Image from "../imagen";

function Author({bg, radius}) {
    return (
        <AuthorWrapper bg = {bg}>
            <AuthorContainer>
                <AuthorH2>What Our Users Think About Us</AuthorH2>
                <AuthorImageContent>
                    <Image src={avatar} radius = {radius}/>
                </AuthorImageContent>
                <AuthorP>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </AuthorP>
            </AuthorContainer>
        </AuthorWrapper>
    );
}

export default Author;