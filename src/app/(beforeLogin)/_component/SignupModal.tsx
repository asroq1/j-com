'use client';

import style from '@/app/(beforeLogin)/_component/signup.module.css';
import { FormEventHandler } from 'react';
import BackButton from './BackButton';
import onSubmit from '../_lib/signUp';
import { useFormState, useFormStatus } from 'react-dom';

function showMessage(message: string | undefined) {
    if (message === 'no_id') return 'no_id 입력해주세요';
    if (message === 'no_name') return 'no_nick 입력해주세요';
    if (message === 'no_password') return 'no_password 입력해주세요';
    if (message === 'no_image') return 'no_image 입력해주세요';
    if (message === 'user_exist') return 'user_exist 입력해주세요';
    return '몰라 에러';
}
export default function SignupModal() {
    const [state, formAction] = useFormState(onSubmit, { message: null });
    // const [pending, setPending] = useFormStatus();
    // const submit = onSubmit;

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <BackButton />
                        <div>계정을 생성하세요.</div>
                    </div>
                    <form action={formAction}>
                        <div className={style.modalBody}>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor='id'
                                >
                                    아이디
                                </label>
                                <input
                                    id='id'
                                    name='id'
                                    className={style.input}
                                    type='text'
                                    placeholder=''
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor='name'
                                >
                                    닉네임
                                </label>
                                <input
                                    id='name'
                                    name='name'
                                    className={style.input}
                                    type='text'
                                    placeholder=''
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor='password'
                                >
                                    비밀번호
                                </label>
                                <input
                                    id='password'
                                    name='password'
                                    className={style.input}
                                    type='password'
                                    placeholder=''
                                    required
                                />
                            </div>
                            <div className={style.inputDiv}>
                                <label
                                    className={style.inputLabel}
                                    htmlFor='image'
                                >
                                    프로필
                                </label>
                                <input
                                    id='image'
                                    name='image'
                                    className={style.input}
                                    type='file'
                                    accept='image/*'
                                    // onChange={onChangeImageFile}
                                    required
                                />
                            </div>
                        </div>
                        <div className={style.modalFooter}>
                            <button
                                type='submit'
                                className={style.actionButton}
                            >
                                가입하기
                            </button>
                            <div className={style.error}>
                                {showMessage(state?.message)}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
