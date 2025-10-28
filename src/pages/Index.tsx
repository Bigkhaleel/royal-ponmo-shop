import { useState } from "react";
import { Heart, Truck, Award, Users, Info, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import CartModal from "@/components/CartModal";
import ReviewCard from "@/components/ReviewCard";
import FactCard from "@/components/FactCard";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CartItem, Product } from "@/types/cart";
import { toast } from "@/hooks/use-toast";
import smallPonmoImg from "@/assets/small-ponmo.jpg";
import bigPonmoImg from "@/assets/big-ponmo.jpg";

const products: Product[] = [
  {
    id: "small-ponmo",
    name: "Small Ponmo",
    description: "6 pieces of premium small ponmo",
    price: 2000,
    image: smallPonmoImg,
  },
  {
    id: "big-ponmo",
    name: "Big Ponmo",
    description: "3 pieces of premium big ponmo",
    price: 2000,
    image: bigPonmoImg,
  },
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Replace with your actual WhatsApp number (format: 2348012345678)
  const WHATSAPP_NUMBER = "2348036460731";

  const getCartItemQuantity = (productId: string) => {
    return cart.find((item) => item.id === productId)?.quantity || 0;
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${product.name} added to your cart`,
    });
  };

  const incrementQuantity = (productId: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId: string) => {
    setCart((prev) => {
      const item = prev.find((i) => i.id === productId);
      if (item && item.quantity === 1) {
        return prev.filter((i) => i.id !== productId);
      }
      return prev.map((i) =>
        i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
      );
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    const message = encodeURIComponent("Hello royal ponmo, i want to make an order for ponmo");
    window.open(`https://wa.me/2348036460731?text=${message}`, "_blank");
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      
      <main className="flex-1">
        <Hero />

        {/* Products Section */}
        <section id="products" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Our Products
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose from our selection of premium ponmo. All products are carefully prepared and quality-checked.
            </p>
            
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={getCartItemQuantity(product.id)}
                  onAddToCart={() => addToCart(product)}
                  onIncrement={() => incrementQuantity(product.id)}
                  onDecrement={() => decrementQuantity(product.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What Our Customers Say
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
              <ReviewCard
                name="Chioma Adeleke"
                rating={5}
                review="The best ponmo I've bought online! Fresh, clean, and delivered on time. Will definitely order again."
              />
              <ReviewCard
                name="Tunde Bakare"
                rating={5}
                review="Quality is top-notch and the prices are very reasonable. My family loves the big ponmo for our weekend soups."
              />
              <ReviewCard
                name="Ngozi Okonkwo"
                rating={5}
                review="Fast delivery and excellent customer service. The WhatsApp ordering process is so convenient!"
              />
            </div>
          </div>
        </section>

        {/* Ponmo Facts Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ponmo Facts
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Learn more about this beloved Nigerian delicacy
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <FactCard
                icon={Heart}
                fact="Ponmo is rich in collagen, which is great for skin, hair, and joint health."
              />
              <FactCard
                icon={Sparkles}
                fact="When properly prepared, ponmo has a unique chewy texture that adds variety to soups and stews."
              />
              <FactCard
                icon={Users}
                fact="Ponmo is a popular ingredient in Nigerian cuisine, enjoyed by millions across the country."
              />
              <FactCard
                icon={Info}
                fact="Ponmo is low in fat and can be a good protein source when combined with other nutritious foods."
              />
              <FactCard
                icon={Truck}
                fact="We source our ponmo from trusted suppliers who follow strict hygiene and quality standards."
              />
              <FactCard
                icon={Award}
                fact="Our ponmo goes through thorough cleaning and quality checks before reaching you."
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
      <FloatingWhatsApp phoneNumber={WHATSAPP_NUMBER} />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
