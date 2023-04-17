import React from 'react';
import { useRouter } from 'next/router';

const Coffeestore = () => {
    const router = useRouter();
    const p = router.query.id;

    return <div>Coffeestore {p}</div>;
};

export default Coffeestore;
