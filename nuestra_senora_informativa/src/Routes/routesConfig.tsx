import DonationPage from "../Pages/DonationPage/DonationPage"
import GaleryPage from "../Pages/GaleryPage/GaleryPage"
import MainPage from "../Pages/MainPage/MainPage"


const routesConfig = () => [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/donation',
        element: <DonationPage/>
    },
    {
        path: '/galery',
        element: <GaleryPage/>
    }
]

export default routesConfig