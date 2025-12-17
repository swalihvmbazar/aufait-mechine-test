
interface AvatarProps {
    src: string;
    size?: number;
}

const Avatar = ({src, size = 36}: AvatarProps) => {
    return (
        <div className="rounded-full overflow-hidden" style={{width: `${size}px`, height: `${size}px`}}>
            <img src={src} className="h-full w-full object-fit" alt="avatar" />
        </div>
    );
}

export default Avatar;
