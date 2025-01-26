import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Add a cache-busting query parameter (timestamp in this case)
    const cacheBuster = new Date().getTime(); // or use Math.random() for a unique value
    const modelsUrl = `https://api.zukijourney.com/v1/models?cb=${cacheBuster}`;

    const [modelsResponse] = await Promise.all([
      fetch(modelsUrl),
    ]);
    
    const modelsData = await modelsResponse.json();
    
    return NextResponse.json({
      models: modelsData.data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch models' },
      { status: 500 }
    );
  }
}
