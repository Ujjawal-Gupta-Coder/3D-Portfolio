import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Sun from "./../public/assets/sun_icon.svg";
import Moon from "./../public/assets/moon_icon.svg";

function ThemeButton() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme("dark");

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button className="flex gap-1 justify-center items-center text-ctnPrimaryLight dark:text-ctnPrimaryDark" 
			onClick={() =>
				theme === "dark" ? setTheme("light") : setTheme("dark")
			}
		> 
			<div className="rounded-full w-8 h-8 p-2 flex justify-center items-center backdrop-filter backdrop-blur-xl bg-opacity-20 bg-[#8c9db1] dark:bg-[#21213467] transition-all duration-100 ease-in ">
				{theme === "light" ? <Moon /> : <Sun />}
			</div>
			{theme === "light" ? "Dark" : "Light"}
		</button>		
	);
}

export default ThemeButton;
