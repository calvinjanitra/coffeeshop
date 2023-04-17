import React from 'react';
import { useRouter } from 'next/router';

const coffeestore = () => {
    const router = useRouter();
    const p = router.query.id;

    return <div>coffeestore {p}</div>;
};

export default coffeestore;
