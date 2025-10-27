const Footer = () => {
  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Terms and Conditions
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2025 Royal Ponmo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
