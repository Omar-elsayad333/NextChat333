import Image from "next/image";

const RoundedImg = ({src, height, width, alt}) => {
    return (
        <Image 
            src={src}
            height={height}
            width={width}
            style={{borderRadius: '50%', backgroundColor: '#7b1fa2'}}
            alt={alt}
        />
    );
}
 
export default RoundedImg;