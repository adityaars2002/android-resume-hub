import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-semibold">Aditya Raj</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-primary animate-pulse" /> © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;