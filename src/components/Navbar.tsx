import { ModeToggle } from "@/components/theme-components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="flex flex-row items-center justify-around">
            <h1 className="text-4xl font-bold">ByteRecruit</h1>

            <div className="flex flex-row items-center justify-center gap-x-3">
                <ModeToggle />
                <Button>Sign In</Button>
            </div>
        </nav>
    )
}
