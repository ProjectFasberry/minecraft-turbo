export default function HeadDefault() {
  return (
    <>
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Fasberry" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://api.fasberry.su"/>
      <link rel="preconnect" href="https://volume.fasberry.su" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="preload"
        as="style"
        href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap"
        onLoad={e => {
          e.currentTarget.rel = 'stylesheet';
        }}
      />
      <noscript>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400..900&display=swap"
        />
      </noscript>
    </>
  );
}
