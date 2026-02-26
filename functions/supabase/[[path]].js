export async function onRequest(context) {
    const { request, params } = context;


    const pathSegments = params.path || [];
    const path = pathSegments.join('/');

    const SUPABASE_URL = "https://wdtlrkbrhenouwgibctr.supabase.co";


    const url = new URL(request.url);
    const targetUrl = `${SUPABASE_URL}/${path}${url.search}`;

    const requestOptions = {
        method: request.method,
        headers: new Headers(request.headers),
        redirect: "follow",
    };

    if (request.method !== "GET" && request.method !== "HEAD") {
        requestOptions.body = await request.arrayBuffer();
    }


    try {
        const response = await fetch(targetUrl, requestOptions);
        return response;
    } catch (err) {
        return new Response(`Proxy Error: ${err.message}`, { status: 500 });
    }
}