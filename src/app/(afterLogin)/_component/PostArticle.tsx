'use client';
import { useRouter } from 'next/navigation';
import styles from './post.module.css';
type Props = {
    children: React.ReactNode;
    post: {
        User: {
            id: string;
            nickname: string;
            image: string;
        };
        postId: number;
        content: string;
        createdAt: Date;
        Images: any[];
    };
};
const PostArticle = ({ children, post }: Props) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/${post.User.id}/status/${post.postId}`);
    };
    return (
        <article onClickCapture={onClick} className={styles.post}>
            {children}
        </article>
    );
};

export default PostArticle;
