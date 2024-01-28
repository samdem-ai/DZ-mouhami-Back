'use client'
import ProfileCard from "@/components/Search/ProfileCard";
import {propsProfileType} from "@/lib/types";
import SearchBar from "@/components/Search/Searchbar";

const users: propsProfileType[] = [

    {
        profileImage: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Louai Latreche",
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet,. Nulla facilisi. Nulla facilisi. Sed sed aliquet nisl.",
        id: 1,
        link: "/lawyer/1"
    },    {
        profileImage: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Louai Latreche",
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet,. Nulla facilisi. Nulla facilisi. Sed sed aliquet nisl.",
        id: 1,
        link: "/lawyer/1"
    },    {
        profileImage: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Louai Latreche",
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet,. Nulla facilisi. Nulla facilisi. Sed sed aliquet nisl.",
        id: 1,
        link: "/lawyer/1"
    },{
        profileImage: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Louai Latreche",
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet,. Nulla facilisi. Nulla facilisi. Sed sed aliquet nisl.",
        id: 1,
        link: "/lawyer/1"
    },{
        profileImage: "https://www.w3schools.com/howto/img_avatar.png",
        name: "Louai Latreche",
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet,. Nulla facilisi. Nulla facilisi. Sed sed aliquet nisl.",
        id: 1,
        link: "/lawyer/1"
    },
]
export default function search() {
    return (
        <div className="text-black md:w-[90%] mx-auto  ">
          <h1 className={"font-quick text-[20px] font-bold md:text-[30px] px-8"}>request a professional follow up</h1>
            <SearchBar/>
            <div className={"grid grid-cols-4 gap-4 profile-card-responsive px-8 mt-8"}>
                {users.map((profile) => {
                    return (
                        <ProfileCard key={profile.id} user={profile}></ProfileCard>
                    )
                })}
            </div>

        </div>
    );
}