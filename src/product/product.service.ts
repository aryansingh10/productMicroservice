import { Injectable, Inject } from '@nestjs/common';
import { products } from 'src/database/schema';
import type { DrizzleClient } from './types';
import { sql } from 'drizzle-orm';

@Injectable()
export class ProductService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: DrizzleClient,
  ) {}

  async findAll() {
    return await this.db.select().from(products);
  }

  async findById(id: number) {
    const [product] = await this.db
      .select()
      .from(products)
      .where(sql`${products.id} = ${id}`);
    return product;
  }
}
