import { NextResponse } from "next/server";

const SOURCES: Record<string, string> = {
  forex: "https://www.investing.com/rss/news_301.rss",
  futures: "https://feeds.marketwatch.com/marketwatch/realtimeheadlines/",
  crypto: "https://news.bitcoin.com/feed/",
};

export async function GET(
  _request: Request,
  context: { params: Promise<{ source: string }> }
) {
  const { source } = await context.params;

  const key = source?.toLowerCase().trim();
  console.log("Incoming source:", key);

  const url = SOURCES[key];

  if (!url) {
    return NextResponse.json({ error: "Invalid source" }, { status: 400 });
  }

  try {
    const res = await fetch(url, {
      cache: "no-cache",
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    const text = await res.text();

    return new NextResponse(text, {
      status: 200,
      headers: { "Content-Type": "text/xml; charset=utf-8" },
    });

  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch feed", details: String(err) },
      { status: 500 }
    );
  }
}
