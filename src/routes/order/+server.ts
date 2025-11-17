export async function GET() {
    return new Response(JSON.stringify({ message: 'Order endpoint is live' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

export async function POST({ request }: { request: Request }) {
    const orderData = await request.json();

    console.log('Received order data:', orderData);

    return new Response(JSON.stringify({ status: 'Order received', data: orderData }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}