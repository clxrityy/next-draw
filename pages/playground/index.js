import Head from "next/head";
import Settings from "./components/settings/Settings";
import { createStore } from 'redux';
import { rootReducer } from "./reducers";
import { Provider } from "react-redux";
import NoSSR from "./components/NoSSR";


const store = createStore(rootReducer);

const Playground = () => {

    return (
        <Provider store={store}>
            <div>
                <Head>
                    <title>
                        DRAW | Playground
                    </title>
                </Head>
                <div className="h-screen w-full">
                    <div className="flex">
                        <Settings />
                    </div>
                    <NoSSR />
                </div>
            </div>
        </Provider>
    );
}

export default Playground;