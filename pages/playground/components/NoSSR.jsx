import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("./Canvas"), {
    ssr: false,
});

export default function NoSSR() {
    return <NoSSRComponent />;
}