import Banner from "./component/Banner.tsx";
import News from "./component/News.tsx";
import Label from "./component/Label.tsx";
/*import AdminDashboard from "./dashbord/AdminDashbord.tsx";*/

export function Home() {
    return (
        <>
            <Banner/>
            <News/>
            <Label/>
            {/*<AdminDashboard/>*/}
        </>

    );
}