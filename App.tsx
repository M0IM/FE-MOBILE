import { useColorScheme } from 'react-native';
import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { darkTheme, lightTheme } from '@/themes/theme';
import queryClient from './src/api/queryClient';
import RootNavigator from './src/navigations/root/RootNavigator';

function App() {
	const scheme = useColorScheme();
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
				<NavigationContainer>
					<RootNavigator />
				</NavigationContainer>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
