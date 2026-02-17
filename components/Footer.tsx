import { Code2, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white font-semibold">Rishi Raj Verma</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <p className="text-slate-400 text-sm">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
