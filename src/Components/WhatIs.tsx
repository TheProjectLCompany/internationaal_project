import React from "react";

const WhatIs: React.FC = () => {
    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-gray-700 text-lg mb-4 mt-4">
            <h1 className="text-2xl 2xl:font-bold mb-4 mt-2">Why phishing?</h1>
            <p className="mb-3">Phishing is used by criminals for financial gain.</p>
            <p className="mb-3">Therefore, the attackers steal personal information from the victim - such as <strong>credit card numbers,
                login credentials, ...</strong> - and sell that information</p>
            <p className="mb-3">It is also often used to gain a foothold in corporate or governmental networks as a part of a larger attack.</p>
        </section>
    );
};

export default WhatIs;