import Link from "next/link";
import { cn } from "@repo/ui/utils";

const Logo = ({ onFooter = false }: { onFooter: boolean }) => {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-x-2 transition hover:opacity-90">
        <img
          src={
            "https://d2szwvl7yo497w.cloudfront.net/courseThumbnails/main.png"
          }
          className="rounded-full"
          height={30}
          width={30}
        />
        <p
          className={cn(
            "text-neutral-700 dark:text-neutral-100",
            onFooter ? "text-3xl text-neutral-200" : "text-xl"
          )}
        >
          100xdevs
        </p>
      </div>
    </Link>
  );
};

export default Logo;
