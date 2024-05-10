import UserInfo from "@/components/Profile/UserInfo"


interface props{
    username: string
}
export default function page ({ params }: { params: { slug: string } }){
    return (
        <div>
            <h1>{params.slug}</h1>
            <UserInfo/>
        </div>
    )
}