export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen items-center justify-center w-full bg-gray-50 bg-dotted-pattern bg-cover bg-fixed bg-center"> 
      {children}
    </div>
  );
}
