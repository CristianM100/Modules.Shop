import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Product from '@/lib/models/Product';

import { NextRequest } from 'next/server';



export async function GET(req: NextRequest, context: { params: { slug: string } }) {
  try {
    await dbConnect();

    // Validate that `params` and `slug` exist
    if (!context.params?.slug) {
      return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
    }

    const { slug } = context.params;

    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { message: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}



/*
interface Params {
  slug: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    await dbConnect();

    const { slug } = await params; 

    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json(
      { message: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
*/