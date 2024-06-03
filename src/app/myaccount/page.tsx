import { prisma } from "@/lib/prisma";
import { TabManager } from "./TabManager";

const USER_ID ='admin';
export default async function AccountPage(){
    const user = await prisma.user.findUnique({
        where: {id: USER_ID},
        include:
            {flights:true,
                   }, 
                      }
                );
    if(user ==null){
        return <p>Error: user not found</p>
    }
    return <TabManager tabs={[
        {
            name:'Account Settings',
            content: <div><p>{user.name}</p>
            <p>{user.email}</p></div>,
        },
        {
            name:'Help',
            content: <p>Help</p>,
        },
        
    ]}/>
}