import { NextResponse } from 'next/server';
import Product from '@/lib/models/Product';
import dbConnect from '@/lib/dbConnect';


export async function GET() {
  try {
    await dbConnect(); 
    const products = await Product.find({}); 
    return NextResponse.json(products); 
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

/*
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get('search') || '';

  await dbConnect();

  const query = search
    ? { name: { $regex: search, $options: 'i' } } // case-insensitive search
    : { };

  const products = await Product.find(query);

  return NextResponse.json(products);
}*/