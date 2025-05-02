import { CommandGroup, CommandItem, CommandSeparator } from "@/components/ui/command";
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";

export default function SearchSuggestion() {
    return (
        <div>
            <CommandGroup heading="Suggestion">
                <CommandItem>
                    <Calendar/>
                    <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                    <Smile/>
                    <span>Smile</span>
                </CommandItem>
                <CommandItem>
                    <Calculator/>
                    <span>Calculator</span>
                </CommandItem>
            </CommandGroup>
            <CommandSeparator/>
            <CommandGroup heading="Setting">
                <CommandItem>
                    <User/>
                    <span>User</span>
                </CommandItem>
                <CommandItem>
                    <CreditCard/>
                    <span>CreditCard</span>
                </CommandItem>
                <CommandItem>
                    <Settings/>
                    <span>Settings</span>
                </CommandItem>
            </CommandGroup>
        </div>
    );
}