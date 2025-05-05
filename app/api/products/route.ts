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

