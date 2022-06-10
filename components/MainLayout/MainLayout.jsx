import {Header} from "../Header/Header";

export function MainLayout({ children }) {
    return (
        <>
            <Header/>
            <main>
                {children}
            </main>
        </>
    )
}