import { useState } from "react";
import SignInModal from "../../components/admin/SigninModal";

function AdminDashboardPage()
{
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
    <>
        <SignInModal />
    </>
  )
}

export default AdminDashboardPage