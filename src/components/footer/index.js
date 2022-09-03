import { 
    FooterA, 
    FooterContent, 
    FooterSpan, 
    FooterStrong, 
    FooterWrapper 
} from "./styles";

function Footer({bg}) {
    return (
        <FooterWrapper bg={bg}>
            <FooterContent>
                <FooterSpan>
                    © Copyrights <FooterStrong>Agustin De Robles</FooterStrong>. All Rights Reserved
                </FooterSpan>
                <FooterSpan>
                    Created template by <FooterA href="https://github.com/agusder95" target='_blank'>me</FooterA>
                </FooterSpan>
            </FooterContent>
        </FooterWrapper>
    );
}

export default Footer;