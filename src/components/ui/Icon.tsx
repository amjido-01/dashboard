import React from 'react';
import Image from 'next/image';
interface AvatarProps {
    icon: string;
    alt: string;
    extension: string;
    width: number;
    height: number;
}
function Icon({ icon, alt, extension, width, height}: AvatarProps) {
    return <Image src={`/${icon}.${extension}`} alt={alt} width={width} height={height} />
}

export default Icon