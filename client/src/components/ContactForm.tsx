import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-portfolio";
import { Loader2, Send } from "lucide-react";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const { mutate, isPending } = useContact();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  function onSubmit(data: InsertContactMessage) {
    mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <div className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-400 uppercase tracking-widest text-[10px] font-black">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Enter your name" 
                      className="bg-black/20 border-white/5 h-12 rounded-xl focus:border-orange-500/50 transition-all" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zinc-400 uppercase tracking-widest text-[10px] font-black">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="email@example.com" 
                      type="email"
                      className="bg-black/20 border-white/5 h-12 rounded-xl focus:border-orange-500/50 transition-all" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-zinc-400 uppercase tracking-widest text-[10px] font-black">Professional Inquiry</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can I assist your organization's technical needs?" 
                    className="bg-black/20 border-white/5 min-h-[160px] rounded-2xl resize-none focus:border-orange-500/50 transition-all" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isPending}
            className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-amber-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send size={18} />
              </>
            )}
          </button>
        </form>
      </Form>
    </div>
  );
}
