import React from "react";

import MapIcon from "../assets/img/map.svg";

const OriginStory: React.FC = () => {
    return (
        <section className="mx-auto w-11/12 sm:w-2/3 xl:w-1/3 text-gray-700 text-lg mb-4 mt-4">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="">
                    <h1 className="text-2xl 2xl:font-bold mb-4 mt-2 text-gray-700 dark:text-gray-200">
                        Origin of phishing
                    </h1>
                    <p className="mb-3 dark:text-white">
                        The origin of the word "phishing" was coined around 1996
                        by hackers stealing America Online accounts and
                        passwords.
                    </p>
                </div>
                <img src={MapIcon} alt="Map" className="w-1/4 mx-auto mb-6" />
            </div>
            <p className="mb-3 dark:text-white">
                By analogy with the sport of angling &#127907;, these Internet
                scammers were using e-mail lures, setting out hooks to "fish"
                for passwords and financial data from the "sea" of Internet
                users.
            </p>
            <p className="mb-3 dark:text-white">
                They knew that most users wouldn't take the bait, a few likely
                would.
            </p>
        </section>
    );
};

export default OriginStory;
