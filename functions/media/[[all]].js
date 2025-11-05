export async function onRequest(context) {
  const { request, env } = context;
  
  const url = new URL(request.url);
  const filePath = url.pathname.slice(7); // Remove '/media/' prefix
  
  try {
    const object = await env.MEDIA_BUCKET.get(filePath);
    
    if (object === null) {
      return new Response('Not Found', { status: 404 });
    }
    
    const headers = new Headers();
    object.writeHttpMetadata(headers);
    headers.set('Cache-Control', 'public, max-age=31536000');
    
    return new Response(object.body, { status: 200, headers });
  } catch (error) {
    return new Response('Server Error', { status: 500 });
  }
}
