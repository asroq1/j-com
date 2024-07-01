import { ReactNode } from 'react';

type HomelayoutProps = {
    children: ReactNode;
};

const Homelayout = ({ children }: HomelayoutProps) => {
    return <>{children}</>;
};

export default Homelayout;
