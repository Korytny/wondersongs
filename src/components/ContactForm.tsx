
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Сообщение отправлено!",
        description: "Спасибо за ваш интерес! Мы свяжемся с вами в ближайшее время.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className={cn('py-20 relative', className)} id="contact">
      <div className="absolute -top-40 right-0 w-80 h-80 bg-magic-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-cursive mb-6 gradient-text text-center">
            Хотите свою Песню Силы?
          </h2>
          
          <p className="text-center mb-8 text-lg">
            Заполните форму ниже, и я свяжусь с вами, чтобы обсудить детали создания вашей персональной Песни Силы.
          </p>
          
          <div className="magic-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder="Как к вам обращаться" 
                  required 
                  className="bg-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Электронная почта</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="Для связи с вами" 
                  required 
                  className="bg-white/50"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Ваше сообщение</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Расскажите немного о том, для кого хотите создать Песню Силы" 
                  rows={5}
                  className="bg-white/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-magic-gradient hover:opacity-90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправляем..." : "Отправить сообщение"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
