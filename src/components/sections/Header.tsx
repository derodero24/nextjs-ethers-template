import LangButton from '../elements/LangButton';
import ThemeButton from '../elements/ThemeButton';

export default function Header() {
  return (
    <header className="px-6 py-2">
      <nav className="container mx-auto flex justify-between">
        <p className="text-xl">Next.js - wagmi</p>
        <div className="flex items-center space-x-6">
          <ThemeButton className="text-xl hover:opacity-75" />
          <LangButton className="text-xl hover:opacity-75" />
        </div>
      </nav>
    </header>
  );
}
