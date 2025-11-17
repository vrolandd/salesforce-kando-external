export async function GET() {
    return new Response(JSON.stringify({ message: 'Order endpoint is live' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST({ request }: { request: Request }) {
    console.log('Received order data:', request);

    return new Response(JSON.stringify({ status: 'Order received', data: request }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}