import { ImageElement } from "./styled";

function Image({src, alt}) {
    return (
        <ImageElement src={src} alt = {alt} />
     );
}

export default Image