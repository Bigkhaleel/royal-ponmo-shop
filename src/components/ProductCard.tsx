import { Plus, Minus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product } from "@/types/cart";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: () => void;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ProductCard = ({
  product,
  quantity,
  onAddToCart,
  onIncrement,
  onDecrement,
}: ProductCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in">
      <div className="aspect-video overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-primary">
          ₦{product.price.toLocaleString()}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        {quantity === 0 ? (
          <Button
            onClick={onAddToCart}
            className="w-full bg-gradient-warm hover:opacity-90 transition-opacity"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        ) : (
          <div className="flex items-center justify-between w-full gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={onDecrement}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            
            <span className="text-xl font-semibold min-w-[3rem] text-center">
              {quantity}
            </span>
            
            <Button
              variant="outline"
              size="icon"
              onClick={onIncrement}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
