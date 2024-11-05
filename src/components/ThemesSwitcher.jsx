import { useTheme } from "../hooks/useTheme";

function ThemesSwitcher() {
  const { toggleTheme } = useTheme();
  return (
    <div className="flex items-center gap-1">
      <div
        className="bg-[#3b82f6] cursor-pointer hover:opacity-70 transition-opacity duration-150 size-9 rounded-full"
        onClick={() => toggleTheme("theme-blue")}
      ></div>
      <div
        className="bg-[#10b981] cursor-pointer hover:opacity-70 transition-opacity duration-150 size-9 rounded-full"
        onClick={() => toggleTheme("theme-green")}
      ></div>
      <div
        className="bg-[#ef4444] cursor-pointer hover:opacity-70 transition-opacity duration-150 size-9 rounded-full"
        onClick={() => toggleTheme("theme-red")}
      ></div>
    </div>
  );
}

export default ThemesSwitcher;
