import Link from "next/link";
import Image from "next/image";

import Style from "@/app/keepsafe/keepsafe.module.css";

export default function Page() {
    return (
        <>
            <div className={Style.header}>
                <Image
                    src='/zag.svg'
                    alt='Vercel Logo'
                    width={60}
                    height={60}
                    priority
                />
                <h2 className={Style.H2}>ASK</h2>
            </div>
            <div className={Style.container}>
                <div className={Style.body}>
                    <p>Are you thinking about taking your life?</p>
                </div>
            </div>
            <div className={Style.navFooter}>
                <Link className={Style.Link} href='/convos'>
                    NO
                </Link>
                <Link className={Style.Link} href='/keepsafe/flow-01'>
                    YES
                </Link>
            </div>
        </>
    );
}
