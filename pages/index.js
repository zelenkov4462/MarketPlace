import Head from "next/head";
import {MainLayout} from "../components/MainLayout/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>Waves Marketplace</title>
                <meta charSet='utf-8'/>
            </Head>
                <h1>главная</h1>
        </MainLayout>
    )
}