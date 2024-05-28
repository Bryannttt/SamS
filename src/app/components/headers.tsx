import Link from "next/link"
import styles from './header.module.css'

export default function Header(){
    return (
        <div className="w-full absolute z-10 bg-gray-800">
            <nav className={`text-white`}>
                <div className={`${styles.navbarcontent} 
                relative px-4 py-4 flex justify-between
                items-center`}>
                    <div className="mr-8">
                        <ul className="flex items-center">
                            <li>
                                <Link className="font-bold text-xl mr-4" href="/">
                                    MIDGARD
                                </Link>
                            </li>
                        </ul>
                        </div>
                    <div>
                    <ul className="flex text-sm space-x-4">
                        <li>
                            <Link href="/homepage">Home Page</Link>
                        </li>
                        <li>
                            <Link href="/myaccount">My Account</Link>
                        </li>
                    </ul>
                </div>
                    <div className="flex-1 justify-end flex">
                        <p>####</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}