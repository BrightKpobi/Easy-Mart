import { Badge } from "@/components/ui/badge"

export function CategoryBadge({ label }: { label: string }) {
    return (
        <Badge
            variant="secondary"
            className="capitalize bg-green-50 text-green-700 hover:bg-green-100 border-none px-2 py-0 text-[10px] font-bold tracking-wide"
        >
            {label.replace("-", " ")}
        </Badge>
    )
}