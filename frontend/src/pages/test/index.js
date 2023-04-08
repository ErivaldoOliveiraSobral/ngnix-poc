import Link from 'next/link';
import { FetchTest } from '../../components/fetchTest';

const Test = () => {
    return (
        <>
            <FetchTest path='' />
            <Link href='/'>
                BACK TO HOME ROUTER
            </Link>
        </>
    );
}

export default Test;
