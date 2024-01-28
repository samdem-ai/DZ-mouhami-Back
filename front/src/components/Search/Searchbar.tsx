'use client'

import {Search} from 'lucide-react'
import {Button} from "../ui/button"
import {Input} from "../ui/input"
export default function SearchBar(){

    return (
        <div className="flex items-center justify-center py-6 px-8">
            <div className="flex items-center w-full max-w-[100%] rounded-lg bg-[#001F3F] py-2 px-2">
                <Input
                    className="flex-1 rounded-lg border-0 bg-white py-2 px-4 text-black focus:ring-0 w-[60%]"
                    placeholder="enter the name of your lawyer"
                    type="text"
                />
                <Input
                    className="rounded-lg border-0 bg-white py-2 px-4 text-black focus:ring-0 ml-10 w-[30%]"
                    placeholder="enter the wilaya"
                    type="text"
                />
                {/*TODO ADD search functionnality function usign api */}
                <Button className="rounded-md bg-[#001F3F] px-4 py-2 text-white ml-2 hover:bg-[#1e3a8a]">
                    <Search className="text-white"/>
                </Button>
            </div>
        </div>
    )
}