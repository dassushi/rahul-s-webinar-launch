const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card pb-24">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-display text-xl font-bold text-primary">
              Rahul Sharma
            </div>
            <p className="text-muted-foreground text-sm">Build Your Brand, Own Your Future</p>
          </div>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
