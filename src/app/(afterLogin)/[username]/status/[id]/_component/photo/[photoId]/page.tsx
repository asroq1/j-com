import Home from '@/app/(beforeLogin)/page';
import React from 'react';

type Props = {
    params: { username: string; id: string; photoId: string };
};
const Page = ({ params }: Props) => {
    params.username;
    params.id;
    params.photoId;
    
    return <Home />;
};

export default Page;
