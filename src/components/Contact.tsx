import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received",
      description: "We'll get back to you within 24 hours!",
    });
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a Free Quote</h2>
          <p className="text-white/80">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Your Name"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              required
            />
          </div>
          <Input
            placeholder="Phone Number"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            required
          />
          <Textarea
            placeholder="Tell us about your project"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
            required
          />
          <Button
            type="submit"
            size="lg"
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Request Quote
          </Button>
        </form>
      </div>
    </section>
  );
};