// Inline script that runs before paint to set the theme class on <html>.
// Mirrors the user's system preference and updates live without flashing.
const themeScript = `
(function() {
  try {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    var apply = function(isDark) {
      var root = document.documentElement;
      root.classList.toggle('dark', isDark);
      root.classList.toggle('light', !isDark);
      root.style.colorScheme = isDark ? 'dark' : 'light';
    };
    apply(mql.matches);
    if (mql.addEventListener) mql.addEventListener('change', function(e){ apply(e.matches); });
    else if (mql.addListener) mql.addListener(function(e){ apply(e.matches); });
  } catch (_) {}
})();
`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
}
