'use client';

import { useRouter } from 'next/navigation';

import Main from '../_component/Main';

const Login = () => {
    const router = useRouter();
    router.replace('i/flow/login');
    <>
        <Main />
    </>;
};

export default Login;
