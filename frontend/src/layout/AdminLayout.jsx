import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <main className="flex flex-col justify-center items-center my-6">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
