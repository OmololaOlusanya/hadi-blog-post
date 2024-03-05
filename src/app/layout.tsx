import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/utils/theme';
import { ProgressBarProvider } from '@/component/provider/ProgressBarProvider';

export const metadata: Metadata = {
  title: 'Blog Post',
  applicationName: 'Blog Post',
  description: 'A blog post website to catch up on latest updates',
  authors: [{ name: 'Omolola Olusanya' }],
  keywords: ['blog', 'post'],
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProgressBarProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </ProgressBarProvider>
      </body>
    </html>
  );
}
