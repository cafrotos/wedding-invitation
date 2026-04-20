import { NextRequest, NextResponse } from 'next/server';
import { weddingConfig } from '@/config/wedding';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.attending) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (weddingConfig.googleSheetsWebAppUrl && weddingConfig.googleSheetsWebAppUrl !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      // Proxy to Google Sheets
      const response = await fetch(weddingConfig.googleSheetsWebAppUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          timezoneOffset: new Date().getTimezoneOffset()
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Script failed: ${response.status} - ${errorText}`);
      }
    } else {
       console.warn("MOCK RSVP: No Google Sheets URL provided", data);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('RSVP Error:', error);
    return NextResponse.json({ error: 'Failed', details: error?.message || 'Unknown error' }, { status: 500 });
  }
}
