import React, { FormEvent, useEffect, useRef, useState } from "react";

// Hooks
import useVirusTotalLookup from "../Hooks/VirusTotalLookup";

// Interfaces
import VirusTotal from "../Interfaces/VirusTotal";

const UrlTester: React.FC = () => {
    const submitButton = useRef<HTMLInputElement>(null);
    const [url, setUrl] = useState<string>();
    const { isScanning, data } = useVirusTotalLookup<VirusTotal | undefined>(
        url
    );

    useEffect(() => {
        if (isScanning) {
            console.log("timeout");
            setUrl("");
            setTimeout(() => {
                if (submitButton.current) submitButton.current.click();
            }, 30e3);
        }
    }, [isScanning]);

    return (
        <section className="mx-auto">
            <h1 className="text-center text-lg mb-4 dark:text-white">
                Want to test a link that you find suspicious? You can test any
                URL for malware, phishing, scam...
            </h1>
            <form
                className="flex flex-row mb-6"
                onSubmit={(e) => handleSubmit(e)}
            >
                <input
                    type="url"
                    name="query"
                    required
                    autoComplete="off"
                    className="border border-gray-300 shadow-md flex-grow rounded-md p-1 px-2"
                />
                <input
                    type="submit"
                    value="Check URL"
                    className="w-max px-4 py-2 ml-4 bg-green-500 text-white rounded-md shadow-md hover:border-white border-2 dark:border-black"
                    ref={submitButton}
                />
            </form>
            {data && data.response_code === 1 && !isScanning ? (
                <p
                    className={`text-center ${
                        data.positives || -1 > 0 ? "bg-red-300" : "bg-green-400"
                    } rounded-md shadow-lg p-3`}
                    style={{
                        color: data.positives || -1 > 0 ? "#513743" : "#fff",
                    }}
                >
                    The URL {url}{" "}
                    {data.positives || -1 > 0
                        ? "has a high probablity of malicious content!"
                        : "is probably safe."}
                </p>
            ) : (
                isScanning && <p className="dark:text-white">Processing...</p>
            )}
        </section>
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        setUrl(data.get("query")?.toString());
    }
};

export default UrlTester;
