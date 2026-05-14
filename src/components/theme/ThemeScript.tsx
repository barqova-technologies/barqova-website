// Inline pre-paint script. Default = light. localStorage('barqova-theme') wins.
const themeScript = `
(function() {
  try {
    var key = 'barqova-theme';
    var stored = null;
    try { stored = localStorage.getItem(key); } catch (_) {}
    var theme = (stored === 'dark' || stored === 'light') ? stored : 'light';
    var root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    root.style.colorScheme = theme;
  } catch (_) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
