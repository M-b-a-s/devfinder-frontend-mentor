import useDarkSide from './useDarkMode'
import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'dark' ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="flex justify-between p-3 text-slate-900 dark:text-white">
      <h2 className="text-3xl">devfinder</h2>
      <div className="flex items-center gap-2">
        {/* <h4 className="text-sm">
          DARK
        </h4> */}
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} moonColor="black" sunColor="white">
        </DarkModeSwitch>
        
      </div>
    </div>
  )
}

export default Header