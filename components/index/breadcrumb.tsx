import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

type CrumbItem = {
    label: string; 
    path: string;
};

type BreadcrumbsProps = {
    items: CrumbItem[];
};

export default function Breadcrumbs ({ items }: BreadcrumbsProps) {
    return (
        <div className="flex gap-2 items-center text-xs font-bold">
            {items.map((crumb, i) => {
                const isLastItem = i === items.length - 1;
                if (!isLastItem) {
                    return (
                        <>
                            <Link
                                href={crumb.path}
                                key={crumb.label}
                                className="text-[#757575] font-normal hover:text-indigo-400 hover:underline"
                            >
                                {crumb.label}
                            </Link>
                            {/* separator */}
                            <FaChevronRight />
                        </>
                    );
                } else {
                    return crumb.label
                }
            })}
        </div>
    );
};