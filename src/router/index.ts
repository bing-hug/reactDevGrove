import { createBrowserRouter } from "react-router-dom";
import HomeView from '@/pages/Home/home-view.tsx'
import LayoutView from '@/pages/Layout/layout-view.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: LayoutView,
        children: [
            {
                index: true,
                Component: HomeView
            }
        ]
    }
])
export default router;