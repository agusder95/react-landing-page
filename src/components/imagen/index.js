import { ImageElement } from "./styled";
import {integer} from 'prop-types'

function Image({src, alt, radius}) {
    return (
        <ImageElement src={src} alt = {alt} radius = {radius}/>
     );
}

Image.prototype = {
    radius: integer
}

Image.defaultProps = {
    radius : 0
}


export default Image