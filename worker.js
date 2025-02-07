addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const url = new URL(request.url);
  
    // Serve index.html for the root path
    if (url.pathname === '/') {
      return new Response(indexHTML, {
        headers: { 'Content-Type': 'text/html' },
      });
    }
  
    // Serve style.css for the /style.css path
    if (url.pathname === '/style.css') {
      return new Response(styleCSS, {
        headers: { 'Content-Type': 'text/css' },
      });
    }
  
    // Return a 404 for other paths
    return new Response('Not found', { status: 404 });
  }
  
  const indexHTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>Hello, World!</h1>
    </body>
  </html>
  `;
  
  const styleCSS = `
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
  h1 {
    color: #333;
  }
  `;