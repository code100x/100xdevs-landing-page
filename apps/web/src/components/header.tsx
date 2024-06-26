import Link from "next/link";
import { Button } from "@repo/ui/components/ui/button";
import Logo from "./logo";
import { IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="bg-primary px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link href="#" className="flex items-center" prefetch={false}>
        <Logo onFooter={true} />
      </Link>
      <div className="flex items-center gap-4">
        <Button asChild variant="secondary">
          <Link
            href="https://github.com/code100x"
            target="_blank"
            className="text-primary-foreground hover:underline flex items-center gap-x-2"
            prefetch={false}
          >
            <IconBrandGithub className="h-6 w-6" />
            <span>Open Source</span>
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link
            href="#"
            target="_blank"
            className="text-primary-foreground hover:underline flex items-center gap-x-2"
            prefetch={false}
          >
            <IconBrandYoutube className="h-6 w-6" />
            <span>YouTube</span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
