import { ChevronRight } from 'lucide-react';

const LinkButton = ({ href = "#" }: { href?: string }) => {
    return (
        <a href={href} className="text-red-600 text-sm hover:underline flex items-center gap-1">
            View all <ChevronRight size={16} />
        </a>
    );
}

export default LinkButton;
