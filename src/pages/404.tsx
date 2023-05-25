import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';


const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router]);
    
    return (
        <>
            <Head>
                <title>Error</title>
            </Head>
            <div style={{ textAlign: 'center' }}>
                <Image src='/not-found.png' alt='404' width={800} height={600} />
            </div>
        </>
    )

};

export default NotFound;