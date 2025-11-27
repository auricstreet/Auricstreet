export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const res = await fetch("https://api.binance.com/api/v3/ticker/24hr", { cache: "no-store" });
    const data = await res.json();

    if (!Array.isArray(data)) {
      return Response.json({ error: "Invalid data response" }, { status: 500 });
    }

    const filtered = data
      .filter(item => item.symbol?.endsWith("USDT"))
      .slice(0, 12)
      .map(item => ({
        symbol: item.symbol,
        price: parseFloat(item.lastPrice).toFixed(2),
        change: parseFloat(item.priceChangePercent).toFixed(2),
      }));

    return Response.json(filtered);
  } catch (err) {
    return Response.json({ error: "Failed to fetch ticker data", details: String(err) }, { status: 500 });
  }
}
