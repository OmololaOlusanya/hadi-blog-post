import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { Colors } from '@/utils/theme';
import { ProgressBarProvider } from '@/component/provider/ProgressBarProvider';

export const metadata: Metadata = {
  title: { default: 'Blog Post', template: '%s | Blog' },
  applicationName: 'Blog Post',
  description: 'A blog post website to catch up on latest updates',
  authors: [{ name: 'Blog Writer' }],
  keywords: ['blog', 'post'],
};

export const viewport: Viewport = {
  themeColor: Colors.black,
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
