import { Resolver, Query, ResolveReference } from '@nestjs/graphql';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  async products() {
    return this.productService.findAll();
  }

  @ResolveReference()
  async resolveReference(reference: { __typename: string; id: number }) {
    return this.productService.findById(reference.id);
  }
}
