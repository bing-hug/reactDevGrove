import { createBrowserRouter } from "react-router-dom";
import HomeView from '@/pages/Home.tsx'
import LayoutView from '@/pages/Layout/layout-view.tsx'

const router = createBrowserRouter([
    {
        path: '/',
        Component: LayoutView
    }
])
export default router;