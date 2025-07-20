import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export default function useDarkMode() {
  const scheme = useColorScheme();

  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return {
    theme,
    isDark: scheme === 'dark',
  };
}
