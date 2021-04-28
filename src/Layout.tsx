import SideDrawer from "components/sidedrawer/SideDrawer";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <SideDrawer />
      {children}
    </>
  );
}
