'use server';

import { redirect } from 'next/navigation';

const signUp = async (prevState: any, formData: FormData) => {
    let shouldRedirect = false;
    ('use server');
    if (!formData.get('id') || !(formData.get('id') as string)?.trim())
        return { message: '아이디를 입력해주세요' };
    if (!formData.get('name') || !(formData.get('name') as string)?.trim())
        return { message: 'name입력해주세요' };
    if (
        !formData.get('password') ||
        !(formData.get('password') as string)?.trim()
    )
        return { message: 'password를 입력해주세요' };
    if (!formData.get('image')) return { message: 'image를 입력해주세요' };

    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
            {
                method: 'post',
                body: formData,
                credentials: 'include',
            },
        );
        if (response.status === 403)
            return { mesaage: '이미 존재하는 아이디입니다.' };
        console.log(response.status);
        shouldRedirect = true;
    } catch (error) {
        console.error(error);
    }
    redirect('/home');
};

export default signUp