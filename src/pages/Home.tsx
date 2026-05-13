import { useShallow } from "zustand/react/shallow";
import useUserStore from "@/store";

function HomePage() {
    const { user } = useUserStore(useShallow((state) => ({
        user: state.userInfo
    }) ));
    return (
        <>
            <div>这是首页 { user?.name }</div>
        </>
    )
}
export default HomePage;