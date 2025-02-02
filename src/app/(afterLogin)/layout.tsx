import NavMenu from "./_component/navMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavMenu />
      {children}
    </div>
  );
}
