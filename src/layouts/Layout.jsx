import BottomNav from "../components/BottomNav";
import ThemeToggle from "../components/ThemeToggle";

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        Bondary
        <ThemeToggle />
      </header>
      <BottomNav />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
