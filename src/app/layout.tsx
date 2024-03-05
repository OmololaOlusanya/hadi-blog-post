import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme, { Colors } from '@/utils/theme';
import { ProgressBarProvider } from '@/component/provider/ProgressBarProvider';

const meta = {
  title: 'Blog Post',
  description: 'A blog post website to catch up on latest updates',
  url: 'https://hadi-blog-post.vercel.app/',
};

export const metadata: Metadata = {
  title: { default: meta.title, template: '%s | Blog' },
  applicationName: meta.title,
  metadataBase: new URL(meta.url),
  description: meta.description,
  authors: [{ name: 'Blog Writer' }],
  keywords: ['blog', 'post'],
  twitter: {
    card: 'summary_large_image',
    images: `${meta.url}images/logo.jpg`,
    description: meta.description,
    title: meta.title,
  },
  openGraph: {
    type: 'website',
    url: meta.url,
    title: meta.title,
    description: meta.description,
    siteName: meta.title,
    images: [{ url: `${meta.url}images/logo.jpg` }],
  },
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
